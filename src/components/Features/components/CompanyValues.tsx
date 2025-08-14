import CompanyValue from "./CompanyValue";

const companyValuesData = [
  {
    id: 1,
    icon: "/images/features/success.svg",
    title: "Our Success",
    paragraph:
      "We succeed when our customers succeed. Understanding their needs is at the heart of everything we do.",
    type: "success",
  },
  {
    id: 2,
    icon: "/images/features/mission.svg",
    title: "Our Mission",
    paragraph:
      "We aim to provide chemical solutions for a diverse range of industries, starting from water treatment to fertilizers and commodities.",
    type: "mission",
  },
  {
    id: 3,
    icon: "/images/features/vision.svg",
    title: "Our Vision",
    paragraph:
      "We aim to increase our global expansion for providing solutions in commodities, water treatment chemicals, and fertilizers to reach 10,000 customers in 5 years.",
    type: "vision",
  },
];

const CompanyValues = () => {
  return (
    <div className="mb-16">
      <div className="-mx-4 flex flex-wrap">
        {companyValuesData.map((value) => (
          <CompanyValue key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
};

export default CompanyValues;
