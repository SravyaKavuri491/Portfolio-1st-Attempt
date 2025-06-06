
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient"></div>
      
      {/* Floating geometric shapes */}
      <div className="floating-shape w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
      <div className="floating-shape w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg rotate-45"></div>
      <div className="floating-shape w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient text-shadow">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Full Stack Developer & UI/UX Designer creating digital experiences that matter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button size="lg" className="text-lg px-8 py-6 hover-glow transition-all duration-300 hover:scale-105">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass-effect hover:scale-105 transition-all duration-300">
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-6 animate-slide-up">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 hover-glow">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 hover-glow">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 hover-glow">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-all duration-300"
        onClick={scrollToAbout}
      >
        <ArrowDown className="w-6 h-6" />
      </Button>
    </section>
  );
};

export default Hero;
