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
      "WasteX is designed for a wide range of users, including industrial facilities, commercial businesses, municipalities, and recycling centers. Our platform is flexible and can be adapted to meet the specific needs of any organization that generates or manages waste.",
  },
  {
    question: "Is WasteX available only in Trinidad & Tobago?",
    answer:
      "Currently, our services are exclusively available in Trinidad & Tobago. We are focused on perfecting our operations locally but have plans for expansion to other regions in the near future as we grow.",
  },
  {
    question: "How much does it cost to use WasteX?",
    answer:
      "We offer a variety of pricing plans tailored to the scale and needs of your operations. This includes pay-per-use options for smaller businesses and comprehensive subscription plans for larger enterprises. Contact us for a detailed quote.",
  },
  {
    question: "What if there’s an issue with a job?",
    answer:
      "Our dedicated support team is available 24/7 to assist with any issues. You can report a problem directly through the app, and our team will work swiftly to resolve it, ensuring minimal disruption to your services.",
  },
];

const FaqAccordion = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-4xl bg-[#F3F4F6] p-10 rounded-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          You've got questions. We've got answers
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqAccordion; 