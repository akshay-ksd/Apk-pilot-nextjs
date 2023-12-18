import React, { useState } from "react";

interface CustomSelectProps {
  options: string[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  selectedOption,
  onSelectOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onSelectOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="bg-gray-200 p-2 rounded-md cursor-pointer"
        onClick={toggleSelect}
      >
       <p className="text-xs"> {selectedOption}</p>
        <i
          className={`ml-2 fas fa-chevron-down ${
            isOpen ? "transform rotate-180" : ""
          }`}
        ></i>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute mt-2 py-2 w-48 bg-white border border-gray-300 rounded-md shadow-md`}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-xs"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelect;
