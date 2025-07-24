import Navigation from "@/components/Navigation";

export default function Producer() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-wastex-surface">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-wastex-text mb-4">
              Producer Portal
            </h1>
            <p className="text-lg text-wastex-text/80 mb-8">
              This page is coming soon. Continue prompting to fill in the content!
            </p>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-wastex-border max-w-md mx-auto">
              <div className="w-16 h-16 bg-wastex-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-wastex-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-wastex-text mb-2">Waste Management</h3>
              <p className="text-wastex-text/70">
                Tools and resources for waste producers to manage their operations sustainably.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
