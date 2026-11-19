
import { Marquee } from "@/components/ui/marquee";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiPython,
  SiDocker,
  SiNpm,
  SiFigma,
  SiPrisma,
  SiPostman,
  SiLinux,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
  monochrome?: boolean;
};

// TOP LANE — Languages & Frameworks
const languagesAndFrameworks: Skill[] = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "", monochrome: true },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express.js", icon: SiExpress, color: "", monochrome: true },
];

// BOTTOM LANE — Tools & Systems
const toolsAndSystems: Skill[] = [
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "", monochrome: true },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Linux", icon: SiLinux, color: "", monochrome: true },
  { name: "npm", icon: SiNpm, color: "#CB3837" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
];

function SkillItem({
  name,
  icon: Icon,
  color,
  monochrome,
}: Skill) {
  return (
    <div className="flex shrink-0 items-center gap-2 px-2 py-2">
      <Icon
        aria-hidden="true"
        className={`size-5 shrink-0 ${
          monochrome
            ? "text-neutral-800 dark:text-neutral-100"
            : ""
        }`}
        style={monochrome ? undefined : { color }}
      />

      <span className="whitespace-nowrap text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-400">
        {name}
      </span>
    </div>
  );
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col gap-1 overflow-hidden">
      {/* Languages & Frameworks — Left */}
      <Marquee pauseOnHover className="[--duration:35s]">
        {languagesAndFrameworks.map((skill) => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </Marquee>

      {/* Tools & Systems — Right */}
      <Marquee
        reverse
        pauseOnHover
        className="[--duration:40s]"
      >
        {toolsAndSystems.map((skill) => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </Marquee>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-background to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-background to-transparent" />
    </div>
  );
}
