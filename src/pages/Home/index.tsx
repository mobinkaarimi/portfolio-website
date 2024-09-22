import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import ContactMe from "@components/Home/ContactMe";
import Experience from "@components/Home/Experience";
import HeroSection from "@components/Home/HeroSection";
import Skills from "@components/Home/Skills";
import Work from "@components/Home/Work";
export default function Home() {
  return (
    <div>
        <Header />
      <main className="flex flex-col w-full min-h-screen  relative container mx-auto px-6 md:px-0">
        <HeroSection />
        <Skills />
        <Experience />
        {/* <Work /> */}
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}
