import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-wastex-surface">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-wastex-text mb-6 tracking-tight">
              Sustainable Waste
              <br />
              <span className="text-wastex-secondary">Management</span>
            </h1>
            <p className="text-xl lg:text-2xl text-wastex-text/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect waste producers with buyers in a revolutionary marketplace that transforms waste into valuable resources for a circular economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/producer"
                className="px-8 py-4 bg-wastex-primary text-wastex-text font-bold text-lg rounded-full hover:bg-wastex-primary/90 transition-colors tracking-wide"
              >
                I'm a Producer
              </Link>
              <Link
                to="/buyer"
                className="px-8 py-4 border-2 border-wastex-secondary text-wastex-secondary font-bold text-lg rounded-full hover:bg-wastex-secondary hover:text-white transition-colors tracking-wide"
              >
                I'm a Buyer
              </Link>
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
