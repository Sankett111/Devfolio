
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "./project-data";

type Props = {
  project: Project;
};

export default function Project({ project }: Props) {
  const isCompleted = project.status === "Completed";

  return (
    <article className="group grid grid-cols-1 gap-y-6 py-9 sm:grid-cols-[minmax(0,1fr)_230px] sm:gap-x-6">

      {/* Project information */}
      <div className="min-w-0">

        {/* Heading */}
        <div>
          <h3 className="text-[25px] font-semibold tracking-[-0.04em] text-neutral-900 transition-colors group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-white">
            {project.title}
          </h3>

          {/* Metadata */}
          <div className="mt-2.5 flex flex-wrap items-center gap-2 font-technical text-[10px] uppercase tracking-[0.1em]">
            <span className="text-neutral-500 dark:text-neutral-400">
              {project.category}
            </span>

            <span className="text-neutral-300 dark:text-neutral-700">
              /
            </span>

            <span className="text-neutral-500 dark:text-neutral-400">
              {project.year}
            </span>

            <span className="text-neutral-300 dark:text-neutral-700">
              /
            </span>

            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 font-medium tracking-wide ${
                isCompleted
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/40 dark:text-emerald-400"
                  : "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/70 dark:bg-blue-950/40 dark:text-blue-400"
              }`}
            >
              <span
                className={`size-1.5 rounded-full ${
                  isCompleted ? "bg-emerald-500" : "bg-blue-500"
                }`}
              />
              {project.status}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-[22px] max-w-[420px] text-[15px] leading-[1.65] text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>

        {/* Technical details */}
        <div className="mt-7 space-y-[18px] text-[13px]">

          {/* Focus */}
          <div className="flex flex-wrap items-start gap-3">
            <span className="w-10 shrink-0 pt-1 font-technical text-[12px] tracking-wide text-neutral-400">
              FOCUS
            </span>

            <span className="text-neutral-700 dark:text-neutral-300">
              {project.focus}
            </span>
          </div>

          {/* Technology stack */}
          <div className="flex flex-wrap items-start gap-3">
            <span className="w-10 shrink-0 pt-1.5 font-technical text-[12px] tracking-wide text-neutral-400">
              STACK
            </span>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-dashed border-neutral-200 bg-neutral-50 px-2 py-1 font-technical text-[10px] text-neutral-600 shadow-[inset_0_1px_2px_rgba(0,0,0,0.035)] transition-colors dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="mt-5 flex flex-wrap gap-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] font-medium text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Source code
              <ArrowUpRight size={14} />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] font-medium text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Live site
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Project preview */}
      <div className="col-start-1 mt-0 sm:col-start-2 sm:row-start-1">
        <div className="relative aspect-[11/10] overflow-hidden rounded-md">
          <div className="relative h-full w-full overflow-hidden rounded-[2px]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="rounded-2xl object-cover"
              sizes="(max-width: 640px) 100vw, 230px"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
