
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
}

export const Faq = ({ items }: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <h3 className="text-lg font-medium">{item.question}</h3>
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
