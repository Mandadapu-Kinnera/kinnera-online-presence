
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const toggleView = () => {
    setIsMobileView(!isMobileView);
  };

  return (
    <div className={`min-h-screen`}>
      <Navbar
        toggleTheme={toggleTheme}
        isDark={isDark}
        isMobileView={isMobileView}
        toggleView={toggleView}
      />
      
      {isMobileView ? (
        <div className="pt-24 px-4 flex justify-center">
          <div className="relative border-8 border-gray-800 rounded-[40px] w-[360px] h-[740px] bg-background shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex justify-center items-end pb-1">
              <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-800 flex justify-center">
              <div className="w-12 h-2 bg-gray-600 rounded-full mt-1"></div>
            </div>
            <div className="h-full overflow-y-auto p-2 scrollbar-none">
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
              </main>
            </div>
          </div>
        </div>
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      )}
    </div>
  );
};

export default Index;
