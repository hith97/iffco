import React from "react";
import kysimg from "../../assets/kysimg.png";
import kysb1 from "../../assets/kysb1.png";

function WhoKysb({ data }) {
  return (
    <>
      <div className="whokysmain">
        <h2 className="text-center mb-6">Kisan Suraksha Bima Yojna</h2>
        <div className="mission flex flex-wrap sm:flex-nowrap items-center justify-between">
          <div className="missionin max-w-lg">
            <div className="misioncon">
              <p className="w-[100%]">
                IFFCO-MC Crop Science Pvt. Ltd. has come up with a new Personal
                Accident Insurance scheme for its customers buying agrochemicals
                products. This scheme offers a Personal Accident cover, the
                premium for which will be paid by IFFCO-MC and will be
                implemented by IFFCO-Tokio General Insurance Co. Ltd. Farmers
                purchasing products of a minimum of ‘150 will be eligible under
                the insurance scheme and the sum insured will vary between a
                minimum of ‘1,000 and a maximum of ‘1,00,000 depending upon the
                amount of agrochemical products purchased by the farmer. 
              </p>
            </div>
          </div>
          <div className="kysimg">
            <img src={kysimg} alt="KysIMG" />
          </div>
        </div>
      </div>
      <div className="whatinsured py-8">
        <h2 className="text-center">What we insure?</h2>
        <p className="text-center">
          Death or Permanent Total Disablement arising out of following
          situations
        </p>
        <div className="container">
          <div className="bgshape flex flex-col md:flex-row flex-wrap justify-center gap-2 lg:gap-2">
            <div className="text-center group cursor-pointer flex flex-col w-full sm:w-[16%]">
              <div className="relative mb-[-125px]">
                <div className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#DC1F2C] duration-300">
                  <img
                    src={kysb1}
                    alt="Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="pt-[140px] pb-[10px] px-4 w-full">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-6 group-hover:text-green-700 transition-colors duration-200">
                  Rail / Road Accident
                </h3>
              </div>
            </div>
            <div className="text-center group cursor-pointer flex flex-col w-full sm:w-[16%]">
              <div className="relative mb-[-125px]">
                <div className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#DC1F2C] duration-300">
                  <img
                    src={kysb1}
                    alt="Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="pt-[140px] pb-[10px] px-4 w-full">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-6 group-hover:text-green-700 transition-colors duration-200">
                  Burning
                </h3>
              </div>
            </div>
            <div className="text-center group cursor-pointer flex flex-col w-full sm:w-[16%]">
              <div className="relative mb-[-125px]">
                <div className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#DC1F2C] duration-300">
                  <img
                    src={kysb1}
                    alt="Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="pt-[140px] pb-[10px] px-4 w-full">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-6 group-hover:text-green-700 transition-colors duration-200">
                  Gas Cylinder Explosion
                </h3>
              </div>
            </div>
            <div className="text-center group cursor-pointer flex flex-col w-full sm:w-[16%]">
              <div className="relative mb-[-125px]">
                <div className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#DC1F2C] duration-300">
                  <img
                    src={kysb1}
                    alt="Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="pt-[140px] pb-[10px] px-4 w-full">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-6 group-hover:text-green-700 transition-colors duration-200">
                  Snake Bite
                </h3>
              </div>
            </div>
            <div className="text-center group cursor-pointer flex flex-col w-full sm:w-[16%]">
              <div className="relative mb-[-125px]">
                <div className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#DC1F2C] duration-300">
                  <img
                    src={kysb1}
                    alt="Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="pt-[140px] pb-[10px] px-4 w-full">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-6 group-hover:text-green-700 transition-colors duration-200">
                  Drowning
                </h3>
              </div>
            </div>
            <div className="text-center group cursor-pointer flex flex-col w-full sm:w-[16%]">
              <div className="relative mb-[-125px]">
                <div className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] mx-auto rounded-full overflow-hidden p-[25px] bg-[#DC1F2C] duration-300">
                  <img
                    src={kysb1}
                    alt="Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="pt-[140px] pb-[10px] px-4 w-full">
                <h3 className="text-green-600 text-xl md:text-2xl font-bold mb-6 group-hover:text-green-700 transition-colors duration-200">
                  Any other accident
                </h3>
              </div>
            </div>
          </div>
          <p className="text-center font-bold text-md text-[#DC1F2C] mt-6">
            {" "}
            Natural Death is not covered under the policy.{" "}
          </p>
        </div>
      </div>
      <div className="compositable p-[20px] sm:p-[80px]">
        <h2 className="text-center">Compensation Structure</h2>
        <table className="w-full border border-gray-300 text-left text-sm md:text-base">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="py-3 px-4 font-semibold">In the Event of</th>
              <th className="py-3 px-4 font-semibold">Compensation</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-t border-gray-300">
              <td className="py-3 px-4">Accident Death</td>
              <td className="py-3 px-4 font-semibold">100% of Sum Insured</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="py-3 px-4">Loss of any two limbs / two eyes</td>
              <td className="py-3 px-4 font-semibold">50% of Sum Insured</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="py-3 px-4">Loss of any one limb / one eye</td>
              <td className="py-3 px-4 font-semibold">25% of Sum Insured</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap sm:flex-nowrap overflow-hidden bg-[#F5F6E8] rounded-[20px] sm:rounded-[150px]">
          <div className="w-[100%] sm:w-[50%] p-[40px]">
            <div className="whatleftmain flex flex-wrap sm:flex-nowrap gap-6">
              <div className="w-[100%] sm:w-[100%]">
                <h3 className="text-3xl font-bold text-[#008C44] mb-2 text-center">
                  Evidence & Period of Insurance
                </h3>
                <ul className="list-disc list-outside">
                  <li>
                    The evidence of insurance under this scheme will be the
                    purchase receipt of the agrochemical products.{" "}
                  </li>
                  <li>
                    Period of insurance shall be a period of 12 months
                    commencing from the 31st day of agrochemical product
                    purchase.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[100%] sm:w-[50%] p-[40px] bg-[#008C44]">
            <div className="whatrighmain flex flex-wrap sm:flex-nowrap gap-6">
              <div className="w-[100%] sm:w-[100%]">
                <h3 className="text-3xl font-bold text-[#fff] mb-2 text-center">
                  How to Initiate a claim
                </h3>
                <p className="text-white">
                  In the event of a claim, IFFCO-Tokio needs to be contacted on
                  its Customer Care number:
                </p>
                <p className="text-white font-bold">
                  +91-124-4285499 <br /> 1800-103-5499 (Toll Free)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="documentreq w-full py-[60px]">
        <h2 className="text-center">Documents required for claim settlement</h2>
        <ol className="list-decimal text-xl font-medium">
          <li>Purchase receipt in original </li>
          <li>Copy of FIR </li>
          <li>Copy of the medical report by treating doctor </li>
          <li>Copy of post mortem report </li>
          <li>Copy of death certificate duly attested by registrar</li>
          <li>Society documents duly attested by IFFCO Field Officer</li>
          <li>NEFT details of the claimant</li>
        </ol>
      </div>
    </>
  );
}

export default WhoKysb;
