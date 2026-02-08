import React from "react";

function Button({ label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 pb-4 font-semibold text-lg relative transition-colors
        ${
          active
            ? "text-black"
            : "text-gray-500 hover:text-gray-700"
        }
      `}
    >
      {label}

      {active && (
        <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></span>
      )}
    </button>
  );
}

export default Button;
