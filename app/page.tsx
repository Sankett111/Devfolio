import Navbar from "@/_components/navbar";
import HomeSection from "@/_components/home";
import Projects from "@/_components/projects";
import Resume from "@/_components/resume";
import Blogs from "@/_components/blogs";
import Contact from "@/_components/contact";
import Footer from "@/_components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto min-h-screen max-w-175 px-5 pb-10 pt-28">
        <HomeSection />
        <Projects />
        <Resume />
        <Blogs />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

