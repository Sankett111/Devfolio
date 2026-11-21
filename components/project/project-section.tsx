import { projects } from "./project-data";
import ProjectCard from "./project-card";

export default function ProjectSection({ previewCount = projects.length }: { previewCount?: number }) {
  const cards = projects.map((project, index) => (
    <div key={project.title}>
      {index > 0 && <div className="animated-border" />}
      <ProjectCard project={project} />
    </div>
  ));

  return (
    <div className="mt-6">
      {cards.slice(0, previewCount)}
      {cards.length > previewCount && (
        <details className="group/more">
          <summary
            className="mx-auto mb-4 flex w-fit cursor-pointer list-none items-center justify-center
              rounded-2xl border border-teal-900/10 bg-linear-to-br from-white/30 via-white/10 to-teal-100/50
              px-4 py-2.5 text-sm font-medium dark:text-teal-200
              shadow-[0_4px_14px_rgba(15,118,110,0.10),inset_0_1px_0_rgba(255,255,255,0.95)]
              backdrop-blur-md backdrop-saturate-150
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600
              dark:border-white/15 dark:from-white/15 dark:via-white/5 dark:to-teal-400/15
              dark:shadow-[0_4px_14px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.18)]
              [&::-webkit-details-marker]:hidden"
          >
            <span className="group-open/more:hidden">Show more</span>
            <span className="hidden group-open/more:inline">Show less</span>
          </summary>
          {cards.slice(previewCount)}
        </details>
      )}
    </div>
  );
}
