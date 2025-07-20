"use client";
import React from "react";
import { ArrowLeft, Pencil } from "lucide-react";
import Link from "next/link";

const BankDetailsComponent = ({
  bankDetails,
  onEditClick,
  onBackToSettings,
}) => {
  // Use passed bankDetails prop, or default if not provided
  const displayBankDetails = bankDetails || {
    accountNumber: "1234567890",
    routingNumber: "021000021",
    bankName: "Atlantic Federal Bank",
    bankholderName: "John D. Harper",
    bankAddress: "101 Main Street, New York, NY 10001, USA",
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center">
      {" "}
      {/* Changed bg to white, text to gray-900 */}
      <div className="w-full rounded-lg p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            {/* The ArrowLeft icon was commented out in the original, keeping it that way unless explicitly requested */}
            {/* <button
              onClick={onBackToSettings}
              className="text-gray-700 hover:text-gray-900 transition-colors" // Adjusted for white background
            >
              <ArrowLeft className="w-6 h-6" />
            </button> */}
            <h2 className="text-2xl font-bold text-black">Bank Details</h2>{" "}
            {/* Changed text to black */}
          </div>
          <button
            onClick={onEditClick}
            className="bg-[#B92921] text-white px-4 py-2 rounded-full flex items-center space-x-2  transition-colors shadow-md"
          >
            <Pencil className="w-4 h-4" />
            <span>Edit Bank Details</span>
          </button>
        </div>

        {/* Bank Details Display */}
        <div className="space-y-6">
          {/* Account Number */}
          <div className="bg-gray-50 rounded-md px-4 py-3 border border-gray-200 shadow-sm">
            {" "}
            {/* Changed bg to gray-50, border to gray-200, shadow to sm */}
            <p className="text-xs text-gray-600 mb-1">Account Number</p>{" "}
            {/* Adjusted text color for readability */}
            <p className="text-lg text-black">
              {displayBankDetails.accountNumber}
            </p>{" "}
            {/* Changed text to black */}
          </div>

          {/* Routing Number */}
          <div className="bg-gray-50 rounded-md px-4 py-3 border border-gray-200 shadow-sm">
            {" "}
            {/* Changed bg to gray-50, border to gray-200, shadow to sm */}
            <p className="text-xs text-gray-600 mb-1">Routing Number</p>{" "}
            {/* Adjusted text color for readability */}
            <p className="text-lg text-black">
              {displayBankDetails.routingNumber}
            </p>{" "}
            {/* Changed text to black */}
          </div>

          {/* Bank Name */}
          <div className="bg-gray-50 rounded-md px-4 py-3 border border-gray-200 shadow-sm">
            {" "}
            {/* Changed bg to gray-50, border to gray-200, shadow to sm */}
            <p className="text-xs text-gray-600 mb-1">Bank Name</p>{" "}
            {/* Adjusted text color for readability */}
            <p className="text-lg text-black">
              {displayBankDetails.bankName}
            </p>{" "}
            {/* Changed text to black */}
          </div>

          {/* Bankholder Name */}
          <div className="bg-gray-50 rounded-md px-4 py-3 border border-gray-200 shadow-sm">
            {" "}
            {/* Changed bg to gray-50, border to gray-200, shadow to sm */}
            <p className="text-xs text-gray-600 mb-1">Bankholder Name</p>{" "}
            {/* Adjusted text color for readability */}
            <p className="text-lg text-black">
              {displayBankDetails.bankholderName}
            </p>{" "}
            {/* Changed text to black */}
          </div>

          {/* Bank Address */}
          <div className="bg-gray-50 rounded-md px-4 py-3 border border-gray-200 shadow-sm">
            {" "}
            {/* Changed bg to gray-50, border to gray-200, shadow to sm */}
            <p className="text-xs text-gray-600 mb-1">Bank Address</p>{" "}
            {/* Adjusted text color for readability */}
            <p className="text-lg text-black">
              {displayBankDetails.bankAddress}
            </p>{" "}
            {/* Changed text to black */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetailsComponent;
