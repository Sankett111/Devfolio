
import { connection, NextResponse } from "next/server";

const CACHE_SECONDS = 3600;

const query = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        restrictedContributionsCount
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
              color
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  await connection();

  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    return NextResponse.json(
      { error: "GitHub credentials are not configured." },
      { status: 500 }
    );
  }

  const cacheWindowMs = CACHE_SECONDS * 1000;

  const to = new Date(
    Math.floor(Date.now() / cacheWindowMs) * cacheWindowMs
  );

  const from = new Date(to);
  from.setUTCDate(from.getUTCDate() - 364);

  try {
    const response = await fetch(
      "https://api.github.com/graphql",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables: {
            username,
            from: from.toISOString(),
            to: to.toISOString(),
          },
        }),
        next: { revalidate: CACHE_SECONDS },
      }
    );

    if (!response.ok) {
      console.error("GitHub API HTTP error:", response.status);

      return NextResponse.json(
        { error: "Unable to fetch GitHub contributions." },
        { status: 502 }
      );
    }

    const result = await response.json();

    if (result.errors?.length) {
      console.error("GitHub GraphQL error:", result.errors);

      return NextResponse.json(
        { error: "GitHub could not return contribution data." },
        { status: 502 }
      );
    }

    const user = result.data?.user;

    if (!user) {
      return NextResponse.json(
        { error: `GitHub user "${username}" was not found.` },
        { status: 404 }
      );
    }

    const {
      contributionCalendar: calendar,
      restrictedContributionsCount,
    } = user.contributionsCollection;

    // Do not expose a calendar containing restricted contributions.
    if (restrictedContributionsCount !== 0) {
      return NextResponse.json(
        { error: "A public-only contribution calendar is unavailable." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        username,
        totalContributions: calendar.totalContributions,
        weeks: calendar.weeks,
      },
      {
        headers: {
          "Cache-Control": `public, max-age=300, s-maxage=${CACHE_SECONDS}`,
        },
      }
    );
  } catch (error) {
    console.error("Contribution request failed:", error);

    return NextResponse.json(
      {
        error:
          "An unexpected error occurred while fetching contributions.",
      },
      { status: 500 }
    );
  }
}
