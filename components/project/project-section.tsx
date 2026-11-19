import { projects } from "./project-data";
import ProjectCard from "./project-card";

export default function ProjectSection() {
  return (
    <div className="mt-6">
      {projects.map((project, index) => (
        <div key={index}>
          {index > 0 && <div className="animated-border" />}
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}