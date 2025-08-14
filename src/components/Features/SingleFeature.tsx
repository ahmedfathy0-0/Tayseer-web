import { Feature } from "@/types/feature";
import Link from "next/link";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
      <div
        className="wow fadeInUp group mb-12 rounded-xl p-6 transition-all duration-300 hover:bg-primary-50 dark:hover:bg-dark-700"
        data-wow-delay=".15s"
      >
        <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary-500 dark:bg-primary-600">
          <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary-500/20 duration-300 group-hover:rotate-45 dark:bg-primary-400/30"></span>
          {typeof icon === "string" ? (
            <Image
              src={icon}
              alt={title}
              width={35}
              height={35}
              className="filter brightness-0 invert"
            />
          ) : (
            icon
          )}
        </div>
        <h3 className="mb-3 text-xl font-bold text-forest-700 dark:text-primary-50">
          {title}
        </h3>
        <p className="mb-8 text-dark-600 dark:text-primary-200 lg:mb-11">
          {paragraph}
        </p>
        <Link
          href={btnLink}
          className="text-base font-medium text-forest-600 transition-colors duration-300 hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-400"
        >
          {btn}
        </Link>
      </div>
    </div>
  );
};

export default SingleFeature;
