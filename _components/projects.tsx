import ProjectSection from "@/components/project/project-section";
import { FrameTag } from './frame-tag';

export default function projects() {
  return (
    <section id="projects" className="scroll-mt- py-3">
      <FrameTag>
      <h2 className="text-sm tracking-wider">Projects</h2></FrameTag>
      <ProjectSection previewCount={2} />
    </section>
  );
}
