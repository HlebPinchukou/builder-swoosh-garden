import React, { useState } from 'react';

const wasteItems = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/a1e52734bb1b3fa8e36ad173efea3a4962188caa?width=150",
      title: "PLASTICS",
      description: "Includes bottles, wrapping, and other plastic materials.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ddcb5985d858108cb3d85706414f556eee83cc56?width=150",
      title: "METALS",
      description: "Covers steel, copper, aluminum, and other metals.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/0cafb91f8185b96c5f6e53609cbebb36f5ab9829?width=150",
      title: "OILS",
      description: "Includes lubricant, crude, vegetable, and hydraulic oils.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d8fa64ec8d0e858b0bb86710ce035392f825e722?width=150",
      title: "E-WASTE",
      description: "Consists of batteries, computers, phones and other electronic waste.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/a1e52734bb1b3fa8e36ad173efea3a4962188caa?width=150",
      title: "APPLIANCES",
      description: "Covers large items such as stoves, AC units, refrigerators, freezers, TVs, beds, mattresses, sofas, and tables.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/a1e52734bb1b3fa8e36ad173efea3a4962188caa?width=150",
      title: "BIOWASTE",
      description: "Includes organic waste such as food scraps, garden waste, and biodegradable materials.",
    },
];

const itemsPerPage = 4;
const totalPages = Math.ceil(wasteItems.length / itemsPerPage);

const WasteItemsCarousel = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePrev = () => {
        setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
    };

    const handleNext = () => {
        setCurrentPage((prevPage) => Math.min(totalPages - 1, prevPage + 1));
    };

    const groupedItems = Array.from({ length: totalPages }, (_, i) =>
        wasteItems.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
    );

    return (
        <section className="relative bg-wastex-dark-bg py-20 text-white">
            <div className="absolute inset-0 opacity-60">
                <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/d3eb29f554cb4a27046fe90a15dc3ffc674c155f?width=3001"
                    alt="Background pattern"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="container mx-auto px-4 relative">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Popular waste items
                </h2>
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentPage * 100}%)` }}
                        >
                            {groupedItems.map((pageItems, pageIndex) => (
                                <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {pageItems.map((item, itemIndex) => (
                                        <div key={itemIndex} className="bg-wastex-card-bg p-6 rounded-lg flex flex-col items-start justify-center text-left h-full">
                                            <img src={item.icon} alt={item.title} className="w-16 h-16 rounded-full mb-6" />
                                            <h3 className="text-xl font-bold mb-2 uppercase">{item.title}</h3>
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
                            className="w-12 h-12 bg-gray-500 bg-opacity-50 rounded-full flex items-center justify-center disabled:opacity-20"
                            onClick={handlePrev}
                            disabled={currentPage === 0}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        
                        <div className="flex items-center gap-4">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${currentPage === index ? 'bg-wastex-primary' : 'bg-gray-400 bg-opacity-80'}`}
                                ></div>
                            ))}
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
                    <button className="bg-wastex-primary text-wastex-text px-8 py-3 rounded-full text-lg font-bold hover:bg-wastex-primary/90 transition-colors">
                        Get started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WasteItemsCarousel; 