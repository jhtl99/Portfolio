import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import jaydenHeadshot from "@/assets/jayden-headshot.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10 animate-float"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 rounded-full bg-white/5 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Content Side */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-slide-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Jayden
                </span>
              </h1>
              <div className="text-xl lg:text-2xl text-blue-100 mb-8 space-y-2">
                <p className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  ECE Student at CMU
                </p>
                <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  AI Enthusiast | Creative Technologist
                </p>
                <p className="animate-fade-in font-medium text-white" style={{ animationDelay: '0.9s' }}>
                  Always creating something
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '1.2s' }}>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-blue-50 font-semibold px-8"
                  onClick={scrollToAbout}
                >
                  Explore My Work
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl transform rotate-6 animate-glow"></div>
              <img
                src={jaydenHeadshot}
                alt="Jayden - ECE Student at CMU"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl animate-float hover-lift"
                style={{ animationDelay: '0.5s' }}
              />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-white/80 hover:text-white transition-colors p-2"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;