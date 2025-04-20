
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

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
    <div className={`min-h-screen ${isMobileView ? "max-w-md mx-auto" : ""}`}>
      <Navbar
        toggleTheme={toggleTheme}
        isDark={isDark}
        isMobileView={isMobileView}
        toggleView={toggleView}
      />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
};

export default Index;
