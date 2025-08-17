import Link from "next/link";

const FooterQuickLinks = () => {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-forest-700 dark:text-primary-50">
          Quick Links
        </h4>
        <ul>
          <li>
            <Link
              href="/"
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/articles"
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterQuickLinks;
