import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <footer className="bg-[#1A3321] text-white pt-24 pb-10 relative">
      <div className="mx-auto px-[140px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <svg
                width="56"
                height="56"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-lg"
              >
                <rect width="120" height="120" fill="#A3E635" />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#1A3321"
                  fontSize="60"
                  fontFamily="Arial, sans-serif"
                  fontWeight="bold"
                >
                  WX
                </text>
              </svg>
              <span className="text-4xl font-bold ml-4">WasteX</span>
            </div>
            <p className="text-base text-gray-300 max-w-sm">
              Take control of your waste management with WasteX—empowering
              producers and buyers to connect, trade, and reuse waste
              seamlessly. Sustainability. Simplified.
            </p>
          </div>

          {/* Company Links */}
          <div className="lg:justify-self-center">
            <h4 className="font-bold text-white text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  Terms of service
                </a>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div className="lg:justify-self-center">
            <h4 className="font-bold text-white text-lg mb-5">Information</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:justify-self-end">
            <h4 className="font-bold text-white text-lg mb-5">
              Our social media
            </h4>
            <div className="flex space-x-5">
              <a href="#" className="hover:opacity-80">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.442c-3.141 0-3.499.012-4.724.068-2.753.125-3.951 1.32-4.076 4.076C3.175 8.95 3.163 9.3 3.163 12c0 2.7.012 3.05.068 4.276.125 2.753 1.323 3.951 4.076 4.076C8.501 20.825 8.86 20.837 12 20.837s3.499-.012 4.724-.068c2.753-.125 3.951-1.323 4.076-4.076.058-1.225.068-1.575.068-4.276 0-2.7-.012-3.05-.068-4.276-.125-2.753-1.323-3.951-4.076-4.076C15.499 3.615 15.141 3.605 12 3.605z" />
                  <path d="M12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.822a3.688 3.688 0 110-7.375 3.688 3.688 0 010 7.375z" />
                  <path d="M16.965 6.365a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0015.06 3c-2.404 0-4.037 1.473-4.037 4.156v2.37h-2.778v3.21h2.778v8.196h3.355z" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h3.308l6.702 7.785L18.244 2.25zM17.06 19.75h1.854L7.842 4.25H5.892l11.168 15.5z" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554V13.56c0-1.646-.03-3.758-2.29-3.758-2.292 0-2.642 1.79-2.642 3.638v6.997H8.39V8.98h3.402v1.56h.048c.473-.896 1.63-1.843 3.36-1.843 3.595 0 4.258 2.368 4.258 5.447v6.308zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zM3.56 20.452h3.55v-11.47H3.56v11.47z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 border-t border-gray-700">
        <div className="mx-auto px-[140px] pt-8 text-center text-sm text-gray-300 relative">
          <p>
            © 2025 WasteX | Simplifying waste. Boosting sustainability. All
            rights reserved, WasteX Corporation
          </p>
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="absolute -top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-full shadow-lg transition-opacity duration-300"
              aria-label="Scroll to top"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 