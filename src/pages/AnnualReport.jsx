import React, { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";

function AnnualReport() {
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    fetch("https://covana.in/iffcobackend/wp-json/wp/v2/pages/223")
      .then((res) => res.json())
      .then((data) => {
        setPdfUrl(data.acf?.pdf_file || "");
      })
      .catch((err) => console.error("Failed to fetch PDF:", err));
  }, []);

  return (
    <>
      <HeroTitle title="ANNUAL REPORT" />
      <Breadcrumb title="Annual Report" />
      <div className="container py-12 px-4 md:px-6 space-y-6 text-center">
        {pdfUrl ? (
          <>
            {/* Responsive iframe */}
            <div className="w-full aspect-[3/4] md:aspect-[16/9] border shadow-lg">
              <iframe
                src={pdfUrl}
                title="Annual Report PDF"
                className="w-full h-full"
              />
            </div>

            {/* Download button */}
            {/* <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-700 text-white font-semibold rounded hover:bg-green-800 transition"
            >
              Download PDF
            </a> */}
          </>
        ) : (
          <h2 className="text-xl font-semibold">Loading Annual Report...</h2>
        )}
      </div>
    </>
  );
}

export default AnnualReport;
