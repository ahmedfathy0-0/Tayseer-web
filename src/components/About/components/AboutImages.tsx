import Image from "next/image";
import ExperienceCard from "./ExperienceCard";

const AboutImages = () => {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
        <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
          <div
            className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
          >
            <Image
              src="/images/about/about-image-01.jpg"
              alt="Tayseer International Chemicals facility"
              fill
              className="h-full w-full object-cover object-center rounded-lg"
            />
          </div>
        </div>

        <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
          <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
            <Image
              src="/images/about/about-image-02.jpg"
              alt="Chemical processing equipment"
              fill
              className="h-full w-full object-cover object-center rounded-lg"
            />
          </div>

          <ExperienceCard />
        </div>
      </div>
    </div>
  );
};

export default AboutImages;
