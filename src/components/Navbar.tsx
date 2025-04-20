
import { useState } from "react";
import { Sun, Moon, Smartphone, Laptop } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
  isMobileView: boolean;
  toggleView: () => void;
}

const Navbar = ({ toggleTheme, isDark, isMobileView, toggleView }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            Kinnera
          </h1>
          
          <div className="hidden md:flex space-x-8">
            {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${
                  activeSection === section
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleView}
              className="rounded-full"
            >
              {isMobileView ? <Laptop size={20} /> : <Smartphone size={20} />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
