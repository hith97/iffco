import { useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0); // First open

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full divide-y divide-gray-300">
      {items.map((item, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full text-left font-semibold text-green-700 text-lg focus:outline-none"
          >
            {item.title}
            <span className="text-red-600 text-xl">
              {openIndex === index ? "▲" : "▼"}
            </span>
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden ${
              openIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="pt-2 text-gray-700">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
