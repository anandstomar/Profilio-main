import HeroSection from "@/components/hero-section";
import CurrentWorkSection from "@/components/current-work-section";
import SkillsSection from "@/components/skills-section";
import EducationSection from "@/components/education-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import ProjectsSection from "@/components/project-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CurrentWorkSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
