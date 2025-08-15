import CompanyValues from "./components/CompanyValues";
import IndustryApplications from "./components/IndustryApplications";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-white pb-8 pt-20 dark:bg-dark-900 lg:pb-[70px] lg:pt-[120px]"
      >
        <div className="container">
          <CompanyValues />
        </div>
      </section>
      <section
        id="industry-applications"
        className="bg-background-light-secondary dark:bg-dark-800 lg:pb-[70px] lg:pt-[120px]"
      >
        <IndustryApplications />
      </section>
    </>
  );
};

export default Features;
