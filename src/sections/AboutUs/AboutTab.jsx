"use client";

import { useState, useEffect } from "react";
import AboutInfo from "./AboutInfo";
import CoreObjective from "./CoreObjective";
import BoardOfDirectors from "./Team";
import VisionMision from "./VisionMision";
import SalesDistributionNetwork from "./SalesDistributionNetwork";
import Development from "./Development";

export default function InfoTabs({ acfData }) {
  const tabs = [
    { id: "about", label: "About IFFCO-MC" },
    { id: "objectives", label: "Core Objectives" },
    { id: "vision", label: "Vision & Mission" },
    { id: "infrastructure", label: "Infrastructure & Resources" },
    { id: "innovation", label: "Development & Innovation" },
    { id: "board-of-director", label: "Board of Directors" },
  ];

  const [activeTab, setActiveTab] = useState("about");

  // Handle hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const validTab = tabs.find((tab) => tab.id === hash);
    if (validTab) {
      setActiveTab(validTab.id);
    }
  }, []);

  // Handle browser back/forward (hashchange)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const validTab = tabs.find((tab) => tab.id === hash);
      if (validTab) {
        setActiveTab(validTab.id);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section className="py-8 md:py-12 lg:py-16" id="aboutus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs Header */}
        <div className="flex flex-wrap mb-8 justify-center">
          <div className="tabmain">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.location.hash = tab.id;
                }}
                className={`capitalize px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#d12627] text-white"
                    : "text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Static Tab Content */}
        <div className="text-gray-800 space-y-4">
          {activeTab === "about" && <AboutInfo html={acfData.about} />}
          {activeTab === "objectives" && <CoreObjective data={acfData.coreObjectives} />}
          {activeTab === "vision" && <VisionMision data={acfData.visionMission} />}
          {activeTab === "infrastructure" && <SalesDistributionNetwork />}
          {activeTab === "innovation" && <Development />}
          {activeTab === "board-of-director" && <BoardOfDirectors />}
        </div>
      </div>
    </section>
  );
}
