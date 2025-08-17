import Link from "next/link";

const FooterProducts = () => {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-forest-700 dark:text-primary-50">
          Our Products
        </h4>
        <ul>
          <li>
            <Link
              href="/products/water-treatment-chemicals"
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              Water Treatment Chemicals
            </Link>
          </li>
          <li>
            <Link
              href="/products/fertilizers"
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              Fertilizers
            </Link>
          </li>
          <li>
            <Link
              href="/products/commodities"
              className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
            >
              Commodities
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterProducts;
