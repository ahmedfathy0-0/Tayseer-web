"use client";
import { useState, useRef, useEffect } from "react";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  name: string;
  id: string;
}

const Dropdown = ({
  options,
  value,
  onChange,
  placeholder,
  name,
  id,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border-0 border-b border-gray-200 bg-transparent pb-2 pr-8 text-left text-sm text-forest-700 focus:border-primary-500 focus:outline-none dark:border-dark-600 dark:text-primary-50 dark:focus:border-primary-400 sm:pb-3 sm:text-base cursor-pointer"
        id={id}
        name={name}
      >
        <span
          className={
            selectedOption
              ? "text-forest-700 dark:text-primary-50"
              : "text-dark-400 dark:text-primary-300"
          }
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
      </button>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <svg
          className={`h-4 w-4 text-gray-400 dark:text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-dark-800">
          <div className="max-h-60 overflow-auto py-1">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`w-full px-4 py-3 text-left text-sm transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  value === option.value
                    ? "bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-300"
                    : "text-gray-900 dark:text-gray-100"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
