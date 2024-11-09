import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import MissionStatement from "@/app/components/MissionStatement";
import ProjectsGallery from "@/app/components/ProjectsGallery";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <header className="py-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Replace Text with Image */}
          <div className="flex items-center">
            <Image 
              src="/images/digitalproject.png" 
              alt="Digital Project" 
              width={150} 
              height={50} // Adjust width and height as needed
            />
          </div>
          
          <nav className="flex space-x-6">
            <a href="#main" className="text-gray-700">Main</a>
            <a href="#gallery" className="text-gray-700">Gallery</a>
            <a href="#projects" className="text-gray-700">Projects</a>
            <a href="#certifications" className="text-gray-700">Certifications</a>
            <a href="#contacts" className="text-gray-700">Contacts</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <MissionStatement />
        <ProjectsGallery />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
