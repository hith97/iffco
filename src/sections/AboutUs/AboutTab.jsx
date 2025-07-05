"use client";

import { useState } from "react";
import AboutInfo from "./AboutInfo";
import CoreObjective from "./CoreObjective";
import BoardOfDirectors from "./Team";
import VisionMision from "./VisionMision";
import SalesDistributionNetwork from "./SalesDistributionNetwork";
import Development from "./Development";

export default function InfoTabs() {
  const tabs = [
    { id: "about", label: "About IIFCO-MC" },
    { id: "objectives", label: "Core Objectives" },
    { id: "vision", label: "Vision & Mission" },
    { id: "infrastructure", label: "Infrastructure & Resources" },
    { id: "innovation", label: "Development & Innovation" },
    { id: "board", label: "Board of Directors" },
  ];

  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs Header */}
        <div className="flex flex-wrap mb-8 justify-center">
          <div class="tabmain">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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
          {activeTab === "about" && (
            <div>
              <AboutInfo />
            </div>
          )}

          {activeTab === "objectives" && (
            <div>
              <CoreObjective />
            </div>
          )}

          {activeTab === "vision" && (
            <div>
              <VisionMision />
            </div>
          )}

          {activeTab === "infrastructure" && (
            <div>
              <SalesDistributionNetwork />
            </div>
          )}

          {activeTab === "innovation" && (
            <div>
            <Development />
              </div>
          )}

          {activeTab === "board" && (
            <div>
              <BoardOfDirectors />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
