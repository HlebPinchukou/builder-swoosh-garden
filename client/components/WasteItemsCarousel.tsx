import React, { useState, useRef, useEffect } from 'react';

const wasteItems = [
    {
      name: "Plastic Bottles",
      icon: "/images/image-12.png",
      description: "Includes bottles, wrapping, and other plastic materials.",
    },
    {
      name: "Scrap Metal",
      icon: "/images/image-13.png",
      description: "Covers steel, copper, aluminum, and other metals.",
    },
    {
      name: "Cardboard & Paper",
      icon: "/images/image-14.png",
      description: "Old boxes, newspapers, and office paperIncludes lubricant, crude, vegetable, and hydraulic oils.",
    },
    {
      name: "E-Waste",
      icon: "/images/image-15.png",
      description: "Consists of batteries, computers, phones and other electronic waste.",
    },
    {
      name: "APPLIANCES",
      icon: "/images/IC4.png",
      description: "Covers large items such as stoves, AC units, refrigerators, freezers, TVs, beds, mattresses, sofas, and tables.",
    },
    {
      name: "BIOWASTE",
      icon: "/images/IC2.png",
      description: "Includes organic waste such as food scraps, garden waste, and biodegradable materials.",
    },
    {
        name: "TIRES",
        icon: "/images/IC3.png",
        description: "Includes bottles, wrapping, and other plastic materials.",
      },
];

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Set initial size
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowSize;
  };

const WasteItemsCarousel = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeDot, setActiveDot] = useState(0);
    const { width } = useWindowSize();

    const itemsPerPage = width < 768 ? 2 : width < 1024 ? 3 : 4;
    const totalPages = Math.ceil(wasteItems.length / itemsPerPage);

    useEffect(() => {
        // Reset to first page if total pages changes to prevent being on a non-existent page
        if (currentPage >= totalPages) {
          setCurrentPage(0);
        }
      }, [totalPages, currentPage]);

    const handlePrev = () => {
        setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
    };

    const handleNext = () => {
        setCurrentPage((prevPage) => Math.min(totalPages - 1, prevPage + 1));
    };

    const handleMobileScroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
          const scrollAmount = 272; // Card width (w-64 = 256px) + gap (space-x-4 = 16px)
          scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
          });
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
    
        const handleScroll = () => {
          const scrollLeft = container.scrollLeft;
          const cardWidth = 272; // w-64 (256px) + space-x-4 (16px)
          const newActiveDot = Math.round(scrollLeft / cardWidth);
          setActiveDot(newActiveDot);
        };
    
        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
      }, []);

    const groupedItems = Array.from({ length: totalPages }, (_, i) =>
        wasteItems.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
    );

    return (
        <section className="relative bg-wastex-dark-bg py-20 text-white">
            <div className="absolute inset-0 opacity-60">
                <img
                    src="/images/image-16.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>
            <div className="container mx-auto px-4 relative">
                <h2 className="text-4xl font-automate font-bold text-center mb-12">
                    Popular waste items
                </h2>
                {/* Mobile horizontal scroll */}
                <div className="lg:hidden">
                    <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
                        {wasteItems.map((item, itemIndex) => (
                            <div key={itemIndex} className="bg-wastex-card-bg p-6 rounded-lg flex flex-col items-start text-left flex-shrink-0 w-64">
                                <img src={item.icon} alt={item.name} className="w-16 h-16 rounded-full mb-6" />
                                <h3 className="text-xl font-bold mb-2 uppercase">{item.name}</h3>
                                <p className="text-gray-300 text-sm h-16">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    {/* Mobile Arrows & Dots */}
                    <div className="flex justify-center items-center mt-8 space-x-4">
                        <button
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                            onClick={() => handleMobileScroll('left')}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="#0F2415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <div className="flex items-center gap-2">
                            {wasteItems.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${activeDot === index ? 'bg-wastex-primary' : 'bg-gray-400 bg-opacity-80'}`}
                                ></div>
                            ))}
                        </div>
                        <button
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                            onClick={() => handleMobileScroll('right')}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="#0F2415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Desktop grid with pagination */}
                <div className="relative hidden lg:block">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentPage * 100}%)` }}
                        >
                            {groupedItems.map((pageItems, pageIndex) => (
                                <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                    {pageItems.map((item, itemIndex) => (
                                        <div key={itemIndex} className="bg-wastex-card-bg p-6 rounded-lg flex flex-col items-start justify-center text-left h-full">
                                            <img src={item.icon} alt={item.name} className="w-16 h-16 rounded-full mb-6" />
                                            <h3 className="text-xl font-bold mb-2 uppercase">{item.name}</h3>
                                            <p className="text-gray-300 text-sm">{item.description}</p>
                                        </div>
                                    ))}
                                    {/* Fill empty space if the last page is not full */}
                                    {pageItems.length < itemsPerPage &&
                                        Array.from({ length: itemsPerPage - pageItems.length }).map((_, i) => <div key={`placeholder-${i}`} />)}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-8 space-x-4">
                        <button
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center disabled:opacity-20"
                            onClick={handlePrev}
                            disabled={currentPage === 0}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="#0F2415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        
                        <div className="hidden min-[1031px]:flex items-center gap-4">
                           <div
                                className={`w-2 h-2 rounded-full ${currentPage === 0 ? 'bg-wastex-primary' : 'bg-gray-400 bg-opacity-80'}`}
                            ></div>
                            <div
                                className={`w-2 h-2 rounded-full ${currentPage === totalPages - 1 ? 'bg-wastex-primary' : 'bg-gray-400 bg-opacity-80'}`}
                            ></div>
                        </div>

                        <button
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center disabled:opacity-20"
                            onClick={handleNext}
                            disabled={currentPage === totalPages - 1}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="#0F2415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <button className="bg-primary text-wastex-text px-8 py-3 rounded-full text-lg font-automate font-normal hover:bg-primary/90 transition-colors">
                        Get started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WasteItemsCarousel; 