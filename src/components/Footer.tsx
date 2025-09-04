import { Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h3 className="text-2xl font-bold mb-2">Jayden</h3>
              <p className="text-blue-100 mb-4">
                ECE Student at CMU | AI Enthusiast | Creative Technologist
              </p>
              {/* <p className="text-blue-200 text-sm flex items-center justify-center lg:justify-start">
                Made with <Heart size={16} className="mx-1 text-red-400" /> using React & TypeScript
              </p> */}
            </div>
            
            <div className="flex flex-col items-center">
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white hover:text-primary mb-4"
              >
                <ArrowUp size={16} className="mr-2" />
                Back to Top
              </Button>
              <p className="text-blue-200 text-sm">
                © {new Date().getFullYear()} Jayden. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;