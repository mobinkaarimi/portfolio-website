import Header from "@components/common/Header";
import ContactMe from "@components/Home/ContactMe";
import Experience from "@components/Home/Experience";
import HeroSection from "@components/Home/HeroSection";
export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen  relative container mx-auto">
      <Header />
      <HeroSection />
      <Experience />
      <ContactMe />
    </main>
  );
}
