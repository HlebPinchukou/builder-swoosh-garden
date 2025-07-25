import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

export default function Index() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full">
          {/* Background Image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ad5ee4a48e9eab4b4a064640b9ac6fa99f8160f7?width=2880"
            alt="WasteX team member in uniform"
            className="w-full h-auto rounded-b-3xl"
          />

          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-start gap-8 sm:gap-12 px-4 sm:px-8 md:px-16 lg:px-20 pt-16 sm:pt-20 max-w-5xl">
            {/* Location Section */}
            <div className="flex items-start gap-2 sm:gap-3">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 mt-1 flex-shrink-0" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C12.13 2 9 5.13 9 9c0 5.25 7 19 7 19s7-13.75 7-19c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#F5F5F5"/>
              </svg>
              <p className="text-wastex-hero-text text-sm sm:text-lg md:text-xl lg:text-2xl font-medium uppercase tracking-wider leading-6 sm:leading-8">
                Trinidad & Tobago waste Removal and Disposal
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-wastex-hero-text text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight sm:leading-[60px] md:leading-[80px] tracking-wider max-w-[844px]">
              Connecting waste producers and buyers.
            </h1>

            {/* Subtext */}
            <p className="text-wastex-hero-text text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-wider leading-relaxed">
              Join WasteX for FREE—your first job is on us!
            </p>

            {/* CTA Button */}
            <button className="bg-wastex-primary text-wastex-text px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl md:text-2xl font-bold tracking-wider hover:bg-wastex-primary/90 transition-colors shadow-lg">
              Get started
            </button>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="relative">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-center gap-6 max-w-4xl text-center py-16 lg:py-24 px-4 md:px-16 lg:px-20 mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wastex-text leading-tight tracking-wider">
              Welcome to WasteX
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-wastex-text leading-relaxed">
              WasteX helps businesses connect for responsible waste disposal and recycling. Whether you're a company looking to dispose of waste or one looking to collect and repurpose it, we make the process seamless and efficient.
            </p>
          </div>

          {/* Full-width Background Image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ed360c2001bd10617c4ce9d7a181863284241844?width=2880"
            alt="WasteX application interface demonstration"
            className="w-full h-auto"
          />
        </section>

        {/* How it works Section */}
        <section className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-8 py-20 lg:py-32 px-4 md:px-16 lg:px-20">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6 max-w-lg lg:max-w-xl">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-wastex-text leading-tight tracking-wider">
              How it works?
            </h2>

            {/* Steps */}
            <div className="flex flex-col gap-6">
              {/* Step 1 */}
              <div className="flex items-center gap-3">
                <div className="flex w-8 h-8 items-center justify-center rounded-full bg-wastex-icon-bg">
                  <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none">
                    <path d="M20.5 21.7C20.5 20.3044 20.5 19.6066 20.3278 19.0388C19.94 17.7604 18.9395 16.76 17.6611 16.3722C17.0933 16.1999 16.3956 16.1999 15 16.1999H10C8.60444 16.1999 7.90665 16.1999 7.33886 16.3722C6.06045 16.76 5.06004 17.7604 4.67224 19.0388C4.5 19.6066 4.5 20.3044 4.5 21.7M17 8.19995C17 10.6852 14.9853 12.7 12.5 12.7C10.0147 12.7 8 10.6852 8 8.19995C8 5.71467 10.0147 3.69995 12.5 3.69995C14.9853 3.69995 17 5.71467 17 8.19995Z" stroke="#0F2415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                    <path d="M20.5 6.69995L9.5 17.7L4.5 12.7" stroke="#0F2415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                    <path d="M12.5 13.7C14.1569 13.7 15.5 12.3568 15.5 10.7C15.5 9.0431 14.1569 7.69995 12.5 7.69995C10.8431 7.69995 9.5 9.0431 9.5 10.7C9.5 12.3568 10.8431 13.7 12.5 13.7Z" stroke="#0F2415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5 22.7C16.5 18.7 20.5 15.1182 20.5 10.7C20.5 6.28167 16.9183 2.69995 12.5 2.69995C8.08172 2.69995 4.5 6.28167 4.5 10.7C4.5 15.1182 8.5 18.7 12.5 22.7Z" stroke="#0F2415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                    <path d="M16.5 8.6999V5.20056C16.5 4.36882 16.5 3.95295 16.3248 3.69737C16.1717 3.47408 15.9346 3.3224 15.6678 3.27698C15.3623 3.225 14.9847 3.39927 14.2295 3.74782L5.35901 7.84189C4.68551 8.15274 4.34875 8.30817 4.10211 8.54922C3.88406 8.76232 3.71762 9.02245 3.6155 9.30973C3.5 9.63469 3.5 10.0056 3.5 10.7474V15.6999M17 15.1999H17.01M3.5 11.8999L3.5 18.4999C3.5 19.62 3.5 20.1801 3.71799 20.6079C3.90973 20.9842 4.21569 21.2902 4.59202 21.4819C5.01984 21.6999 5.57989 21.6999 6.7 21.6999H18.3C19.4201 21.6999 19.9802 21.6999 20.408 21.4819C20.7843 21.2902 21.0903 20.9842 21.282 20.6079C21.5 20.1801 21.5 19.62 21.5 18.4999V11.8999C21.5 10.7798 21.5 10.2197 21.282 9.79192C21.0903 9.4156 20.7843 9.10964 20.408 8.91789C19.9802 8.6999 19.4201 8.6999 18.3 8.6999L6.7 8.6999C5.5799 8.6999 5.01984 8.6999 4.59202 8.91789C4.2157 9.10963 3.90973 9.4156 3.71799 9.79192C3.5 10.2197 3.5 10.7798 3.5 11.8999ZM17.5 15.1999C17.5 15.476 17.2761 15.6999 17 15.6999C16.7239 15.6999 16.5 15.476 16.5 15.1999C16.5 14.9238 16.7239 14.6999 17 14.6999C17.2761 14.6999 17.5 14.9238 17.5 15.1999Z" stroke="#0F2415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-wastex-text font-inter text-base leading-relaxed tracking-wide">
                  Make and receive secure payment online
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-wastex-text font-inter text-lg italic font-light leading-relaxed tracking-wide">
              Whether you produce or collect waste there is a place here at WasteX for you.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-6">
              <Link
                to="/producer"
                className="px-6 py-3 bg-wastex-primary text-wastex-text font-bold text-lg rounded-full hover:bg-wastex-primary/90 transition-colors tracking-wider"
              >
                See producer
              </Link>
              <Link
                to="/buyer"
                className="px-6 py-3 bg-wastex-secondary text-white font-bold text-lg rounded-full hover:bg-wastex-secondary/90 transition-colors tracking-wider"
              >
                See buyer
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/91d1e51f6a42b1e128b1b093162d9da9f53b8667?width=1446"
              alt="WasteX map interface showing job tracking"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Popular waste items Section */}
        <section className="relative bg-wastex-dark-bg py-14">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-60">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d3eb29f554cb4a27046fe90a15dc3ffc674c155f?width=3001"
              alt="Background pattern"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-8">
            {/* Title */}
            <h2 className="text-wastex-hero-text text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 leading-tight tracking-wider">
              Popular waste items
            </h2>

            {/* Waste Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-4">
              {/* PLASTICS Card */}
              <div className="bg-wastex-card-bg rounded-lg p-4 flex flex-col gap-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a1e52734bb1b3fa8e36ad173efea3a4962188caa?width=150"
                  alt="Plastics icon"
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-wastex-hero-text text-xl font-bold tracking-wider">PLASTICS</h3>
                  <p className="text-wastex-hero-text text-base leading-relaxed tracking-wide">
                    Includes bottles, wrapping, and other plastic materials.
                  </p>
                </div>
              </div>

              {/* METALS Card */}
              <div className="bg-wastex-card-bg rounded-lg p-4 flex flex-col gap-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ddcb5985d858108cb3d85706414f556eee83cc56?width=150"
                  alt="Metals icon"
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-wastex-hero-text text-xl font-bold tracking-wider">METALS</h3>
                  <p className="text-wastex-hero-text text-base leading-relaxed tracking-wide">
                    Covers steel, copper, aluminum, and other metals.
                  </p>
                </div>
              </div>

              {/* OILS Card */}
              <div className="bg-wastex-card-bg rounded-lg p-4 flex flex-col gap-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0cafb91f8185b96c5f6e53609cbebb36f5ab9829?width=150"
                  alt="Oils icon"
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-wastex-hero-text text-xl font-bold tracking-wider">OILS</h3>
                  <p className="text-wastex-hero-text text-base leading-relaxed tracking-wide">
                    Includes lubricant, crude, vegetable, and hydraulic oils.
                  </p>
                </div>
              </div>

              {/* E-WASTE Card */}
              <div className="bg-wastex-card-bg rounded-lg p-4 flex flex-col gap-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d8fa64ec8d0e858b0bb86710ce035392f825e722?width=150"
                  alt="E-waste icon"
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-wastex-hero-text text-xl font-bold tracking-wider">E-WASTE</h3>
                  <p className="text-wastex-hero-text text-base leading-relaxed tracking-wide">
                    Consists of batteries, computers, phones and other electronic waste.
                  </p>
                </div>
              </div>

              {/* APPLIANCES Card */}
              <div className="bg-wastex-card-bg rounded-lg p-4 flex flex-col gap-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=150"
                  alt="Appliances icon"
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-wastex-hero-text text-xl font-bold tracking-wider">APPLIANCES</h3>
                  <p className="text-wastex-hero-text text-base leading-relaxed tracking-wide">
                    Covers large items such as stoves, AC units, refrigerators, freezers, TVs, beds, mattresses, sofas, and tables.
                  </p>
                </div>
              </div>

              {/* BIOWASTE Card */}
              <div className="bg-wastex-card-bg rounded-lg p-4 flex flex-col gap-4">
                <div className="w-19 h-19 bg-wastex-primary rounded-full flex items-center justify-center">
                  {/* Biowaste icon placeholder - will be styled properly */}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-wastex-hero-text text-xl font-bold tracking-wider">BIOWASTE</h3>
                  <p className="text-wastex-hero-text text-base leading-relaxed tracking-wide">
                    Includes organic waste such as food scraps, garden waste, and biodegradable materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mb-8">
              {/* Left Arrow - Disabled */}
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-20">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="#0F2415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-wastex-primary rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 bg-opacity-80 rounded-full"></div>
              </div>

              {/* Right Arrow - Active */}
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#0F2415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Get Started Button */}
            <div className="flex justify-center">
              <button className="bg-wastex-primary text-wastex-text px-8 py-4 rounded-full text-xl md:text-2xl font-bold tracking-wider hover:bg-wastex-primary/90 transition-colors">
                Get started
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-wastex-text text-center mb-16">
              Why Choose WasteX?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-wastex-surface border border-wastex-border">
                <div className="w-16 h-16 bg-wastex-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-wastex-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-wastex-text mb-4">Efficient Matching</h3>
                <p className="text-wastex-text/80 leading-relaxed">
                  Our AI-powered platform connects waste producers with the right buyers instantly, reducing waste and maximizing value.
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-wastex-surface border border-wastex-border">
                <div className="w-16 h-16 bg-wastex-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-wastex-text mb-4">Verified Quality</h3>
                <p className="text-wastex-text/80 leading-relaxed">
                  All materials are quality-checked and certified, ensuring buyers receive exactly what they expect every time.
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-wastex-surface border border-wastex-border">
                <div className="w-16 h-16 bg-wastex-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-wastex-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-wastex-text mb-4">Global Impact</h3>
                <p className="text-wastex-text/80 leading-relaxed">
                  Join a worldwide movement towards sustainability and help create a circular economy that benefits everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <FaqAccordion />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
