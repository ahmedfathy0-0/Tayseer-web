import Link from "next/link";

const FooterArticles = () => {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-forest-700 dark:text-primary-50">
          Articles
        </h4>
        <ul>
          <li>
            <Link
              href="/articles/polyacrylamide-pam-product"
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              Polyacrylamide
            </Link>
          </li>
          <li>
            <Link
              href="/articles/iron-ore-yellow-iron-oxide-product"
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              Iron Ore
            </Link>
          </li>
          <li>
            <Link
              href="/articles/co-polymer-coagulant-product"
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              Co-Polymer
            </Link>
          </li>
          <li>
            <Link
              href="/articles/pac-18-polyaluminium-chloride-product"
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              PAC 18
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterArticles;
