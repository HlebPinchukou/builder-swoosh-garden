const TermsOfServiceAccordion = () => {
  return (
    <section className="bg-white py-10">
      <div
        className="container mx-auto max-w-4xl p-10 rounded-lg text-wastex-text"
        style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}
      >
        <h2 className="text-4xl font-automate font-bold text-center text-gray-800 mb-10">
          Terms of service
        </h2>
        <div className="space-y-6 text-lg text-left">
            <p>
                By using WasteX, you agree to our Terms of Service. A detailed version is coming soon.......
            </p>
            <p>
                For questions, contact us at support@wastex.com.
            </p>
            <p>
                Thank you for choosing WasteX!
            </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServiceAccordion;
