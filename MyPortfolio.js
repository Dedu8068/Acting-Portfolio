import { useState } from "react";

const tabs = [
  "Self Tapes",
  "Headshots",
  "Creative Portfolio",
  "Demo Reel",
  "Content Creation",
  "About"
];

export default function ActingPortfolio() {
  const [activeTab, setActiveTab] = useState("Self Tapes");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-green-950 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Daniel Edu – Acting Portfolio</h1>

      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 bg-green-900 rounded-2xl p-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm font-medium rounded-xl text-center hover:bg-green-800 transition-colors duration-200 ${
                activeTab === tab ? "bg-green-700" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 bg-green-950 border border-green-800 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">{activeTab}</h2>
          <p className="text-sm text-green-100">
            This is placeholder content for the <strong>{activeTab}</strong> section. Replace this with videos, images, descriptions, or embedded content related to your acting work.
          </p>
        </div>
      </div>
    </div>
  );
}
