import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-wastex-surface">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-wastex-text mb-4">
              About WasteX
            </h1>
            <p className="text-lg text-wastex-text/80 mb-8">
              This page is coming soon. Continue prompting to fill in the content!
            </p>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-wastex-border max-w-md mx-auto">
              <div className="w-16 h-16 bg-wastex-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-wastex-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-wastex-text mb-2">Our Mission</h3>
              <p className="text-wastex-text/70">
                Learn about our commitment to sustainable waste management and circular economy solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
