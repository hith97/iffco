import React from "react";
import { Eye, Download } from "lucide-react"
import view from "../../assets/view.png"
import download from "../../assets/download.png"

export default function AnnualReportCon() {
  const reports = [
    { year: 2025, title: "Annual Report - 2025" },
    { year: 2024, title: "Annual Report - 2024" },
    { year: 2023, title: "Annual Report - 2023" },
    { year: 2022, title: "Annual Report - 2022" },
    { year: 2021, title: "Annual Report - 2021" },
    { year: 2020, title: "Annual Report - 2020" },
    { year: 2019, title: "Annual Report - 2019" },
    { year: 2018, title: "Annual Report - 2018" },
  ];

  const handleView = (year) => {
    console.log(`Viewing report for ${year}`);
    // Add your view logic here
  };

  const handleDownload = (year) => {
    console.log(`Downloading report for ${year}`);
    // Add your download logic here
  };
  return (
    <>
      <section className="py-[80px] annualcon">
        <div className="container">
          <div className="annualconin max-w-[950px] mx-auto mb-[50px]">
            <div className="anccon">
              <p>
                IFFCO‑MC’s Annual Report webpage provides access to financial
                and operational reports of the joint venture between IFFCO and
                Mitsubishi Corporation. It includes audited results, business
                highlights, and insights into the company’s crop protection
                portfolio and growth across India.
              </p>
            </div>
          </div>
          <div className="w-full max-w-[950px] mx-auto">
            <div className="">
              {reports.map((report, index) => (
                <div
                  key={report.year}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 ${
                    index !== reports.length - 1
                      ? "border-b border-[#D9D9D9]"
                      : ""
                  } hover:bg-gray-50 transition-colors duration-200`}
                >
                  {/* Report Title */}
                  <div className="mb-3 sm:mb-0">
                    <h3 className="text-lg font-medium text-green-700 hover:text-green-800 transition-colors duration-200">
                      {report.title}
                    </h3>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-row gap-3 sm:gap-4">
                    {/* View Button */}
                    <button
                      onClick={() => handleView(report.year)}
                      className="flex items-center gap-2 font-medium text-[#008C44] transition-all duration-200"
                    >
                      <img src={view} className="w-4 h-4" />
                      <span>View</span>
                    </button>

                    {/* Download Button */}
                    <button
                      onClick={() => handleDownload(report.year)}
                      className="flex items-center gap-2 font-medium  text-[#008C44] transition-all duration-200"
                    >
                      <img src={download} className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
