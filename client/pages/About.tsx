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
      {/* WasteXchange Extended About Sections (inserted before existing ABOUT US hero) */}
      {/* Vision Section */}
      <section className="bg-white py-16 px-4 md:px-16 lg:px-20">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Our Vision</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-automate font-bold text-black leading-tight">Fueling a Waste-Free, Circular region</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At WasteXchange (WasteX), we believe in a world where “waste” is simply a resource waiting for a new life. Our mission: to transform how Trinidad & Tobago (and the entire Latam region) thinks about waste—spotlighting it not as a problem, but as an opportunity for innovation, climate action, and shared prosperity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We’re driving industrial transformation by connecting waste generators with innovators who can turn yesterday’s leftovers into tomorrow’s raw materials, growing the region’s circular economy one collaboration at a time.
          </p>
        </div>
      </section>

      {/* What is WasteXchange */}
      <section className="py-16 px-4 md:px-16 lg:px-20" style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">What Is WasteXchange?</h3>
            <h2 className="text-3xl md:text-4xl font-automate font-bold text-black leading-tight">Rethinking Waste, Unlocking Value</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              WasteXchange is Trinidad & Tobago’s first digital waste exchange platform—engineered to connect businesses, manufacturers, recyclers, and entrepreneurs in a dynamic marketplace for secondary materials.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Powered by cutting-edge technology and hands-on partnerships with local and regional industry leaders, our platform enables organizations to trade, repurpose, and monetize surplus materials that would otherwise end up as environmental liabilities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              In simple terms, WasteX bridges those who have unwanted byproducts with those who can use them, creating a win-win for businesses and for the planet—turning “trash” into treasure, reducing landfill dependency, cutting costs, and spurring the emergence of green industries.
            </p>
          </div>
          <div className="relative flex-shrink-0">
            <img src="/images/image-26.png" alt="Waste exchange platform" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="bg-white py-16 px-4 md:px-16 lg:px-20">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Why We Exist</h3>
          <h2 className="text-3xl md:text-4xl font-automate font-bold text-black leading-tight">Our Purpose and Ambition</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our region faces mounting waste management hurdles—from rising landfill volumes and pollution concerns, to fragmented recycling ecosystems and the heavy toll of linear, “take-make-throw” economic models. Trinidad & Tobago alone generates millions of liters of waste oils and thousands of tonnes of industrial, commercial, and municipal byproducts annually; far too much of this ends up in dumps, waterways, or is simply underutilized as a resource.
          </p>
          <div className="space-y-2 text-lg text-gray-700 leading-relaxed">
            <p className="font-semibold">The WasteXchange vision is bold and straightforward:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To ignite a circular revolution in Trinidad & Tobago and the Caribbean.</li>
              <li>To prove—right here, right now—that every “waste” can spark opportunity, profit, and environmental renewal.</li>
              <li>To unite businesses, recyclers, innovators, and communities on a single digital platform that transforms waste management from a challenge into a catalyst for growth.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* IDB Backing */}
      <section className="py-16 px-4 md:px-16 lg:px-20" style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Backed by the Inter-American Development Bank</h3>
            <h2 className="text-3xl md:text-4xl font-automate font-bold text-black leading-tight">Proudly Supported by IADB (TT-G1008)</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              WasteXchange is proudly supported under project #TT-G1008, an ambitious initiative funded as part of a larger IDB/GEF grant to ignite the circular economy in Trinidad & Tobago.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As part of the Recycling of Waste Lubricating Oils project, the platform demonstrates—at scale—the economic, social, and environmental viability of circular solutions in small island developing states.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-black">The IADB’s support brings:</h4>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Global expertise in circular business models and digital transformation.</li>
              <li>Connections to regional initiatives in circular economy policy, innovation ecosystems, and sustainable development.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TOSL Engineering Partnership */}
      <section className="bg-white py-16 px-4 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex-shrink-0 order-2 lg:order-1">
            <img src="/images/image-27.png" alt="Industrial partnership" className="w-full h-auto rounded-2xl" />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Trailblazing with TOSL Engineering</h3>
            <h2 className="text-3xl md:text-4xl font-automate font-bold text-black leading-tight">Local Muscle, Global Mindset</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              WasteXchange is not just a digital idea; it’s a hands-on partnership that harnesses the technical prowess of Trinidad & Tobago’s industrial sector. Our flagship collaboration with TOSL Engineering brings over four decades of engineering excellence, operational scale, and industry trust to the project.
            </p>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-black">What TOSL brings:</h4>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-1">
                <li>Innovation in Waste Recycling: piloting T&T’s first advanced recycling facility for waste lubricating oils, converting them back into base oils.</li>
                <li>Digital-Physical Connectivity: integrating operations with a live digital marketplace, with analytics, quality checks, and traceability.</li>
                <li>End-to-End Service: from sampling to logistics, storage, and processing—an operational backbone for circular innovation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 md:px-16 lg:px-20" style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">How WasteXchange Works</h3>
            <h2 className="text-3xl md:text-4xl font-automate font-bold text-black leading-tight">The Marketplace in Motion</h2>
          </div>
          <div className="space-y-3">
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Digital Listings: list byproducts with type, quantity, location, and desired outcomes.</li>
              <li>Smart Matching: advanced filters help find precise resources for production or R&amp;D.</li>
              <li>Quality Assurance: stringent digital and physical checks to lower transaction risk.</li>
              <li>Logistics Coordination: seamless scheduling among producers, recyclers, and logistics partners.</li>
              <li>Transaction Transparency: confirmations, feedback, and traceable records for compliance.</li>
              <li>Circular Impact Measurement: dashboards track diversion, emissions, savings, and value.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-white py-16 px-4 md:px-16 lg:px-20">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Our Impact</h3>
          <h2 className="text-3xl md:text-4xl font-automate font-bold text-black leading-tight">Why Waste Exchange Matters</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Landfill Reduction: minimize dependency, cut pollution, extend disposal site lifespan.</li>
            <li>Resource Efficiency: less virgin extraction, lower imports, reduced national footprint.</li>
            <li>Green Industry Growth: new value chains, startups, manufacturers, and jobs.</li>
            <li>Economic Savings &amp; Opportunity: lower disposal costs; affordable, quality resources.</li>
            <li>Climate Action: lower GHG emissions, cleaner waterways, progress toward SDGs.</li>
          </ul>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-16 px-4 md:px-16 lg:px-20" style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}>
        <div className="max-w-6xl mx-auto text-left space-y-6">
          <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">WasteXchange by the Numbers (Sample)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-700">
            <div className="space-y-2">
              <p><span className="font-semibold">% of material landfilled:</span> &gt;90% (traditional) → &lt;50% targeted within 3 years (WasteX).</p>
              <p><span className="font-semibold">Active stakeholders:</span> &lt;50 → 200+ projected in year 1.</p>
              <p><span className="font-semibold">Waste lubricating oil fate:</span> Mostly incinerated/landfilled → &gt;80% recycled to base oil.</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-semibold">Market value unlocked:</span> &lt;US$1M/year → US$10M+ annual secondary trade.</p>
              <p><span className="font-semibold">GHG emissions from disposal:</span> High, unmeasured → Quantified, verifiable savings.</p>
              <p><span className="font-semibold">Circular jobs created:</span> Minimal → Dozens in year 1; hundreds by 2027.</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">These are illustrative—our ambition is to grow each metric exponentially as more organizations join and new waste streams are integrated.</p>
        </div>
      </section>

      {/* Regional Leadership */}
      <section className="bg-white py-16 px-4 md:px-16 lg:px-20">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Leading the Caribbean</h3>
          <h2 className="text-3xl md:text-4xl font-automate font-bold text-black leading-tight">Circular Economy Revolution</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Trinidad & Tobago is stepping up as a regional pioneer for zero-waste strategies. WasteXchange is Trinidad & Tobago’s practical, private‑sector‑powered answer to the call for Caribbean integration, innovation, and digital transformation in circular economy practice.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our platform isn’t just a solution for one nation. It is a playbook for the entire Latam region.
          </p>
        </div>
      </section>

      {/* Beyond Technology */}
      <section className="py-16 px-4 md:px-16 lg:px-20" style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Beyond Technology</h3>
            <h2 className="text-3xl md:text-4xl font-automate font-bold text-black leading-tight">Community, Collaboration, and Trust</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Inspiring a new mindset with success stories and positive impact.</li>
              <li>Empowering SMEs and entrepreneurs with data and market access.</li>
              <li>Education and outreach with schools, universities, and communities.</li>
              <li>Policy alignment with governments and regional agencies.</li>
            </ul>
          </div>
          <div className="relative flex-shrink-0">
            <img src="/images/image-33.png" alt="Community and collaboration" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Voice */}
      <section className="bg-white py-16 px-4 md:px-16 lg:px-20">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">How We Communicate</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li><span className="font-semibold">Punchy:</span> “Don’t landfill it. List it, trade it, and profit from it!”</li>
            <li><span className="font-semibold">Optimistic:</span> “Trinidad &amp; Tobago: Where waste becomes new wealth.”</li>
            <li><span className="font-semibold">Pragmatic:</span> Real businesses, evidence, impact metrics, and friendly how‑to guidance.</li>
          </ul>
        </div>
      </section>

      {/* Global Best Practices */}
      <section className="py-16 px-4 md:px-16 lg:px-20" style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}>
        <div className="max-w-6xl mx-auto text-left space-y-6">
          <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Inspiration from Circular Startups</h3>
          <h2 className="text-3xl md:text-4xl font-automate font-bold text-black leading-tight">Global Best Practices</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Digital Marketplaces: connect supply directly with demand to unlock value.</li>
            <li>Quality &amp; Traceability: leverage data and emerging tech to ensure compliance and trust.</li>
            <li>Community Engagement: build networks of innovation and knowledge-sharing.</li>
            <li>Continuous Innovation: integrate new waste streams, matching, and logistics solutions.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 px-4 md:px-16 lg:px-20">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Our Call to Action</h3>
          <h2 className="text-3xl md:text-4xl font-automate font-bold text-black leading-tight">Join the Circular Movement</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Are you a business leader, recycler, manufacturer, or innovator in Trinidad &amp; Tobago or the Caribbean?</p>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Don’t let your byproducts go to waste or pay to dump them. List, connect, and create value with WasteXchange.</li>
            <li>If you’re building the next circular startup, use WasteX as your launchpad for sourcing sustainable materials.</li>
            <li>Policymakers and development partners: let’s co-create policy, standards, and incentives.</li>
            <li>Investors and supporters: back high-impact, scalable, practical solutions for a climate-smart Caribbean.</li>
          </ul>
        </div>
      </section>

      {/* Evolving About + Mission */}
      <section className="py-16 px-4 md:px-16 lg:px-20" style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Our Evolving “About Us”</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              WasteXchange is the Caribbean and Latin America’s home for circular opportunity. Our story is one of bold ideas, pragmatic partnerships, and measurable impact. From the digital cloud to the factory floor, our platform proves that waste is not an inevitable burden, but a springboard to an ingenious, resource-efficient, and profitable future.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At WasteX, we don’t just talk about the future. We’re building it, exchange by exchange.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-black">Sample Punchy Mission Statement</h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              Turning Trinidad &amp; Tobago’s waste into the Caribbean’s biggest climate and business opportunity—one exchange at a time. WasteXchange: where leftovers are lifted, byproducts become breakthroughs, and every transaction is a win for people, planet, and prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* Connect & Partners */}
      <section className="bg-white py-16 px-4 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Find Us / Connect</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Become a WasteXchange pioneer—sign up to list materials, browse resources, or explore partnerships.</li>
              <li>Website: wastexchange.tt (placeholder)</li>
              <li>Social Media: LinkedIn | Facebook | X | Instagram</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Our Partners</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>TOSL Engineering: leading provider of technical-engineering and circular solutions.</li>
              <li>Inter-American Development Bank (IDB) &amp; GEF: innovation, policy, and investment for circular transitions.</li>
              <li>Other 1</li>
              <li>Other 2</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Circular Impact Metrics */}
      <section className="py-16 px-4 md:px-16 lg:px-20" style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}>
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Circular Impact Metrics We Track</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Tons of waste diverted from landfill</li>
            <li>Value of secondary materials traded</li>
            <li>Number of successful exchanges facilitated</li>
            <li>CO₂ and pollutant emissions avoided</li>
            <li>Local jobs and green SMEs supported</li>
          </ul>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-white py-16 px-4 md:px-16 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">Conclusion</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The future isn’t linear—it’s circular, brilliant, and bold. At WasteXchange, we’re proving that with vision, technology, and hands-on action, Trinidad &amp; Tobago can lead the region and inspire the world in closing the waste loop, building jobs, and protecting our shores and cities for generations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">Let’s exchange. Let’s grow. Let’s turn waste into wealth and climate hope together.</p>
          </div>
          <div className="relative flex-shrink-0">
            <img src="/images/image-32.png" alt="Join WasteX" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </section>
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
                  WasteXchange – turning Trinidad & Tobago’s waste into circular opportunity, one exchange at a time.
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
              <button className="mt-8 bg-wastex-secondary text-white px-8 py-4 rounded-full text-xl font-automate font-normal tracking-wider hover:opacity-90 transition-opacity w-full">
                Get started
              </button>
            </div>
          </section>
        </div>
    </div>
  );
}
