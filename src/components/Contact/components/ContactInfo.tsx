const ContactInfo = () => {
  return (
    <div className="ud-contact-content-wrapper">
      <div className="ud-contact-title mb-8 lg:mb-16">
        <span className="mb-4 block text-sm font-medium text-forest-600 dark:text-primary-300 sm:text-base">
          CONTACT US
        </span>
        <h2 className="text-2xl font-semibold leading-tight text-forest-700 dark:text-primary-50 sm:text-3xl lg:text-4xl lg:leading-[1.14]">
          Let&#39;s talk about your problem.
        </h2>
      </div>

      {/* Head Office Section */}
      <div className="mb-8">
        <h3 className="mb-4 flex items-center text-lg font-semibold text-forest-700 dark:text-primary-50 sm:text-xl">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 flex-shrink-0 fill-current text-primary-500"
          >
            {/* Office Building */}
            <path d="M2 20h20v2H2v-2z" />
            <path d="M4 2h16v18H4V2z" />
            {/* Windows */}
            <rect x="6" y="5" width="2" height="2" fill="white" />
            <rect x="10" y="5" width="2" height="2" fill="white" />
            <rect x="14" y="5" width="2" height="2" fill="white" />
            <rect x="6" y="9" width="2" height="2" fill="white" />
            <rect x="10" y="9" width="2" height="2" fill="white" />
            <rect x="14" y="9" width="2" height="2" fill="white" />
            <rect x="6" y="13" width="2" height="2" fill="white" />
            <rect x="10" y="13" width="2" height="2" fill="white" />
            <rect x="14" y="13" width="2" height="2" fill="white" />
            {/* Door */}
            <rect x="9" y="16" width="6" height="4" fill="white" />
            <circle cx="13" cy="18" r="0.5" />
          </svg>
          Head Office
        </h3>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {/* Address */}
          <div className="flex items-start">
            <div className="mr-3 flex-shrink-0 text-primary-500 sm:mr-4">
              <svg
                width="20"
                height="24"
                viewBox="0 0 29 35"
                className="h-5 w-4 fill-current sm:h-6 sm:w-5"
              >
                <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
                <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="mb-1 text-sm font-medium text-forest-700 dark:text-primary-50 sm:text-base">
                Address
              </h4>
              <p className="text-xs text-dark-600 dark:text-primary-200 sm:text-sm">
                2 Ali Amin, Nasr City, Cairo, Egypt
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start">
            <div className="mr-3 flex-shrink-0 text-primary-500 sm:mr-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="mb-1 text-sm font-medium text-forest-700 dark:text-primary-50 sm:text-base">
                Phone
              </h4>
              <div className="space-y-1">
                <p className="text-xs text-dark-600 dark:text-primary-200 sm:text-sm">
                  (+2) 02-23866483
                </p>
                <p className="text-xs text-dark-600 dark:text-primary-200 sm:text-sm">
                  (+2) 010-20078938
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start">
            <div className="mr-3 flex-shrink-0 text-primary-500 sm:mr-4">
              <svg
                width="20"
                height="16"
                viewBox="0 0 34 25"
                className="h-4 w-5 fill-current sm:h-5 sm:w-6"
              >
                <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="mb-1 text-sm font-medium text-forest-700 dark:text-primary-50 sm:text-base">
                Email
              </h4>
              <p className="break-all text-xs text-dark-600 dark:text-primary-200 sm:text-sm">
                websales@tayseerintl.com
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start">
            <div className="mr-3 flex-shrink-0 text-primary-500 sm:mr-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="mb-1 text-sm font-medium text-forest-700 dark:text-primary-50 sm:text-base">
                Business Hours
              </h4>
              <div className="space-y-1">
                <p className="text-xs text-dark-600 dark:text-primary-200 sm:text-sm">
                  <span className="font-medium">Sun - Thu:</span> 9:00 AM - 5:00
                  PM
                </p>
                <p className="text-xs text-dark-600 dark:text-primary-200 sm:text-sm">
                  <span className="font-medium">Friday:</span> Closed
                </p>
                <p className="text-xs text-dark-600 dark:text-primary-200 sm:text-sm">
                  <span className="font-medium">Saturday:</span> 9:00 AM - 2:00
                  PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Production Facility Section */}
      <div className="mb-8">
        <h3 className="mb-4 flex items-center text-lg font-semibold text-forest-700 dark:text-primary-50 sm:text-xl">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 flex-shrink-0 fill-current text-primary-500"
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
          Production Facility
        </h3>
        <div className="flex items-start">
          <div className="mr-3 flex-shrink-0 text-primary-500 sm:mr-4">
            <svg
              width="20"
              height="24"
              viewBox="0 0 29 35"
              className="h-5 w-4 fill-current sm:h-6 sm:w-5"
            >
              <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
              <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="mb-1 text-sm font-medium text-forest-700 dark:text-primary-50 sm:text-base">
              Location
            </h4>
            <p className="text-xs text-dark-600 dark:text-primary-200 sm:text-sm">
              El Robeky, Badr City
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
