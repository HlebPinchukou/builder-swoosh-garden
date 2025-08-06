import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-us') {
      const el = document.getElementById('contact-us');
      if (el) {
        const headerOffset = 80; // height of the navbar
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
      }
    }
  }, [location]);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
          className="py-16 px-4 md:px-16 lg:px-20 bg-gray-100 flex items-center justify-center min-h-[539px] max-w-8xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-8 max-w-3xl text-left">
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">
                  ABOUT US
                </h3>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-automate font-bold text-black leading-tight tracking-wider w-full text-left">
                  Connecting waste for a sustainable future.
                </h1>
                <p className="text-xl text-black leading-relaxed tracking-wide text-left">
                  Lorem iposum
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex-shrink-0">
              {/* Purple decorative square */}
              <div className="absolute -left-8 -top-8 w-26 h-26 bg-purple-300 rounded-2xl"></div>
              <img
                src="/images/image-26.png"
                alt="Waste management professionals"
                className="w-full max-w-2xl h-auto rounded-2xl relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="bg-white py-20 px-4 md:px-16 lg:px-20">
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <p className="text-2xl text-gray-700 leading-relaxed">
              At WasteX, we believe that waste is not just a problem—it's an opportunity. Our
              mission is to create a more sustainable world by simplifying waste management
              through innovative technology and collaborative solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide a platform where producers and buyers of waste can easily connect, trade, and reuse
              materials, contributing to a circular economy and a cleaner environment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By fostering a marketplace for waste, we enable businesses and individuals to turn what was once
              considered waste into valuable resources. Whether you're looking to dispose of materials
              responsibly, find reusable waste, or reduce your carbon footprint, WasteX offers a seamless,
              transparent, and efficient solution.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision is to lead the charge in transforming waste management practices globally, making
              sustainability more accessible and practical for everyone. With WasteX, sustainability is no longer
              a challenge—it's a simple, actionable reality. Join us in reshaping the future of waste. Together, we
              can reduce waste, promote reuse, and boost environmental responsibility.
            </p>
          </div>
        </section>

        {/* Contact Us Section */}
        <section
          id="contact-us"
          className="py-20 px-4 md:px-16 lg:px-20 scroll-mt-20"
          style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
            {/* Left Image */}
            <div className="relative flex-shrink-0">
              <img
                src="/images/image-27.png"
                alt="Customer service representative"
                className="w-full max-w-[900px] h-auto rounded-2xl relative z-10"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-start gap-8 max-w-lg w-full">
              <h2 className="text-2xl font-automate font-bold text-black tracking-wider">
                Contact us
              </h2>

              <div className="flex flex-col gap-6 w-full">
                {/* Email Input */}
                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-2 py-3 border-b border-gray-300 bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-500 text-base tracking-wider"
                  />
                </div>

                {/* Dropdown */}
                <div className="flex flex-col gap-1">
                  <div className="relative">
                    <select className="w-full px-2 py-3 border-b border-gray-300 bg-transparent text-gray-400 focus:outline-none focus:border-gray-500 text-base tracking-wider appearance-none">
                      <option value="">What is this about?</option>
                      <option value="general">General inquiry</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                    <svg
                      className="absolute right-0 top-4 w-6 h-6 text-gray-400 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Your message"
                    className="w-full px-2 py-3 border-b border-gray-300 bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-500 text-base tracking-wider"
                  />
                </div>
              </div>

              <button className="bg-wastex-primary text-black px-6 py-2 rounded-full text-lg font-automate font-normal tracking-wider hover:bg-wastex-primary/90 transition-colors">
                Send
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* Desktop version (601px and up) */}
        <div className="hidden min-[601px]:block">
          <section className="relative w-full">
            <img
              src="/images/image-33.png"
              alt="Join WasteX"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="w-[57%] ml-[43%] flex flex-col items-start gap-6 px-4 sm:px-8 md:px-12">
                <p className="font-medium leading-snug text-black text-xs min-[700px]:text-sm min-[800px]:text-base min-[900px]:text-lg min-[1000px]:text-xl min-[1200px]:text-2xl min-[1400px]:text-3xl min-[1500px]:text-4xl text-left">
                  Join WasteX for <span className="font-bold">FREE</span> and enjoy
                  your first job on us! Simplify your waste management today!
                </p>
                <button className="bg-wastex-secondary text-white px-6 py-3 rounded-full text-xs min-[1000px]:text-sm min-[1200px]:text-base min-[1400px]:text-lg min-[1500px]:text-xl font-automate font-normal tracking-wider hover:bg-wastex-secondary/90 transition-colors w-fit flex-shrink-0">
                  Get started
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Mobile/Tablet version (0px to 600px) */}
        <div className="min-[601px]:hidden">
          <section style={{ backgroundColor: "#A4D0B4" }} className="w-full overflow-hidden">
            <img src="/images/image-32.png" alt="Join WasteX" className="w-full h-auto" />
            <div className="flex flex-col justify-center items-start text-left flex-1 px-8 py-10 h-full">
              <p className="text-3xl text-black font-medium leading-snug max-w-4xl">
                Join WasteX for <span className="font-bold">FREE</span> and enjoy your first job on us! Simplify your waste management today!
              </p>
              <button className="mt-8 bg-wastex-secondary text-white px-8 py-4 rounded-full text-xl font-automate font-normal tracking-wider hover:opacity-90 transition-opacity w-fit">
                Get started
              </button>
            </div>
          </section>
        </div>
    </div>
  );
}
