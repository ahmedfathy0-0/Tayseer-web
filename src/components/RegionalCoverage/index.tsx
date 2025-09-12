import React from "react";

const RegionalCoverage = () => {
  const regions = ["Cairo & Giza", "Alexandria", "Upper Egypt", "Delta Region"];

  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-dark-700">
      <h3 className="text-xl font-semibold text-dark dark:text-white mb-4 text-center">
        Regional Coverage
      </h3>
      <div className="space-y-3">
        {regions.map((region, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-body-color dark:text-body-color-dark font-medium">
              {region}
            </span>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-green-500 font-semibold">✓</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionalCoverage;
