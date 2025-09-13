"use client";
import { Suspense } from "react";
import ContactForm from "./ContactForm";

const ContactFormWrapper = () => {
  return (
    <Suspense
      fallback={
        <div className="wow fadeInUp rounded-lg bg-white px-6 py-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-dark-800 dark:shadow-gray-700 dark:hover:shadow-primary-500/10 sm:px-8 sm:py-10 md:p-10 lg:p-8 lg:px-8 lg:py-10 2xl:p-10 mt-6 sm:mt-8 lg:mt-10">
          <div className="animate-pulse">
            <div className="mb-6 sm:mb-8 h-6 sm:h-8 bg-gray-200 rounded dark:bg-gray-700 w-48"></div>
            <div className="mb-6 h-4 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`${i === 4 || i === 5 ? "col-span-full" : ""} ${
                    i === 5 ? "h-16" : "h-12"
                  } bg-gray-200 rounded dark:bg-gray-700`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <ContactForm />
    </Suspense>
  );
};

export default ContactFormWrapper;
