import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Who can use WasteX?",
    answer:
      "WasteX is designed for businesses of all sizes, from small enterprises to large corporations, that produce or can utilize waste materials. This includes manufacturers, construction companies, retailers, and recycling facilities.",
  },
  {
    question: "Is WasteX available only in Trinidad & Tobago?",
    answer:
      "Currently, our services are focused on Trinidad & Tobago, but we have plans to expand to other regions in the future. Stay tuned for updates!",
  },
  {
    question: "How much does it cost to use WasteX?",
    answer:
      "Joining WasteX is free! We believe in making sustainability accessible. Your first job, whether you're a producer or a buyer, is on us. Subsequent transactions may have a small service fee.",
  },
  {
    question: "What if there's an issue with a job?",
    answer:
      "Our dedicated support team is here to help. You can report any issues through the platform, and we'll work with all parties to find a swift and fair resolution.",
  },
];

const FaqAccordion = () => {
  return (
    <section className="bg-white py-10">
      <div
        className="container mx-auto max-w-4xl p-10 rounded-lg"
        style={{ backgroundColor: "rgba(194, 198, 196, 0.20)" }}
      >
        <h2 className="text-4xl font-automate font-bold text-center text-gray-800 mb-10">
          You've got questions. We've got answers
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b">
              <AccordionTrigger className="text-left hover:no-underline font-semibold text-base sm:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqAccordion; 