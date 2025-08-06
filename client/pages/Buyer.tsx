import { Link } from "react-router-dom";

export default function Buyer() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
          className="hero-section py-16 px-4 md:px-16 lg:px-20 bg-gray-100 flex items-start min-[1261px]:items-center justify-start min-[1261px]:justify-center min-h-[539px]"
        >
          <div className="flex flex-col min-[1261px]:flex-row items-start min-[1261px]:items-center gap-12 lg:gap-16 w-full min-[1261px]:max-w-7xl min-[1261px]:mx-auto justify-start">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-8 max-w-2xl text-left w-full">
              <div className="flex flex-col gap-4 w-full text-left">
                <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider text-left !text-left">
                  BUYER
                </h3>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-automate font-bold text-black leading-tight tracking-wider text-left !text-left">
                  Find valuable materials
                </h1>
                <p className="text-xl text-black leading-relaxed tracking-wide text-left !text-left">
                  Buyers turn waste into value by recycling or repurposing materials.
                  WasteX connects them with Producers, and they handle the trucks
                  and drivers for pickup!
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex-shrink-0">
              {/* Purple decorative square */}
              <div className="absolute -left-8 -top-8 w-26 h-26 bg-purple-300 rounded-2xl"></div>
              <img
                src="/images/image-23.png"
                alt="Waste management professionals"
                className="w-full max-w-2xl h-auto rounded-2xl relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Waste into Value Section */}
        <section
          className="relative bg-wastex-dark-bg overflow-hidden py-16 px-4 md:px-16 lg:px-36 min-h-[372px] flex items-start min-[1261px]:items-center"
        >
          {/* Background Image */}
          <img
            src="/images/image-2.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col min-[1261px]:flex-row items-start min-[1261px]:items-center gap-12 w-full min-[1261px]:max-w-7xl min-[1261px]:mx-auto">
            {/* Right Content */}
            <div className="flex flex-col items-start gap-6 max-w-lg text-white text-left lg:order-2">
              <h2 className="text-2xl font-semibold uppercase tracking-wider w-full">
                BUY WASTE
              </h2>
              <p className="text-xl leading-relaxed tracking-wide">
                As a Buyer, you're looking for raw materials to reuse,
                process, or upcycle. WasteX connects you with waste
                producers, providing easy access to valuable materials
                while supporting a circular economy.
              </p>
            </div>
            {/* Left Image */}
            <div className="flex-shrink-0 lg:order-1">
              <img
                src="/images/image-24.png"
                alt="Workers discussing waste management"
                className="w-full max-w-md rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 md:px-16 lg:px-20">
          <div className="flex flex-col min-[1261px]:flex-row justify-start min-[1261px]:justify-center items-start min-[1261px]:items-center gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-6 max-w-lg lg:order-1">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-automate font-bold text-black leading-tight tracking-wider text-left">
                How WasteX benefits you
              </h2>

              {/* Benefits List */}
              <div className="flex flex-col gap-6 w-full">
                {/* Benefit 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex w-8 h-8 items-center justify-center rounded-full bg-wastex-icon-bg flex-shrink-0">
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
                  <div className="flex flex-col">
                    <h3 className="text-black text-xl font-bold leading-tight tracking-wider">
                      Find reliable suppliers
                    </h3>
                    <p className="text-black text-base leading-relaxed tracking-wide">
                      Access a marketplace of producers offering various waste
                      materials.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex w-8 h-8 items-center justify-center rounded-full bg-wastex-icon-bg flex-shrink-0">
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
                  <div className="flex flex-col">
                    <h3 className="text-black text-xl font-bold leading-tight tracking-wider">
                      Lower material costs
                    </h3>
                    <p className="text-black text-base leading-relaxed tracking-wide">
                      Source affordable raw materials for your operations.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex w-8 h-8 items-center justify-center rounded-full bg-wastex-icon-bg flex-shrink-0">
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
                  <div className="flex flex-col">
                    <h3 className="text-black text-xl font-bold leading-tight tracking-wider">
                      Support sustainability
                    </h3>
                    <p className="text-black text-base leading-relaxed tracking-wide">
                      Reduce demand for virgin materials and promote eco-friendly
                      practices.
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex w-8 h-8 items-center justify-center rounded-full bg-wastex-icon-bg flex-shrink-0">
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
                  <div className="flex flex-col">
                    <h3 className="text-black text-xl font-bold leading-tight tracking-wider">
                      Streamlined transactions
                    </h3>
                    <p className="text-black text-base leading-relaxed tracking-wide">
                      Connect directly with producers for efficient sourcing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <p className="text-gray-500 text-lg italic leading-relaxed tracking-wide">
                Join WasteX today and make waste work for you!
              </p>

              <button className="bg-wastex-primary text-wastex-text px-6 py-3 rounded-full text-xl font-automate font-normal tracking-wider hover:bg-wastex-primary/90 transition-colors max-[580px]:w-full mx-auto min-[1261px]:mx-0">
                Get started
              </button>
            </div>

            {/* Right Image */}
            <div className="relative flex-shrink-0 lg:order-2">
              <img
                src="/images/image-4.png"
                alt="WasteX benefits dashboard"
                className="w-full max-w-2xl h-auto relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Recycler Section */}
        <section
          className="py-20 px-4 md:px-16 lg:px-36 flex justify-start min-[1261px]:justify-center"
          style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}
        >
          <div className="flex flex-col min-[1261px]:flex-row items-start min-[1261px]:items-center gap-12 max-w-7xl">
            {/* Right Content */}
            <div className="flex flex-col items-start gap-6 max-w-3xl text-left lg:order-2">
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider text-left">
                  PRODUCER
                </h3>
                <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-automate font-bold leading-tight tracking-wider">
                  Turn waste into value
                </h2>
              </div>

              <p className="text-black text-xl leading-relaxed tracking-wide">
                As a Producer, you generate waste materials that could still hold
                value. Instead of sending waste to landfills, WasteX helps you connect
                with recyclers, buyers, or businesses that can repurpose it—turning
                waste into opportunity.
              </p>

              <Link to="/producer" className="bg-wastex-secondary text-white px-6 py-3 rounded-full text-xl font-automate font-normal tracking-wider hover:bg-wastex-secondary/90 transition-colors max-[580px]:w-full mx-auto min-[1261px]:mx-0 text-center">
                Learn more
              </Link>
            </div>
            {/* Left Image */}
            <div className="relative flex-shrink-0 lg:order-1">
              {/* Green decorative square in upper left corner */}
              <div className="absolute -left-8 -top-8 w-26 h-26 bg-wastex-icon-bg rounded-2xl hidden lg:block"></div>
              <img
                src="/images/image-25.png"
                alt="Producer worker"
                className="w-full max-w-lg h-auto rounded-2xl relative z-10"
              />
            </div>
          </div>
        </section>
    </div>
  );
}
