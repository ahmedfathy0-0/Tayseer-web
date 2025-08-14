import Image from "next/image";

interface CompanyValueProps {
  value: {
    id: number;
    icon: string | React.ReactNode;
    title: string;
    paragraph: string;
    type: string;
  };
}

const CompanyValue = ({ value }: CompanyValueProps) => {
  const { icon, title, paragraph, type } = value;

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-primary-500 dark:bg-primary-600";
      case "mission":
        return "bg-forest-600 dark:bg-forest-700";
      case "vision":
        return "bg-teal-500 dark:bg-teal-600";
      default:
        return "bg-primary-500 dark:bg-primary-600";
    }
  };

  const getSpanBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-primary-500/20 dark:bg-primary-400/30";
      case "mission":
        return "bg-forest-600/20 dark:bg-forest-400/30";
      case "vision":
        return "bg-teal-500/20 dark:bg-teal-400/30";
      default:
        return "bg-primary-500/20 dark:bg-primary-400/30";
    }
  };

  return (
    <div className="w-full px-4 lg:w-1/3">
      <div
        className="wow fadeInUp group mb-12 text-center"
        data-wow-delay=".15s"
      >
        <div
          className={`relative z-10 mx-auto mb-8 flex h-[80px] w-[80px] items-center justify-center rounded-2xl ${getBackgroundColor()}`}
        >
          <span
            className={`absolute left-0 top-0 z-[-1] mb-8 flex h-[80px] w-[80px] rotate-[25deg] items-center justify-center rounded-2xl ${getSpanBackgroundColor()} duration-300 group-hover:rotate-45`}
          ></span>
          {typeof icon === "string" ? (
            <Image
              src={icon}
              alt={title}
              width={40}
              height={40}
              className="filter brightness-0 invert"
            />
          ) : (
            icon
          )}
        </div>
        <h3 className="mb-4 text-xl font-bold text-forest-700 dark:text-primary-50">
          {title}
        </h3>
        <p className="text-base text-dark-600 dark:text-primary-200 leading-relaxed">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default CompanyValue;
