
import Navbar from "@/_components/navbar";
import { FrameTag } from "@/_components/frame-tag";
import ProjectSection from "@/components/project/project-section";
import ContributionGraph from "@/_components/contribution-graph";
import Footer from "@/_components/footer";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-175 px-5 pb-10 pt-20">
        <section id="projects" className="py-3">
          <FrameTag>
            <h2 className="text-sm tracking-wider">Projects</h2>
          </FrameTag>
          <ProjectSection />
          <div className="animated-border" />
          <h1 className="py-4 px-4 text-md mt-2 font-sans italic text-neutral-600 dark:text-muted-foreground">
            Record of the Work, Experiments, and progress along the Way...
          </h1>
          <ContributionGraph />
        </section>
        <Footer/>
      </main>
    </>
  );
}
