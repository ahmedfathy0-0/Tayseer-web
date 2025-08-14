const FooterContact = () => {
  return (
    <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-forest-700 dark:text-primary-50">
          Contact Us
        </h4>
        <ul className="space-y-4">
          {/* Office Address */}
          <li className="flex items-start">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-dark-700 dark:text-primary-200 mr-3 mt-1 flex-shrink-0"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <div className="text-sm text-dark-600 dark:text-primary-300">
              <strong className="text-dark-700 dark:text-primary-200">
                Office:
              </strong>
              <br />2 Ali Amin, Nasr City – Cairo, Egypt
            </div>
          </li>

          {/* Factory Address */}
          <li className="flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-dark-700 dark:text-primary-200 mr-3 flex-shrink-0"
            >
              {/* Factory Building */}
              <path d="M2 20h20v2H2v-2z" />
              <path d="M4 18h4V8H4v10zm6 0h4v-8h-4v8zm6 0h4v-6h-4v6z" />
              {/* Smokestacks */}
              <rect x="5" y="4" width="1" height="4" />
              <rect x="11" y="6" width="1" height="2" />
              <rect x="17" y="8" width="1" height="2" />
              {/* Smoke */}
              <circle cx="5.5" cy="3" r="0.5" opacity="0.6" />
              <circle cx="5.8" cy="2.2" r="0.3" opacity="0.4" />
              <circle cx="11.5" cy="5" r="0.5" opacity="0.6" />
              <circle cx="11.8" cy="4.2" r="0.3" opacity="0.4" />
              <circle cx="17.5" cy="7" r="0.5" opacity="0.6" />
              <circle cx="17.8" cy="6.2" r="0.3" opacity="0.4" />
              {/* Windows */}
              <rect x="5" y="10" width="1" height="1" />
              <rect x="6.5" y="10" width="1" height="1" />
              <rect x="5" y="12" width="1" height="1" />
              <rect x="6.5" y="12" width="1" height="1" />
              <rect x="11" y="12" width="1" height="1" />
              <rect x="12.5" y="12" width="1" height="1" />
              <rect x="11" y="14" width="1" height="1" />
              <rect x="12.5" y="14" width="1" height="1" />
              <rect x="17" y="14" width="1" height="1" />
              <rect x="18.5" y="14" width="1" height="1" />
            </svg>
            <span className="text-sm text-dark-600 dark:text-primary-300">
              <strong className="text-dark-700 dark:text-primary-200">
                Factory:
              </strong>
              <span className="ml-1">
                El Robeky Acres 800 No. 165, Badr City – Cairo, Egypt
              </span>
            </span>
          </li>

          {/* Phone Numbers */}
          <li className="flex items-start">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-dark-700 dark:text-primary-200 mr-3 mt-1 flex-shrink-0"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <div className="text-sm text-dark-600 dark:text-primary-300">
              <a
                href="tel:+2223866483"
                className="block hover:text-primary-500 dark:hover:text-teal-300 transition-colors"
              >
                (+2) 02 2386 6483
              </a>
              <a
                href="tel:+201020078938"
                className="block hover:text-primary-500 dark:hover:text-teal-300 transition-colors"
              >
                (+2) 010 2007 8938
              </a>
            </div>
          </li>

          {/* Email */}
          <li className="flex items-start">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-dark-700 dark:text-primary-200 mr-3 mt-1 flex-shrink-0"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <div className="text-sm text-dark-600 dark:text-primary-300">
              <a
                href="mailto:websales@tayseerintl.com"
                className="hover:text-primary-500 dark:hover:text-teal-300 transition-colors break-all"
              >
                websales@tayseerintl.com
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterContact;
