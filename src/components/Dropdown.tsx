import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Bestsellers");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option : string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-[200px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-[13px] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[200px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              className={`block px-4 py-2 text-[13px] text-gray-700 w-full text-center ${
                selectedOption === "Bestsellers" ? "bg-[#FFCCD2] text-pink-600" : "hover:bg-gray-100"
              }`}
              onClick={() => selectOption("Bestsellers")}
            >
              Bestsellers
            </button>
            <button
              className={`block px-4 py-2 text-[13px] text-gray-700 w-full text-center ${
                selectedOption === "Popularity" ? "bg-[#FFCCD2] text-pink-600" : "hover:bg-gray-100"
              }`}
              onClick={() => selectOption("Popularity")}
            >
              Popularity
            </button>
            <button
              className={`block px-4 py-2 text-[13px] text-gray-700 w-full text-center ${
                selectedOption === "Price, Low to High" ? "bg-[#FFCCD2] text-pink-600" : "hover:bg-gray-100"
              }`}
              onClick={() => selectOption("Price, Low to High")}
            >
              Price, Low to High
            </button>
            <button
              className={`block px-4 py-2 text-[13px] text-gray-700 w-full text-center ${
                selectedOption === "Price, High to Low" ? "bg-[#FFCCD2] text-pink-600" : "hover:bg-gray-100"
              }`}
              onClick={() => selectOption("Price, High to Low")}
            >
              Price, High to Low
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
