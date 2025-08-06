import { Link } from "react-router-dom";
import FaqAccordion from "@/components/FaqAccordion";
import WasteItemsCarousel from "@/components/WasteItemsCarousel";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#how-it-works') {
      const el = document.getElementById('how-it-works');
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
      <section className="relative w-full">
        {/* --- DESKTOP HERO (Visible on 900px and up) --- */}
        <div className="max-[899px]:hidden">
          <img
            src="/images/image-5.png"
            alt="WasteX team member in uniform"
            className="w-full h-auto rounded-b-3xl"
          />
          {/* Base styles for 900-950px. Then min-[951px], min-[1101px], min-[1351px] for wider screens. */}
          <div className="absolute inset-0 z-10 flex flex-col items-start gap-6 p-8 max-w-sm min-[951px]:max-w-lg min-[1101px]:max-w-2xl min-[1351px]:max-w-5xl min-[1101px]:p-12 min-[1351px]:p-20 min-[1101px]:gap-8 min-[1351px]:gap-12">
            <div className="flex items-center gap-3">
              <img
                src="/images/marker-pin.svg"
                alt="Marker pin"
                className="w-8 h-8 flex-shrink-0"
              />
              <p className="text-wastex-hero-text text-xs min-[951px]:text-lg min-[1101px]:text-xl min-[1351px]:text-2xl font-medium uppercase tracking-wider">
                Trinidad & Tobago waste Removal and Disposal
              </p>
            </div>
            <h1 className="text-wastex-hero-text text-lg min-[951px]:text-3xl min-[1101px]:text-5xl min-[1351px]:text-7xl font-automate font-bold leading-tight tracking-wider">
              Connecting waste producers and buyers.
            </h1>
            <p className="text-wastex-hero-text text-sm min-[951px]:text-xl min-[1101px]:text-2xl min-[1351px]:text-3xl font-medium tracking-wider">
              Join WasteX for FREE—your first job is on us!
            </p>
            <button className="bg-wastex-primary text-wastex-text px-8 py-4 rounded-full text-xs min-[951px]:text-lg min-[1101px]:text-xl min-[1351px]:text-2xl font-automate font-normal tracking-wider">
              Get started
            </button>
          </div>
        </div>

        {/* --- MOBILE/TABLET HERO (Visible on 899px and down) --- */}
        <div className="min-[900px]:hidden relative">
          <img
            src="/images/image-30.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-6 min-[490px]:p-10 gap-4 min-[490px]:gap-6">
            <div className="flex items-center gap-2 text-white">
              <img src="/images/marker-pin.svg" alt="Location" className="w-5 h-5 min-[490px]:w-7 min-[490px]:h-7"/>
              <span className="font-semibold text-sm min-[490px]:text-base tracking-wider">
                TRINIDAD & TOBAGO
              </span>
            </div>
            <h1 className="hero-title-mobile font-automate font-bold text-white leading-tight text-4xl min-[490px]:text-6xl">
              Connecting waste producers and buyers.
            </h1>
            <p className="text-lg min-[490px]:text-2xl text-white">
              Join WasteX for <span className="font-bold">FREE</span>—your first job is on us!
            </p>
            <button className="bg-wastex-primary text-black px-6 min-[490px]:px-8 py-3 min-[490px]:py-4 rounded-full text-lg min-[490px]:text-xl font-automate font-normal tracking-wider mt-2 self-start">
              Get started
            </button>
          </div>
        </div>
      </section>

        {/* Welcome Section */}
        <section className="relative">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-center gap-6 max-w-4xl text-center py-16 lg:py-24 px-4 md:px-16 lg:px-20 mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-automate font-bold text-wastex-text leading-tight tracking-wider">
              Welcome to WasteX
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-wastex-text leading-relaxed">
              WasteX helps businesses connect for responsible waste disposal and
              recycling. Whether you're a company looking to dispose of waste or
              one looking to collect and repurpose it, we make the process
              seamless and efficient.
            </p>
          </div>

          {/* Full-width Background Image */}
          <img
            src="/images/image-6.png"
            alt="WasteX application interface demonstration"
            className="w-full h-auto hidden min-[491px]:block"
          />
          <img
            src="/images/image-31.png"
            alt="How WasteX works on mobile"
            className="w-full h-auto block min-[491px]:hidden"
          />
        </section>

        {/* How it works Section */}
        <section id="how-it-works" className="flex flex-col min-[1200px]:flex-row justify-center items-center gap-[32px] py-20 lg:py-24 xl:py-32 px-4 md:px-16 lg:px-12 xl:px-20">
          {/* Left Content */}
          <div className="flex flex-col items-center min-[1200px]:items-start text-center min-[1200px]:text-left gap-6 max-w-lg">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-automate font-bold text-wastex-text leading-tight tracking-wider">
              How it works?
            </h2>

            {/* Steps */}
            <div className="flex flex-col gap-6">
              {/* Step 1 */}
              <div className="flex items-center gap-3">
                <div className="flex w-8 h-8 items-center justify-center rounded-full bg-wastex-icon-bg">
                  <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none">
                    <path
                      d="M20.5 21.7C20.5 20.3044 20.5 19.6066 20.3278 19.0388C19.94 17.7604 18.9395 16.76 17.6611 16.3722C17.0933 16.1999 16.3956 16.1999 15 16.1999H10C8.60444 16.1999 7.90665 16.1999 7.33886 16.3722C6.06045 16.76 5.06004 17.7604 4.67224 19.0388C4.5 19.6066 4.5 20.3044 4.5 21.7M17 8.19995C17 10.6852 14.9853 12.7 12.5 12.7C10.0147 12.7 8 10.6852 8 8.19995C8 5.71467 10.0147 3.69995 12.5 3.69995C14.9853 3.69995 17 5.71467 17 8.19995Z"
                      stroke="#0F2415"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-wastex-text font-inter text-base leading-relaxed tracking-wide">
                  Select the type of user you are
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-3">
                <div className="flex w-8 h-8 items-center justify-center rounded-full bg-wastex-icon-bg">
                  <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none">
                    <path
                      d="M20.5 6.69995L9.5 17.7L4.5 12.7"
                      stroke="#0F2415"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-wastex-text font-inter text-base leading-relaxed tracking-wide">
                  Post or accept jobs
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-3">
                <div className="flex w-8 h-8 items-center justify-center rounded-full bg-wastex-icon-bg">
                  <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none">
                    <path
                      d="M12.5 13.7C14.1569 13.7 15.5 12.3568 15.5 10.7C15.5 9.0431 14.1569 7.69995 12.5 7.69995C10.8431 7.69995 9.5 9.0431 9.5 10.7C9.5 12.3568 10.8431 13.7 12.5 13.7Z"
                      stroke="#0F2415"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 22.7C16.5 18.7 20.5 15.1182 20.5 10.7C20.5 6.28167 16.9183 2.69995 12.5 2.69995C8.08172 2.69995 4.5 6.28167 4.5 10.7C4.5 15.1182 8.5 18.7 12.5 22.7Z"
                      stroke="#0F2415"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-wastex-text font-inter text-base leading-relaxed tracking-wide">
                  Track it all in real-time
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-3">
                <div className="flex w-8 h-8 items-center justify-center rounded-full bg-wastex-icon-bg">
                  <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none">
                    <path
                      d="M16.5 8.6999V5.20056C16.5 4.36882 16.5 3.95295 16.3248 3.69737C16.1717 3.47408 15.9346 3.3224 15.6678 3.27698C15.3623 3.225 14.9847 3.39927 14.2295 3.74782L5.35901 7.84189C4.68551 8.15274 4.34875 8.30817 4.10211 8.54922C3.88406 8.76232 3.71762 9.02245 3.6155 9.30973C3.5 9.63469 3.5 10.0056 3.5 10.7474V15.6999M17 15.1999H17.01M3.5 11.8999L3.5 18.4999C3.5 19.62 3.5 20.1801 3.71799 20.6079C3.90973 20.9842 4.21569 21.2902 4.59202 21.4819C5.01984 21.6999 5.57989 21.6999 6.7 21.6999H18.3C19.4201 21.6999 19.9802 21.6999 20.408 21.4819C20.7843 21.2902 21.0903 20.9842 21.282 20.6079C21.5 20.1801 21.5 19.62 21.5 18.4999V11.8999C21.5 10.7798 21.5 10.2197 21.282 9.79192C21.0903 9.4156 20.7843 9.10964 20.408 8.91789C19.9802 8.6999 19.4201 8.6999 18.3 8.6999L6.7 8.6999C5.5799 8.6999 5.01984 8.6999 4.59202 8.91789C4.2157 9.10963 3.90973 9.4156 3.71799 9.79192C3.5 10.2197 3.5 10.7798 3.5 11.8999ZM17.5 15.1999C17.5 15.476 17.2761 15.6999 17 15.6999C16.7239 15.6999 16.5 15.476 16.5 15.1999C16.5 14.9238 16.7239 14.6999 17 14.6999C17.2761 14.6999 17.5 14.9238 17.5 15.1999Z"
                      stroke="#0F2415"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-wastex-text font-inter text-base leading-relaxed tracking-wide">
                  Make and receive secure payment online
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-wastex-text font-inter text-lg italic font-light leading-relaxed tracking-wide">
              Whether you produce or collect waste there is a place here at
              WasteX for you.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center min-[1200px]:justify-start gap-4 w-full">
              <Link to="/producer" className="bg-wastex-primary text-wastex-text px-8 py-3 rounded-full text-lg font-automate font-normal w-full sm:w-auto hover:bg-wastex-primary/90 transition-colors">
                See producer
              </Link>
              <Link
                to="/buyer"
                className="px-6 py-3 bg-wastex-secondary text-white font-automate font-normal text-lg rounded-full hover:bg-wastex-secondary/90 transition-colors tracking-wider w-full sm:w-auto text-center"
              >
                See buyer
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0">
            <div className="relative w-full lg:w-auto">
              <img
                src="/images/image-8.png"
                alt="WasteX dashboard on a map"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Popular waste items Section */}
        <WasteItemsCarousel />

        {/* Dashboard Section */}
        <section className="relative py-20 lg:py-32 bg-white">
          <img
            src="/images/image-34.png"
            alt="Decorative element"
            className="absolute top-60 right-0 h-40 w-auto hidden min-[1101px]:block"
          />
          <div className="container mx-auto px-4 md:px-16 lg:px-20">
            {/* Top - Image and Text */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-12 mb-12">
              {/* Right - Text Content */}
              <div className="flex flex-col items-start gap-6 max-w-xl lg:order-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-automate font-bold text-wastex-text leading-tight tracking-wider">
                  Your dashboard:
                  <br />
                  Stay organized, anytime, anywhere
                </h2>
                <p className="text-wastex-text text-base leading-relaxed tracking-wide">
                  With WasteX, managing your waste jobs is effortless. Our
                  intuitive Dashboard gives you complete visibility and control
                  over your completed jobs, all from the convenience of your
                  mobile or web device.
                </p>
              </div>
              {/* Left - Image with decorative elements */}
              <div className="relative flex-shrink-0 lg:order-1">
                {/* Main dashboard image */}
                <div className="relative">
                  <img
                    src="/images/image-7.png"
                    alt="WasteX Dashboard Interface"
                    className="w-full max-w-2xl h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Bottom - Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Card 1 */}
              <div
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}
              >
                <div className="flex w-8 h-8 items-center justify-center rounded-full bg-wastex-icon-bg flex-shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none">
                    <path
                      d="M20 6.69995L9 17.7L4 12.7"
                      stroke="#0F2415"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-wastex-text text-base font-bold leading-relaxed tracking-wider">
                    Job history at a glance
                  </h3>
                  <p className="text-wastex-text text-sm leading-relaxed tracking-wide">
                    Easily view and manage all your completed jobs.
                  </p>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}
              >
                <div className="flex w-8 h-8 items-center justify-center rounded-full bg-wastex-icon-bg flex-shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none">
                    <path
                      d="M20 6.69995L9 17.7L4 12.7"
                      stroke="#0F2415"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-wastex-text text-base font-bold leading-relaxed tracking-wider">
                    Job history at a glance
                  </h3>
                  <p className="text-wastex-text text-sm leading-relaxed tracking-wide">
                    Easily view and manage all your completed jobs.
                  </p>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}
              >
                <div className="flex w-8 h-8 items-center justify-center rounded-full bg-wastex-icon-bg flex-shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none">
                    <path
                      d="M20 6.69995L9 17.7L4 12.7"
                      stroke="#0F2415"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-wastex-text text-base font-bold leading-relaxed tracking-wider">
                    Job history at a glance
                  </h3>
                  <p className="text-wastex-text text-sm leading-relaxed tracking-wide">
                    Easily view and manage all your completed jobs.
                  </p>
                </div>
              </div>

              {/* Feature Card 4 */}
              <div
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}
              >
                <div className="flex w-8 h-8 items-center justify-center rounded-full bg-wastex-icon-bg flex-shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 25" fill="none">
                    <path
                      d="M20 6.69995L9 17.7L4 12.7"
                      stroke="#0F2415"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-wastex-text text-base font-bold leading-relaxed tracking-wider">
                    Job history at a glance
                  </h3>
                  <p className="text-wastex-text text-sm leading-relaxed tracking-wide">
                    Easily view and manage all your completed jobs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <FaqAccordion />
    </div>
  );
}
