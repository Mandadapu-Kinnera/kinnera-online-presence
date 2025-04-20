
import { useState, useEffect } from "react";
import { Sun, Moon, Smartphone, Laptop, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
  isMobileView: boolean;
  toggleView: () => void;
}

const Navbar = ({ toggleTheme, isDark, isMobileView, toggleView }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 300; // Add offset to account for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            Kinnera
          </h1>
          
          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-full"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          
          {/* Desktop Navigation */}
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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-3 pb-3">
              {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize py-2 ${
                    activeSection === section
                      ? "text-primary font-semibold"
                      : "text-foreground/80"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-4 pt-3 border-t border-border">
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
