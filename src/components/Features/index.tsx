import CompanyValues from "./components/CompanyValues";
import IndustryApplications from "./components/IndustryApplications";

const Features = () => {
  return (
    <section
      id="features"
      className="bg-white pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        {/* Company Values Section */}
        <CompanyValues />

        {/* Separator */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>

        {/* Industry Applications Section */}
        <IndustryApplications />
      </div>
    </section>
  );
};

export default Features;
