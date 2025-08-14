import ExperienceCardDecorations from "./ExperienceCardDecorations";

const ExperienceCard = () => {
  return (
    <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary-500 dark:bg-teal-600 px-6 py-12 rounded-lg sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
      <div className="text-center">
        <span className="block text-5xl font-extrabold text-white">03</span>
        <span className="block text-base font-semibold text-white">
          We have
        </span>
        <span className="block text-base font-medium text-white text-opacity-90">
          Years of experience
        </span>
      </div>
      <ExperienceCardDecorations />
    </div>
  );
};

export default ExperienceCard;
