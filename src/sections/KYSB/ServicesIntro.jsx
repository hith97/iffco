import React from "react";

export default function ServicesIntro({ data }) {
  if (!data || !data.html) return null;

  return (
    <div className="container my-[80px]">
      <div className="mb-8">
        <h2 className="mb-6 text-3xl font-bold text-green-700">KYSB</h2>

        <div className="bg-[#F5F6E8] p-4 sm:p-8 text-center">
          <div
            className="text-gray-700 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data.html }}
          />
        </div>
      </div>
    </div>
  );
}
