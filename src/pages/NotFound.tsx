import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-primary">404 - Page Not Found</h1>
          <p className="text-xl text-gray-medium mb-8">Oops! The page you're looking for doesn't exist.</p>
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors font-medium"
          >
            Return to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
