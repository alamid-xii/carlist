import React from "react";

const PrimaryButton = ({ label, onClick, type = "primary" }) => {
  const getButtonStyles = () => {
    switch (type) {
      case "secondary":
        return "bg-gray-800 text-white px-4 py-4 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 font-semibold text-lg border-2 border-emerald-500";
      case "outline":
        return "border-2 border-emerald-500 text-emerald-500 bg-transparent px-4 py-4 rounded-lg hover:bg-emerald-500 hover:text-black transition-all duration-300 font-semibold text-lg";
      default:
        return "bg-gradient-to-r from-emerald-600 to-green-500 text-white px-4 py-2 rounded-lg hover:shadow-2xl hover:scale-105 hover:border-2 transition-all duration-300 font-semibold text-lg border-0";
    }
  };

  return (
    <button className={getButtonStyles()} onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;