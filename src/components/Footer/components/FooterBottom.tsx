import Link from "next/link";

const FooterBottom = () => {
  return (
    <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-2/3 lg:w-1/2">
            <div className="my-1">
              <div className="-mx-3 flex items-center justify-center md:justify-start">
                <Link
                  href="#"
                  className="px-3 text-base text-dark-500 hover:text-primary-500 hover:underline dark:text-primary-300 dark:hover:text-teal-400"
                >
                  Privacy policy
                </Link>
                <Link
                  href="#"
                  className="px-3 text-base text-dark-500 hover:text-primary-500 hover:underline dark:text-primary-300 dark:hover:text-teal-400"
                >
                  Legal notice
                </Link>
                <Link
                  href="#"
                  className="px-3 text-base text-dark-500 hover:text-primary-500 hover:underline dark:text-primary-300 dark:hover:text-teal-400"
                >
                  Terms of service
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/3 lg:w-1/2">
            <div className="my-1 flex justify-center md:justify-end">
              <p className="text-base text-dark-600 dark:text-primary-300">
                © 2025 Tayseer International Chemicals - TSC. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
