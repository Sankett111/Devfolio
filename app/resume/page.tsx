
import Footer from "@/_components/footer";
import Navbar from "@/_components/navbar";
import Resume from "@/_components/resume";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-175 px-5 pb-10 pt-20">
        <Resume />
        <Footer/>
      </main>
    </>
  );
}
