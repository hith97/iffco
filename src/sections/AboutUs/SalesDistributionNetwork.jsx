import React from "react";

export default function SalesDistributionNetwork() {
  return (
    <div className="py-12 space-y-16">

      {/* Sales & Marketing Network */}
      <div>
        <h2 className="h2">
          Sales & Marketing Network
        </h2>
        <p className="text-gray-700 mb-6">
          IFFCO-MC has a nationwide presence, operating in 20+ major agricultural states with a robust distribution framework:
        </p>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="bg-[#F5F6E8] px-6 py-[40px] flex-1 text-2xl font-bold text-[#008C44] text-center">
            110 sales territories, supported by a 300 member field demand generation team
          </div>
          <div className="bg-[#008C44] px-6 py-[40px] flex-1 text-2xl font-bold text-white text-center">
            A total workforce of 500 professionals, ensuring seamless farmer engagement.
          </div>
        </div>
      </div>

      {/* Distribution Network */}
      <div>
        <h2 className="h2">
          Distribution Network
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="bg-[#F5F6E8] px-6 py-[40px] flex-1 text-2xl font-bold text-[#008C44] text-center">
            11,000+ active channel partners, making IFFCO-MC the widest-reaching agrochemical supplier in India.
          </div>
          <div className="bg-[#008C44] px-6 py-[40px] flex-1 text-2xl font-bold text-white text-center">
            25 field warehouses, enabling efficient supply chain management and wholesale agricultural inputs.
          </div>
        </div>
      </div>
    </div>
  );
}
