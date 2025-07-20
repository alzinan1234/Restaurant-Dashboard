"use client";

import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/outline";

export default function MetricCard({
  title,
  value,
  percentageChange,
  percentageDirection = "up",
  timePeriodData,
}) {
  const [selectedPeriod, setSelectedPeriod] = useState("January"); // Default value
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Determine icon based on percentageDirection
  const ChangeIcon =
    percentageDirection === "up" ? ChevronUpIcon : ChevronDownIcon;
  const changeColor =
    percentageDirection === "up" ? "text-green-500" : "text-red-500";
  const changeBg =
    percentageDirection === "up" ? "bg-green-500/10" : "bg-red-500/10";

  return (
    <div style={{ boxShadow: "0px 4px 14.7px 0px rgba(0, 0, 0, 0.25)" }} className="w-full h-full bg-white p-4 bg-opacity-10 rounded-lg flex flex-col justify-between shadow-md">
      {" "}
      {/* Changed bg to white, added shadow */}
      {/* Header with Title and Dropdown */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-black text-base font-medium font-['Roboto']">
          {" "}
          {/* Changed text to black */}
          {title}
        </h3>
        <div className="relative bg-[#B92921] text-white rounded-full">
          {" "}
          {/* Changed bg to gray-100 */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-1 px-2 py-1 bg-opacity-10 rounded-full text-white text-sm font-semibold font-['DM Sans']" // Changed text to black
          >
            <span>{selectedPeriod}</span>
            {isDropdownOpen ? (
              <ChevronUpIcon className="w-4 h-4 bg-gray-200 rounded-full text-[#B92921]" /> // Changed bg to gray-200, icon color to black
            ) : (
              <ChevronDownIcon className="w-4 h-4 bg-gray-200 rounded-full text-[#B92921]" /> // Changed bg to gray-200, icon color to black
            )}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              {" "}
              {/* Changed bg to white, added border */}
              {timePeriodData.map((period) => (
                <button
                  key={period}
                  onClick={() => {
                    setSelectedPeriod(period);
                    setIsDropdownOpen(false);
                    // In a real app, you'd trigger data fetching here
                    // onPeriodChange(period);
                  }}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 text-sm" // Changed text to black, hover bg to gray-100
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Value */}
      <div className="text-black text-4xl font-bold font-['Roboto'] mb-2">
        {" "}
        {/* Changed text to black */}
        {value.toLocaleString()}
      </div>
      {/* Percentage Change */}
      <div className="flex items-center gap-2">
        <div
          className={`flex items-center gap-1 px-1.5 py-0.5 ${changeBg} rounded-3xl`}
        >
          <ChangeIcon className={`w-3 h-3 ${changeColor}`} />
          <div
            className={`text-sm font-semibold font-['DM Sans'] ${changeColor}`}
          >
            {percentageChange}%
          </div>
        </div>
        <span className="text-gray-700 text-sm font-normal font-['Roboto']">
          From the last month
        </span>{" "}
        {/* Changed text to gray-700 */}
      </div>
    </div>
  );
}
