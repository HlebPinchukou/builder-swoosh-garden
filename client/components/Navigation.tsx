import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Producer", path: "/producer" },
    { label: "Buyer", path: "/buyer" },
    { label: "About us", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="w-full border-b border-wastex-border bg-white">
      <div className="mx-auto px-4 sm:px-8 lg:px-16">
        {/* --- DESKTOP NAVIGATION (Visible on lg and up) --- */}
        <div className="hidden lg:flex items-center justify-between h-20">
          {/* Left Side: Desktop Logo + Nav Links */}
          <div className="flex items-center gap-14">
            <a href="/" className="flex items-center gap-4 flex-shrink-0">
              <img
                src="/images/image-21.png"
                alt="WasteX Logo"
                className="h-10 w-auto"
              />
            </a>
            <div className="flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-2 py-3 font-inter text-base transition-colors text-center w-24",
                    isActive(link.path)
                      ? "font-bold text-wastex-secondary tracking-[0.75px]"
                      : "font-normal text-wastex-text tracking-[0.75px] hover:text-gray-500"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Right Side: Desktop Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center px-6 py-2 rounded-full border-2 border-wastex-secondary text-wastex-secondary font-automate font-normal text-lg tracking-[1px] hover:bg-wastex-secondary hover:text-white transition-colors">
              Log in
            </button>
            <button className="flex items-center justify-center px-6 py-2 rounded-full bg-wastex-primary text-wastex-text font-automate font-normal text-lg tracking-[1px] hover:bg-wastex-primary/90 transition-colors">
              Sign up
            </button>
          </div>
        </div>

        {/* --- MOBILE NAVIGATION (Hidden on lg and up) --- */}
        <div className="lg:hidden flex items-center justify-between h-20">
          {/* Mobile Logo (Icon Only) */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/images/image-29.png"
              alt="WasteX Logo"
              className="h-10 w-auto"
            />
          </a>
          {/* Mobile Burger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative h-8 w-8"
            aria-label="Toggle menu"
          >
            <div
              className={cn(
                "absolute top-1/2 left-1/2 w-7 h-0.5 bg-gray-800 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
                menuOpen ? "rotate-45" : "-translate-y-2"
              )}
            ></div>
            <div
              className={cn(
                "absolute top-1/2 left-1/2 w-7 h-0.5 bg-gray-800 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300",
                menuOpen ? "opacity-0" : "opacity-100"
              )}
            ></div>
            <div
              className={cn(
                "absolute top-1/2 left-1/2 w-7 h-0.5 bg-gray-800 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
                menuOpen ? "-rotate-45" : "translate-y-2"
              )}
            ></div>
          </button>
        </div>
      </div>

      {/* --- MOBILE FLYOUT MENU --- */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="pt-2 pb-3 space-y-1 px-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  isActive(link.path)
                    ? "text-wastex-secondary bg-wastex-secondary/10"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col gap-3 px-4">
              <button className="w-full px-6 py-2 rounded-full border-2 border-wastex-secondary text-wastex-secondary font-automate font-normal text-lg tracking-[1px] hover:bg-wastex-secondary hover:text-white transition-colors">
                Log in
              </button>
              <button className="w-full px-6 py-2 rounded-full bg-wastex-primary text-wastex-text font-automate font-normal text-lg tracking-wider hover:bg-wastex-primary/90 transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
