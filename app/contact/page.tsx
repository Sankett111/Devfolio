
import Navbar from "@/_components/navbar";
import Contact from "@/_components/contact";
import Footer from "@/_components/footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-175 px-5 pb-10 pt-20">
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}
