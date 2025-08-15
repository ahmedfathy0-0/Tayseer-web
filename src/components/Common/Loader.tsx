import React from "react";

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark-900 z-[9999]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-500 border-b-4 border-teal-500"></div>
  </div>
);

export default Loader;
