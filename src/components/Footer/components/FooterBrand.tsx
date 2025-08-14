import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const FooterBrand = () => {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
      <div className="mb-10 w-full">
        <Link href="/" className="mb-6 flex items-center">
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            width={150}
            height={100}
            className="max-w-full"
          />
          <div className="ml-3 flex flex-col">
            <h1 className="font-bold text-lg leading-tight text-forest-700 dark:text-primary-50">
              Tayseer International Chemicals
            </h1>
            <span className="text-sm font-medium tracking-wider text-primary-500 dark:text-teal-400">
              TSC
            </span>
          </div>
        </Link>
        <p className="mb-8 max-w-[270px] text-base text-dark-600 dark:text-primary-200">
          Tayseer International Chemicals Company – TSC provides innovative,
          cost-effective chemical solutions across water treatment, fertilizers,
          and commodities.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default FooterBrand;
