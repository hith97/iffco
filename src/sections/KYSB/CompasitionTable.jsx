import React from "react";

function CompasitionTable() {
  return (
    <>
      <div className="container mb-[80px]">
        <h2>Compensation Structure</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-black text-left">
            <thead>
              <tr className="bg-green-600 text-white border-b border-black">
                <th className="px-6 py-3 text-lg font-semibold border-r border-black">
                  In the Event of
                </th>
                <th className="px-6 py-3 text-lg font-semibold">
                  Compensation
                </th>
              </tr>
            </thead>
            <tbody className="text-black text-sm">
              <tr className="border-t border-black">
                <td className="px-6 py-4 border-r border-black">
                  Accident Death
                </td>
                <td className="px-6 py-4 font-semibold">100% of Sum Insured</td>
              </tr>
              <tr className="border-t border-black">
                <td className="px-6 py-4 border-r border-black">
                  Loss of any two limbs / two eyes
                </td>
                <td className="px-6 py-4 font-semibold">50% of Sum Insured</td>
              </tr>
              <tr className="border-t border-black border-b">
                <td className="px-6 py-4 border-r border-black">
                  Loss of any one limb / one eye
                </td>
                <td className="px-6 py-4 font-semibold">25% of Sum Insured</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CompasitionTable;
