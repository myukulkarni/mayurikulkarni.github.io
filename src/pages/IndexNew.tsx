import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import HeroNew from "@/components/HeroNew";
import AboutNew from "@/components/AboutNew";
import SkillsNew from "@/components/SkillsNew";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const IndexNew = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <main className="flex-1 relative">
          {/* Floating sidebar trigger */}
          <div className="fixed top-4 left-4 z-50">
            <SidebarTrigger />
          </div>
          
          {/* Horizontal scroll container */}
          <div className="horizontal-scroll h-screen">
            <HeroNew />
            <AboutNew />
            <SkillsNew />
            <Projects />
            <Achievements />
            <Education />
            <Contact />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default IndexNew;
