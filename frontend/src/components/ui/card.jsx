import React from "react";

const Card = ({ icon, title, description, onClick }) => {
  return (
    <div 
      className="bg-gray-900 border border-emerald-500/30 p-8 rounded-xl hover:border-emerald-500 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 text-emerald-500">
        {icon}
      </div>
      <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-500 transition-colors">
        {title}
      </h4>
      <p className="text-gray-400 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  );
};

export default Card;