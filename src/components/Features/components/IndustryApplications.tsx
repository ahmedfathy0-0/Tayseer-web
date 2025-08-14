import IndustryApplication from "./IndustryApplication";


const industryApplicationsData = [
  {
    id: 1,
    icon: "/images/features/water-treatment.svg",
    title: "Water Treatment",
    description:
      "Advanced chemical solutions for water purification and treatment processes",
  },
  {
    id: 2,
    icon: "/images/features/agriculture.svg",
    title: "Agriculture",
    description:
      "Fertilizers and agricultural chemicals for enhanced crop production",
  },
  {
    id: 3,
    icon: "/images/features/oil-gas.svg",
    title: "Oil & Gas",
    description:
      "Specialized chemicals for oil and gas extraction and processing",
  },
  {
    id: 4,
    icon: "/images/features/textile.svg",
    title: "Textile & Dyeing",
    description: "Dyeing agents and textile processing chemicals",
  },
  {
    id: 5,
    icon: "/images/features/paints.svg",
    title: "Paints & Coatings",
    description: "Chemical additives and pigments for paint manufacturing",
  },
  {
    id: 6,
    icon: "/images/features/cement.svg",
    title: "Cement",
    description: "Chemical admixtures for cement and concrete production",
  },
  {
    id: 7,
    icon: "/images/features/steel.svg",
    title: "Steel",
    description: "Metallurgical chemicals for steel production and processing",
  },
  {
    id: 8,
    icon: "/images/features/glass.svg",
    title: "Glass",
    description: "Chemical compounds for glass manufacturing and processing",
  },
  {
    id: 9,
    icon: "/images/features/refractories.svg",
    title: "Refractories",
    description: "High-temperature resistant chemicals for refractory applications",
  },
];

const IndustryApplications = () => {
  return (
    <div>
      <div className="mb-12 text-center">
        <h3 className="mb-4 text-3xl font-bold leading-snug text-forest-700 dark:text-primary-50 sm:text-4xl sm:leading-snug">
          Industry Applications
        </h3>
        <p className="text-base text-dark-600 dark:text-primary-200">
          The company&apos;s products can be used in various industries,
          including:
        </p>
      </div>

      <div className="-mx-4 flex flex-wrap">
        {industryApplicationsData.map((application) => (
          <IndustryApplication key={application.id} application={application} />
        ))}
      </div>
    </div>
  );
};

export default IndustryApplications;
     