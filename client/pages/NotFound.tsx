import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-wastex-surface">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-wastex-text">404</h1>
          <p className="text-xl text-wastex-text/80 mb-8">Oops! Page not found</p>
          <Link
            to="/"
            className="px-6 py-3 bg-wastex-primary text-wastex-text font-bold rounded-full hover:bg-wastex-primary/90 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
