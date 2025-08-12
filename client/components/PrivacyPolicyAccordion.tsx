import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PrivacyPolicyAccordion = () => {
  return (
    <section className="bg-white py-10">
      <div
        className="container mx-auto max-w-4xl p-10 rounded-lg text-wastex-text"
        style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}
      >
        <h2 className="text-4xl font-automate font-bold text-center text-gray-800 mb-10">
          Privacy policy
        </h2>

        {/* Keep existing short intro the user wrote */}
        <div className="space-y-6 text-lg text-left mb-10">
          <p>
            Your privacy matters to us at WasteX. We are committed to protecting your data and ensuring transparency in how we use it. Our full Privacy Policy is coming soon.
          </p>
          <p>For questions, contact us at support@wastex.com.</p>
          <p>Thank you for trusting WasteX</p>
        </div>

        {/* About content, split into accordion sections */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="vision">
            <AccordionTrigger className="text-left font-semibold">Our Vision: Fueling a Waste‑Free, Circular Region</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-3">
              <p>
                At WasteXchange (WasteX), we believe “waste” is a resource waiting for a new life. Our mission is to transform how Trinidad & Tobago and the wider LATAM region think about waste—turning it into innovation, climate action, and shared prosperity.
              </p>
              <p>
                We connect waste generators with innovators who can turn yesterday’s leftovers into tomorrow’s raw materials—growing the circular economy one collaboration at a time.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="what-is-wx">
            <AccordionTrigger className="text-left font-semibold">What Is WasteXchange?</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-3">
              <p>
                Trinidad & Tobago’s first digital waste exchange platform—connecting businesses, manufacturers, recyclers, and entrepreneurs in a dynamic marketplace for secondary materials.
              </p>
              <p>
                Our platform enables organizations to trade, repurpose, and monetize surplus materials that would otherwise become environmental liabilities.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why-exist">
            <AccordionTrigger className="text-left font-semibold">Why We Exist: Purpose and Ambition</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-3">
              <p>
                The region faces mounting waste challenges—rising landfill volumes, fragmented recycling, and the costs of linear “take‑make‑throw” models.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ignite a circular revolution in Trinidad & Tobago and the Caribbean.</li>
                <li>Prove every “waste” can spark opportunity, profit, and environmental renewal.</li>
                <li>Unite businesses, recyclers, innovators, and communities on one platform.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="idb">
            <AccordionTrigger className="text-left font-semibold">Backed by the Inter‑American Development Bank (IDB)</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-3">
              <p>
                Supported under project TT‑G1008 as part of an IDB/GEF grant to ignite circular economy in Trinidad & Tobago—demonstrating economic, social, and environmental viability at scale.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Global expertise in circular business models and digital transformation.</li>
                <li>Connections to regional initiatives in policy, innovation, and sustainable development.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value=
            "tosl"
          >
            <AccordionTrigger className="text-left font-semibold">Trailblazing with TOSL Engineering</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-3">
              <p>
                A hands‑on partnership bringing four decades of industrial excellence to WasteXchange.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Advanced recycling of waste lubricating oils back to base oils.</li>
                <li>Digital‑physical connectivity with real‑time data, quality checks, and traceability.</li>
                <li>End‑to‑end services from sampling to logistics and processing.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-it-works">
            <AccordionTrigger className="text-left font-semibold">How WasteXchange Works</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-2">
              <ul className="list-disc pl-6 space-y-1">
                <li>Digital Listings with material type, quantity, and location.</li>
                <li>Smart Matching via advanced filters and algorithms.</li>
                <li>Quality Assurance through digital and physical checks.</li>
                <li>Logistics Coordination for streamlined pickups and deliveries.</li>
                <li>Transaction Transparency and traceability for compliance.</li>
                <li>Circular Impact Measurement with real‑time dashboards.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="impact">
            <AccordionTrigger className="text-left font-semibold">Our Impact: Why Waste Exchange Matters</AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 space-y-2">
              <ul className="list-disc pl-6 space-y-1">
                <li>Landfill reduction and pollution prevention.</li>
                <li>Resource efficiency and lower imports/carbon footprint.</li>
                <li>Green industry growth and new local jobs.</li>
                <li>Economic savings for producers and affordable inputs for buyers.</li>
                <li>Climate action with measurable GHG reductions.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default PrivacyPolicyAccordion;
