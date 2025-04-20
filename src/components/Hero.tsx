
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent animate-fade-in">
          Mandadapu Kinnera
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Computer Science Engineering Student specialized in Cyber Security,
          passionate about building innovative solutions with modern technologies.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => window.open("https://www.linkedin.com/in/kinnera-mandadapu-b20668303", "_blank")}
            className="bg-primary hover:bg-primary/90"
          >
            Connect on LinkedIn
          </Button>
          <Button
            onClick={() => window.open("https://github.com/Mandadapu-Kinnera", "_blank")}
            variant="outline"
          >
            View GitHub
          </Button>
        </div>
        <div className="pt-12 animate-bounce">
          <ArrowDown className="mx-auto text-primary" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
