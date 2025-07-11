import React from "react";

export default function InfoBox({ data }) {
  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <div className="container mb-[50px]">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-700">
        {data.title}
      </h2>
      <p>Death or Permanent Total Disablement arising out of</p>

      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4 lg:gap-4">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="text-center group cursor-pointer w-full sm:w-[32%] sm:min-h-[360px] mb-[20px] flex flex-col"
          >
            <div className="relative mb-[-125px]">
              <div className="w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#008C44] duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="bg-[#F5F6E8] pt-[140px] pb-[10px] px-4 w-full">
              <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-6 group-hover:text-green-700 transition-colors duration-200">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-red-600 text-xl font-bold mt-4">
        Natural Death is not covered under the policy.
      </p>
    </div>
  );
}
