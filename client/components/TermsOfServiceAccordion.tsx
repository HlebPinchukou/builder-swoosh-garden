import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

        {/* Keep existing short intro the user wrote */}
        <div className="space-y-6 text-lg text-left mb-10">
          <p>
            By using WasteX, you agree to our Terms of Service. A detailed version is coming soon.
          </p>
          <p>For questions, contact us at support@wastex.com.</p>
          <p>Thank you for choosing WasteX!</p>
        </div>

        {/* Remaining About content, split into accordion sections */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="numbers">
            <AccordionTrigger className="text-left font-semibold">WasteXchange by the Numbers (Aspirations)</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-2">
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  % Landfilled: from >90% of industrial byproducts to 50% within 3 years.
                </li>
                <li>Active stakeholders: grow to 200+ in year 1.</li>
                <li>Waste lubricating oil: >80% recycled to base oil.</li>
                <li>Market value: unlock US$10M+ annual secondary trade.</li>
                <li>GHG: quantified, verifiable emission savings.</li>
                <li>Circular jobs: dozens in year 1; hundreds by 2027.</li>
              </ul>
              <p className="text-sm text-gray-500">Illustrative targets; expand as new streams are integrated.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="caribbean">
            <AccordionTrigger className="text-left font-semibold">Leading the Caribbean’s Circular Economy</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-3">
              <p>
                WasteXchange is Trinidad & Tobago’s practical, private‑sector‑powered answer to regional calls for integration and digital transformation in circular economy practice.
              </p>
              <p>
                Our playbook scales across LATAM: local tech, strong policy alignment, and public–private innovation to overcome fragmented systems and import dependency.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="beyond-tech">
            <AccordionTrigger className="text-left font-semibold">Beyond Technology: Community and Trust</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-2">
              <ul className="list-disc pl-6 space-y-1">
                <li>Inspiring a new mindset: success stories and positive impact.</li>
                <li>Empowering SMEs with data, market access, and insights.</li>
                <li>Education and outreach with schools and communities.</li>
                <li>Policy alignment with government and regional agencies.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="voice">
            <AccordionTrigger className="text-left font-semibold">How We Communicate</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-2">
              <ul className="list-disc pl-6 space-y-1">
                <li>Punchy: “Don’t landfill it. List it, trade it, and profit from it!”</li>
                <li>Optimistic: “Where waste becomes new wealth.”</li>
                <li>Pragmatic: real businesses, real impact, clear guidance.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="best-practices">
            <AccordionTrigger className="text-left font-semibold">Inspiration from Global Best Practices</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-2">
              <ul className="list-disc pl-6 space-y-1">
                <li>Digital marketplaces connect supply to demand efficiently.</li>
                <li>Quality, traceability, and compliance powered by data.</li>
                <li>Community engagement builds resilient ecosystems.</li>
                <li>Continuous innovation: new streams, matching, logistics.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cta">
            <AccordionTrigger className="text-left font-semibold">Join the Circular Movement</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-3">
              <p>
                Don’t pay to dump. List, connect, and create value with WasteXchange.
              </p>
              <p>
                Partners, policymakers, and investors: collaborate to scale standards, incentives, and high‑impact solutions for a climate‑smart Caribbean.
              </p>
              <p>
                Website: wastexchange.tt (placeholder) · Social: LinkedIn | Facebook | X | Instagram
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="metrics">
            <AccordionTrigger className="text-left font-semibold">Circular Impact Metrics We Track</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-2">
              <ul className="list-disc pl-6 space-y-1">
                <li>Tons of waste diverted</li>
                <li>Value of secondary materials traded</li>
                <li>Number of successful exchanges</li>
                <li>CO₂ and pollutant emissions avoided</li>
                <li>Local jobs and SMEs supported</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="closing">
            <AccordionTrigger className="text-left font-semibold">Closing Note</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-3">
              <p>
                The future isn’t linear—it’s circular, brilliant, and bold. With vision, technology, and hands‑on action, T&T can lead the region in closing the loop.
              </p>
              <p>
                WasteXchange: Where Waste Works Wonders.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default TermsOfServiceAccordion;
