import Navigation from "@/components/Navigation";

export default function Producer() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="py-16 px-4 md:px-16 lg:px-20 bg-gray-100"
          style={{ height: "539px" }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 h-full">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-12 max-w-2xl">
              <div className="flex flex-col gap-4">
                <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">
                  PRODUCER
                </h3>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-wider">
                  Turn waste into opportunity
                </h1>
                <p className="text-xl text-black leading-relaxed tracking-wide">
                  Producers create waste and need a quick, responsible way to
                  dispose of it. WasteX connects them with Buyers who see value
                  in their junk—easy and eco-friendly!
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex-shrink-0">
              {/* Purple decorative square */}
              <div className="absolute -left-8 -top-8 w-26 h-26 bg-purple-300 rounded-2xl"></div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6dab52b9f6d40787faebe4c677c4baf3dda5ae0d?width=1297"
                alt="Waste management professionals"
                className="w-full max-w-2xl h-auto rounded-2xl relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Waste into Value Section */}
        <section
          className="relative bg-wastex-dark-bg overflow-hidden"
          style={{ height: "372px" }}
        >
          {/* Background Image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/fa9285f9f3e41bba6ace5d621afa7df29d19dd75?width=3001"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-4 md:px-16 lg:px-36">
            <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl mx-auto">
              {/* Left Image */}
              <div className="flex-shrink-0">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f17894db0096c2da1712d036f1db7e9c58f779c9?width=890"
                  alt="Workers discussing waste management"
                  className="w-full max-w-md rounded-2xl"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-col items-start gap-6 max-w-lg text-white">
                <h2 className="text-2xl font-semibold uppercase tracking-wider">
                  SELL YOUR WASTE
                </h2>
                <p className="text-xl leading-relaxed tracking-wide">
                  As a Producer, the waste you generate may still hold value.
                  Instead of sending it to a landfill, WasteX helps you connect
                  with recyclers, buyers, or businesses that can repurpose
                  it—transforming waste into new opportunities and sustainable
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 md:px-16 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-8">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-6 max-w-lg">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight tracking-wider">
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
                      Reduce disposal costs
                    </h3>
                    <p className="text-black text-base leading-relaxed tracking-wide">
                      Minimize landfill fees by selling or repurposing waste.
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
                      Enhance sustainability
                    </h3>
                    <p className="text-black text-base leading-relaxed tracking-wide">
                      Meet environmental goals by diverting waste from
                      landfills.
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
                      Generate revenue
                    </h3>
                    <p className="text-black text-base leading-relaxed tracking-wide">
                      Turn byproducts into profit by finding buyers.
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
                      Compliance & reporting
                    </h3>
                    <p className="text-black text-base leading-relaxed tracking-wide">
                      Stay compliant with waste regulations and track waste
                      diversion efforts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <p className="text-wastex-text text-lg italic leading-relaxed tracking-wide">
                Join WasteX today and make waste work for you!
              </p>

              <button className="bg-wastex-primary text-wastex-text px-6 py-3 rounded-full text-xl font-bold tracking-wider hover:bg-wastex-primary/90 transition-colors">
                Get started
              </button>
            </div>

            {/* Right Image */}
            <div className="relative flex-shrink-0">
              {/* Green decorative square behind the right corner */}
              <div className="absolute -right-8 -top-16 w-36 h-36 bg-wastex-icon-bg rounded-2xl"></div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d4e9bf91eca3b55029dd904a895365cbc84a4fe3?width=1330"
                alt="WasteX benefits dashboard"
                className="w-full max-w-2xl h-auto relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Recycler Section */}
        <section className="py-12 px-4 md:px-16 lg:px-36 bg-gray-100">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="relative flex-shrink-0">
              {/* Green decorative square in upper left corner */}
              <div className="absolute -left-8 -top-8 w-26 h-26 bg-wastex-icon-bg rounded-2xl"></div>
              <div className="relative bg-wastex-dark-bg rounded-2xl p-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e090b71e5893ad3fffaf09a390fdb11a624b9335?width=990"
                  alt="Recycler worker"
                  className="w-full max-w-lg h-auto rounded-lg relative z-10"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-start gap-6 max-w-3xl">
              <div className="flex flex-col gap-2">
                <h3 className="text-wastex-secondary text-2xl font-bold uppercase tracking-wider">
                  RECYCLER
                </h3>
                <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wider">
                  Find quality waste materials for reuse
                </h2>
              </div>

              <p className="text-black text-xl leading-relaxed tracking-wide">
                As a Recycler, you're looking for raw materials to reuse,
                process, or upcycle. WasteX connects you with waste producers,
                providing easy access to valuable materials while supporting a
                circular economy.
              </p>

              <button className="bg-wastex-secondary text-white px-6 py-3 rounded-full text-xl font-bold tracking-wider hover:bg-wastex-secondary/90 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-wastex-dark-bg text-white py-18 px-4 md:px-16 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-center gap-24 mb-16">
            {/* Left - Logo and Description */}
            <div className="flex flex-col gap-4 max-w-lg">
              <svg className="w-52 h-16" viewBox="0 0 207 65" fill="none">
                <path
                  d="M53.3595 6.66663H11.5346C8.83976 6.66663 6.65576 8.85428 6.65576 11.5536V53.4463C6.65576 56.1456 8.83976 58.3333 11.5346 58.3333H53.3574C56.0522 58.3333 58.2362 56.1456 58.2362 53.4463V11.5536C58.2362 8.85428 56.0522 6.66663 53.3574 6.66663H53.3595ZM32.2944 37.1289C32.2944 38.7464 31.8009 39.902 30.9113 41.1898C30.1537 42.2132 29.3962 43.2691 28.7035 44.2924C28.078 45.0838 27.3204 45.3809 26.3961 45.3809C25.342 45.3809 24.6494 45.0838 24.1559 44.2578L22.0476 40.9904C21.3896 42.146 20.697 43.1694 19.9394 44.2578C19.4459 45.0838 18.7532 45.3809 17.6991 45.3809C16.777 45.3809 16.0173 45.0838 15.3917 44.2924L13.1839 41.1898C12.2943 39.902 11.8008 38.8136 11.8008 37.1289V23.1661C11.8008 22.0777 12.7575 21.4837 13.7792 21.4837C14.8008 21.4837 15.7229 22.0777 15.7229 23.1661V37.1289C15.7229 37.955 15.7554 38.3496 16.2511 38.9762L17.7338 41.1552C18.2944 40.2315 18.8874 39.3057 19.513 38.3821C19.6039 38.291 19.6147 38.2282 19.6905 38.1414C19.9329 37.7425 20.1385 37.3718 20.1385 37.0292V28.942C20.1385 27.8536 21.0281 27.2921 22.0498 27.2921C23.0714 27.2921 23.9611 27.8536 23.9611 28.942V37.0292C23.9611 37.3913 24.1927 37.723 24.4221 38.1176L24.6862 38.5144L26.3658 41.1552L27.8485 38.9762C28.342 38.3496 28.3767 37.9528 28.3767 37.1289V23.1661C28.3767 22.0777 29.3334 21.4837 30.3529 21.4837C31.3724 21.4837 32.2966 22.0777 32.2966 23.1661V37.1289H32.2944ZM52.221 25.7657C52.221 27.3159 51.892 28.2417 50.7383 29.3974L46.8833 33.3585C48.037 34.3819 49.0911 35.4053 50.2772 36.4286C51.7275 37.749 52.1885 38.7052 52.1885 40.5546V43.2929C52.1885 44.3488 51.2664 44.9429 50.2448 44.9429C49.2231 44.9429 48.2686 44.3488 48.2686 43.2929V40.7194C48.2686 39.9605 48.169 39.5637 47.5435 39.0369L43.3248 35.273C42.1711 36.5609 40.985 37.7815 39.7988 39.0022C39.2707 39.6288 39.0737 39.993 39.0737 41.0164V43.2929C39.0737 44.3488 38.1841 44.9429 37.1624 44.9429C36.1408 44.9429 35.2187 44.3488 35.2187 43.2929V40.8841C35.2187 38.9371 35.7469 37.9463 36.8659 36.6259L40.4568 32.8967C39.2707 31.8083 37.9845 30.618 36.7983 29.5296C35.8438 28.606 35.2161 27.6477 35.2161 25.5684V22.9602C35.2161 21.8718 36.1057 21.2777 37.1598 21.2777C38.2139 21.2777 39.0711 21.8718 39.0711 22.9602V25.7657C39.0711 26.3923 39.268 26.6894 39.5646 27.0536C40.9802 28.3415 42.53 29.7269 43.9477 31.0148C45.1663 29.5947 46.4845 28.2743 47.7702 26.8238C48.0668 26.4617 48.2984 26.13 48.2984 25.6356V22.9623C48.2984 21.8739 49.2551 21.2799 50.2746 21.2799C51.2941 21.2799 52.2183 21.8739 52.2183 22.9623V25.7679L52.221 25.7657Z"
                  fill="#CBDB2A"
                />
                <path
                  d="M93.5229 36.4617C93.5229 38.1955 92.9925 39.4334 92.0388 40.8119C91.2255 41.9074 90.4141 43.0398 89.6711 44.1371C89.0002 44.9864 88.1869 45.3047 87.1981 45.3047C86.067 45.3047 85.3258 44.9864 84.7954 44.1019L82.5349 40.601C81.8289 41.8389 81.0859 42.9343 80.2745 44.1019C79.744 44.9864 79.0028 45.3047 77.8717 45.3047C76.8829 45.3047 76.0696 44.9864 75.3987 44.1371L73.031 40.8119C72.0773 39.4334 71.5469 38.2658 71.5469 36.4617V21.5013C71.5469 20.3337 72.5708 19.6972 73.6669 19.6972C74.7629 19.6972 75.7517 20.3337 75.7517 21.5013V36.4617C75.7517 37.3462 75.7868 37.7699 76.3173 38.4416L77.9068 40.7749C78.5075 39.785 79.1433 38.795 79.8142 37.8032C79.9196 37.6977 79.9196 37.6256 80.0268 37.5201L79.9566 37.6256C80.2393 37.1667 80.487 36.7411 80.487 36.3525V27.6871C80.487 26.5195 81.4407 25.9182 82.5368 25.9182C83.6328 25.9182 84.5846 26.5195 84.5846 27.6871V36.3525C84.5846 36.7411 84.8323 37.0945 85.08 37.5201L85.3628 37.9438L87.1649 40.7731L88.7544 38.4397C89.2848 37.768 89.3199 37.3443 89.3199 36.4598V21.4994C89.3199 20.3318 90.3439 19.6953 91.4399 19.6953C92.536 19.6953 93.5248 20.3318 93.5248 21.4994V36.4598L93.5229 36.4617Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M115.458 43.2877C115.458 44.4202 114.54 45.0567 113.445 45.0567C112.279 45.0567 111.397 44.5608 111.397 43.606V43.1822C111.257 43.2877 110.902 43.5357 110.584 43.7836C110.407 43.8891 110.196 44.0316 110.019 44.1722C109.205 44.7384 108.394 45.0215 107.581 45.0215H104.402C100.905 45.0215 98.5723 42.9343 98.5723 39.7165V37.5238C98.5723 34.552 101.045 32.1484 104.119 32.1484H106.662C108.252 32.1484 109.666 32.8201 110.547 33.6342L111.431 34.4114V32.1132C111.431 30.7347 110.972 30.026 109.17 30.026H102.529C101.363 30.026 100.622 29.2488 100.622 28.0812C100.622 26.9858 101.363 26.1013 102.529 26.1013H109.17C112.985 26.1013 115.458 28.7178 115.458 32.1132V43.2896V43.2877ZM111.431 39.326V38.6543C110.477 37.8402 109.664 37.2036 108.852 36.6023C108.181 36.0712 107.758 35.7881 106.945 35.7881H104.189C103.165 35.7881 102.6 36.5671 102.6 37.5219V40.068C102.6 40.8822 103.235 41.4114 104.189 41.4114H107.934C108.675 41.4114 109.17 41.1986 109.701 40.7397L111.433 39.3242L111.431 39.326Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M131.354 41.1302C132.378 41.1302 133.086 40.353 133.086 39.3612C133.086 38.3694 132.38 37.7699 131.283 37.6644L126.197 37.4516C122.665 37.3461 120.227 35.0109 120.227 31.8283C120.227 28.9287 122.56 26.1698 126.021 26.1698H134.217C135.383 26.1698 136.054 27.0543 136.054 28.1849C136.054 29.3155 135.418 30.1648 134.287 30.1648H125.949C124.996 30.1648 124.29 30.979 124.29 31.8616C124.29 32.8867 125.243 33.3826 126.232 33.4881L131.389 33.6287C134.921 33.7342 137.183 36.5283 137.183 39.252C137.183 42.2589 134.853 45.053 131.319 45.053H122.698C121.532 45.053 120.861 44.1685 120.861 43.0731C120.861 41.9055 121.532 41.1283 122.698 41.1283H131.354V41.1302Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M150.605 44.8087C146.896 44.8087 144.565 42.7936 144.565 38.832V30.2388H142.375C141.138 30.2388 140.538 29.5319 140.538 28.294C140.538 27.1616 141.138 26.3141 142.375 26.3141H144.565V21.5049C144.565 20.3373 145.554 19.7008 146.685 19.7008C147.816 19.7008 148.733 20.3373 148.733 21.5049V26.3141H151.877C153.043 26.3141 153.644 27.1634 153.644 28.294C153.644 29.5319 153.043 30.2388 151.877 30.2388H148.733V38.869C148.733 40.39 149.228 40.8137 150.64 40.8137H154.455C155.586 40.8137 156.257 41.6982 156.257 42.8288C156.257 43.9594 155.586 44.8087 154.455 44.8087H150.605Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M173.251 41.1302C174.417 41.1302 175.193 41.9092 175.193 43.075C175.193 44.2407 174.415 45.0197 173.251 45.0197H166.044C162.229 45.0197 159.651 42.4384 159.651 38.9005V32.2872C159.651 28.8566 162.264 26.0977 165.833 26.0977H170.497C173.923 26.0977 176.679 28.8566 176.679 32.2872V34.232C176.679 35.7178 174.984 37.3795 173.358 37.3795H163.713V39.3594C163.713 40.3845 164.772 41.1284 165.726 41.1284H173.251V41.1302ZM172.615 33.8804V31.8283C172.615 30.8735 171.731 29.9187 170.778 29.9187H165.656C164.632 29.9187 163.713 30.8735 163.713 31.8283V33.8804H172.617H172.615Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M200.309 43.2878C200.309 44.4202 199.32 45.0567 198.224 45.0567C197.128 45.0567 196.104 44.4202 196.104 43.2878V40.5288C196.104 39.7147 195.999 39.2909 195.326 38.7247L190.805 34.6927C189.569 36.0712 188.297 37.3813 187.026 38.6895C186.46 39.3612 186.248 39.7498 186.248 40.8471V43.2878C186.248 44.4202 185.294 45.0567 184.2 45.0567C183.105 45.0567 182.115 44.4202 182.115 43.2878V40.7065C182.115 38.6192 182.68 37.559 183.882 36.1434L187.732 32.1466C186.46 30.979 185.083 29.7059 183.81 28.5383C182.786 27.5484 182.115 26.5232 182.115 24.2935V21.4994C182.115 20.3318 183.068 19.6953 184.2 19.6953C185.331 19.6953 186.248 20.3318 186.248 21.4994V24.5063C186.248 25.178 186.46 25.4963 186.778 25.8849C188.297 27.2634 189.957 28.7493 191.476 30.1296C192.783 28.6086 194.197 27.1949 195.574 25.6388C195.892 25.2502 196.14 24.8968 196.14 24.3657V21.5013C196.14 20.3337 197.163 19.6972 198.259 19.6972C199.356 19.6972 200.344 20.3337 200.344 21.5013V24.5082C200.344 26.1698 199.991 27.1598 198.755 28.3977L194.622 32.6425C195.859 33.7379 196.99 34.8352 198.261 35.9306C199.816 37.3462 200.311 38.3713 200.311 40.3512V43.2859L200.309 43.2878Z"
                  fill="#F5F5F5"
                />
              </svg>
              <p className="text-sm leading-relaxed tracking-wide">
                Take control of your waste management with WasteX—empowering
                producers and buyers to connect, trade, and reuse waste
                seamlessly. Sustainability. Simplified.
              </p>
            </div>

            {/* Center - Company Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-bold tracking-wider">Company</h4>
              <div className="flex flex-col gap-3 text-sm">
                <span>How it works</span>
                <span>About us</span>
                <span>Privacy policy</span>
                <span>Terms of service</span>
              </div>
            </div>

            {/* Right - Information & Social */}
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-bold tracking-wider">
                Information
              </h4>
              <div className="flex flex-col gap-3 text-sm">
                <span>FAQ</span>
                <span>Contact us</span>
              </div>

              <h4 className="text-base font-bold tracking-wider mt-6">
                Our social media
              </h4>
              <div className="flex gap-14">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2864ba8adea33677a7b832f1d5036220d2026e4f?width=48"
                  alt="Instagram"
                  className="w-6 h-6"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f8d9eebe48e83fb51eac21570a0e655e1e3516e4?width=48"
                  alt="Facebook"
                  className="w-6 h-6"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/830a94f940b917fdd202217b67546e3a55ecf2e9?width=66"
                  alt="Twitter"
                  className="w-8 h-6"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d8702fc2fe9447f21a27fcf48780ff1f36c2907b?width=48"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-500 border-opacity-20 pt-6 text-center">
            <p className="text-sm tracking-wide">
              © 2025 WasteX | Simplifying waste. Boosting sustainability. All
              rights reserved, WasteX Corporation
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
