import Image from "next/image";

interface IndustryApplicationProps {
  application: {
    id: number;
    icon: string | React.ReactNode;
    title: string;
    description: string;
  };
}

const IndustryApplication = ({ application }: IndustryApplicationProps) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="group relative mb-12 rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-dark-800 dark:shadow-gray-700 dark:hover:shadow-primary-500/10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-teal-500">
          {typeof application.icon === "string" ? (
            <Image
              src={application.icon}
              alt={application.title}
              width={35}
              height={35}
              className="filter brightness-0 invert"
            />
          ) : (
            application.icon
          )}
        </div>

        <h4 className="mb-4 text-xl font-semibold text-forest-700 dark:text-primary-50">
          {application.title}
        </h4>

        <p className="text-dark-600 dark:text-primary-200">
          {application.description}
        </p>

        {/* Hover Effect Background */}
        <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-primary-50 to-teal-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-primary-900/20 dark:to-teal-900/20"></div>
      </div>
    </div>
  );
};

export default IndustryApplication;
