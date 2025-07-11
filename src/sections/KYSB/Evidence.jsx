import React from "react";

export default function Evidence({ data }) {
  if (!data) return null;

  const { core_objective_1, core_objective_2 } = data;

  return (
    <div className="w-full mb-[80px]">
      {/* Core Objectives Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="mb-12">
          <h2 className="h2">Evidence and Period of Insurance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Core Objective 1 */}
          <div className="bg-[#F5F6E8] p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="text-center">
              <p className="text-green-600 text-xl md:text-2xl font-bold mb-4 leading-tight">
                {core_objective_1}
              </p>
            </div>
          </div>

          {/* Core Objective 2 */}
          <div className="bg-[#008C44] p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="text-center">
              <p className="text-white text-xl md:text-2xl font-bold mb-4 leading-tight">
                {core_objective_2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
