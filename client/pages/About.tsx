import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        {/* Contact us Section */}
        <section
          className="py-16 px-4 md:px-16 lg:px-36"
          style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="relative flex-shrink-0">
              {/* Light Green decorative square */}
              <div className="absolute -left-8 -top-8 w-26 h-26 bg-green-200 rounded-2xl"></div>
              <div className="relative bg-wastex-dark-bg rounded-2xl p-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4baf6be7630688b03c2d0ed7b4b642ba640bc556?width=1197"
                  alt="Customer service representative"
                  className="w-full max-w-lg h-auto rounded-lg relative z-10"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-start gap-8 max-w-lg">
              <h2 className="text-2xl font-bold text-black tracking-wider">
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

              <button className="bg-wastex-primary text-black px-6 py-2 rounded-full text-lg font-bold tracking-wider hover:bg-wastex-primary/90 transition-colors">
                Send
              </button>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-14 px-4 md:px-16 lg:px-80" style={{ backgroundColor: '#9BDCAE' }}>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Image with Profile Complex Layout */}
            <div className="relative flex-shrink-0" style={{ height: '188px', paddingRight: '26.5px' }}>
              {/* Background container */}
              <div className="relative" style={{ width: '608px', height: '299px', position: 'absolute', left: '-244px', top: '-56px' }}>
                {/* Large green circle */}
                <div className="absolute rounded-full" style={{
                  width: '716px',
                  height: '716px',
                  backgroundColor: '#61BD7C',
                  left: '-110px',
                  top: '-208px'
                }}></div>

                {/* Container for truck and avatar */}
                <div className="absolute" style={{ width: '336px', height: '183px', left: '213px', top: '61px' }}>
                  {/* Truck image */}
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2ff35b133587e568e990200d85139b48daa7ddd8?width=494"
                    alt="Waste management truck"
                    className="absolute"
                    style={{
                      width: '247px',
                      height: '165px',
                      left: '89px',
                      top: '12px'
                    }}
                  />

                  {/* Avatar circle */}
                  <div className="absolute rounded-full border-6 flex items-center justify-center overflow-hidden" style={{
                    width: '183px',
                    height: '183px',
                    borderColor: '#61BD7C',
                    left: '0px',
                    top: '0px'
                  }}>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/74e645f36d84fdbc6def2c6c24161b3e04362606?width=530"
                      alt="Team member"
                      className="absolute object-cover"
                      style={{
                        width: '265px',
                        height: '302px',
                        left: '-27px',
                        top: '-26px'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-start gap-8 max-w-2xl">
              <h2 className="text-2xl text-black leading-normal" style={{ width: '792px' }}>
                Join WasteX for <span className="font-bold">FREE</span> and enjoy your first job on us! Simplify your waste management today!
              </h2>

              <button className="bg-wastex-secondary text-white px-6 py-3 rounded-full text-xl font-bold tracking-wider hover:bg-wastex-secondary/90 transition-colors">
                Get started
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
