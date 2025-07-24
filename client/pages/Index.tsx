import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[612px] w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ad5ee4a48e9eab4b4a064640b9ac6fa99f8160f7?width=2880"
              alt="WasteX team member in uniform"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start gap-8 sm:gap-12 px-4 sm:px-8 md:px-16 lg:px-20 pt-16 sm:pt-20 max-w-5xl h-full">
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
        <section className="flex flex-col justify-center items-center gap-12 lg:gap-20 py-16 lg:py-25 px-4 md:px-16 lg:px-20">
          <div className="flex flex-col justify-center items-center gap-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wastex-text leading-tight tracking-wider">
              Welcome to WasteX
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-wastex-text leading-relaxed">
              WasteX helps businesses connect for responsible waste disposal and recycling. Whether you're a company looking to dispose of waste or one looking to collect and repurpose it, we make the process seamless and efficient.
            </p>
          </div>
          <div className="w-full max-w-7xl">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ed360c2001bd10617c4ce9d7a181863284241844?width=2880"
              alt="WasteX application interface demonstration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
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
        <section className="py-20 bg-wastex-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Waste?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using WasteX to turn their waste streams into revenue streams.
            </p>
            <button className="px-8 py-4 bg-wastex-primary text-wastex-text font-bold text-lg rounded-full hover:bg-wastex-primary/90 transition-colors tracking-wide">
              Get Started Today
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-wastex-text">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/fca5f3e157cf214b51b8bcc837d1189326250c90?width=306"
                alt="WasteX Logo"
                className="h-10 mx-auto filter brightness-0 invert"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <Link to="/producer" className="text-white/80 hover:text-white transition-colors">
                Producer Portal
              </Link>
              <Link to="/buyer" className="text-white/80 hover:text-white transition-colors">
                Buyer Portal
              </Link>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                About Us
              </Link>
            </div>
            <p className="text-white/60">
              © 2024 WasteX. All rights reserved. Building a sustainable future together.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
