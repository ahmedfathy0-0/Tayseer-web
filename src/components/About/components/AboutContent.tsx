import Link from "next/link";

const AboutContent = () => {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="mb-12 max-w-[540px] lg:mb-0">
        <h2 className="mb-5 text-3xl font-bold leading-tight text-forest-700 dark:text-primary-50 sm:text-[40px] sm:leading-[1.2]">
          Leading Chemical Solutions Provider in Egypt
        </h2>
        <p className="mb-10 text-base leading-relaxed text-dark-600 dark:text-primary-200">
          Tayseer International Chemicals Company – TSC is a Saudi-Egyptian
          enterprise that branched from Saudi Al-Tayseer Company. Founded in
          2022, we specialize in providing innovative, cost-effective chemical
          solutions across multiple sectors.
          <br /> <br />
          Our expertise spans Water Treatment Chemicals, Fertilizers, and
          Commodities, serving industries with the highest quality standards and
          sustainable practices to meet growing market demands.
        </p>

        <Link
          href="/about"
          className="inline-flex items-center justify-center rounded-md bg-primary-500 hover:bg-primary-600 dark:bg-teal-500 dark:hover:bg-teal-600 px-7 py-3 text-center text-base font-medium text-white duration-300 transition-colors"
        >
          Learn More About Us
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
