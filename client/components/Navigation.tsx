import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Producer", path: "/producer" },
    { label: "Buyer", path: "/buyer" },
    { label: "About us", path: "/about" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full border-b border-wastex-border bg-wastex-surface">
      <div className="mx-auto px-16 lg:px-16 md:px-8 sm:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Side - Logo and Navigation Links */}
          <div className="flex items-center gap-14">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/fca5f3e157cf214b51b8bcc837d1189326250c90?width=306"
                alt="WasteX Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-2 py-3 rounded-full font-inter text-base transition-colors",
                    "hover:bg-black/5",
                    isActive(link.path)
                      ? "font-bold text-wastex-secondary tracking-[0.75px]"
                      : "font-normal text-wastex-text tracking-[0.75px]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center justify-center px-6 py-2 rounded-full border-2 border-wastex-secondary text-wastex-secondary font-bold text-lg tracking-[1px] hover:bg-wastex-secondary hover:text-white transition-colors">
              Log in
            </button>
            <button className="flex items-center justify-center px-6 py-2 rounded-full bg-wastex-primary text-wastex-text font-bold text-lg tracking-[1px] hover:bg-wastex-primary/90 transition-colors">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="p-2 rounded-md text-wastex-text hover:bg-black/5">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="lg:hidden border-t border-wastex-border bg-wastex-surface">
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block px-4 py-2 rounded-md font-inter text-base transition-colors",
                  isActive(link.path)
                    ? "font-bold text-wastex-secondary bg-wastex-secondary/10"
                    : "font-normal text-wastex-text hover:bg-black/5"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-wastex-border">
              <button className="w-full px-6 py-2 rounded-full border-2 border-wastex-secondary text-wastex-secondary font-bold text-lg tracking-[1px] hover:bg-wastex-secondary hover:text-white transition-colors">
                Log in
              </button>
              <button className="w-full px-6 py-2 rounded-full bg-wastex-primary text-wastex-text font-bold text-lg tracking-[1px] hover:bg-wastex-primary/90 transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
