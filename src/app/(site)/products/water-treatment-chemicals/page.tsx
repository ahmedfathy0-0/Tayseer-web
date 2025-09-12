import ProductPage from "@/components/Product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Treatment Chemicals | Tayseer International Chemicals - Egypt",
  description:
    "Tayseer International Chemicals – TSC is a major water treatment chemicals manufacturer and supplier in Egypt. We specialize in producing and supplying superior coagulants and flocculants for water and wastewater treatment.",
  keywords:
    "water treatment chemicals, coagulants, flocculants, wastewater treatment, Egypt chemical manufacturer, TSC, water quality, disinfectants, pH adjusters",
  openGraph: {
    title: "Water Treatment Chemicals | Tayseer International Chemicals",
    description:
      "Major water treatment chemicals manufacturer in Egypt. Superior coagulants and flocculants for water and wastewater treatment.",
    images: [{ url: "/images/products/water-treatment.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Treatment Chemicals | Tayseer International Chemicals",
    description:
      "Major water treatment chemicals manufacturer in Egypt. Superior coagulants and flocculants for water and wastewater treatment.",
    images: ["/images/products/water-treatment.jpg"],
  },
};

const WaterTreatmentChemicals = () => {
  const features = [
    {
      title: "Coagulants & Flocculants",
      description:
        "Superior coagulants and flocculants for water and wastewater treatment, designed to deliver outstanding results in solid-liquid separation processes.",
    },
    {
      title: "Disinfectants",
      description:
        "Reliable disinfection solutions for safe and clean water supply systems, ensuring optimal water quality standards.",
    },
    {
      title: "pH Adjusters",
      description:
        "Precise pH control chemicals for optimal water treatment processes, helping maintain ideal water chemistry.",
    },
  ];

  const Products = [
    {
      title: "Polyaluminum Chloride (PAC)",
      description:
        "High-performance coagulant for effective water and wastewater treatment applications.",
      image: "/images/products/pac.jpg",
      certifications: ["NSF", "KWA", "Ministry of Health - Egypt"],
      features: [
        "Superior coagulation efficiency",
        "Wide pH range effectiveness",
        "Reduced sludge production",
        "Cost-effective treatment solution",
      ],
      applications: [
        "Municipal water treatment",
        "Industrial wastewater treatment",
        "Swimming pool water treatment",
        "Paper and pulp industry",
      ],
    },
    {
      title: "Polymer Flocculants",
      description:
        "Versatile flocculants designed to enhance solid-liquid separation in various water treatment processes.",
      image: "/images/products/polymer-flocculants.jpg",
      certifications: ["NSF"],
      features: [
        "High molecular weight polymers",
        "Excellent bridging properties",
        "Fast settling characteristics",
        "Various ionic charges available",
      ],
      applications: [
        "Sludge dewatering",
        "Clarification processes",
        "Mining applications",
        "Oil and gas treatment",
      ],
    },
    {
      title: "Aluminum Sulfate (Alum)",
      description:
        "Effective coagulant for water purification and wastewater treatment applications.",
      image: "/images/products/aluminum-sulfate.jpg",
      certifications: ["NSF", "Ministry of Health - Egypt"],
      features: [
        "Traditional reliable coagulant",
        "Effective turbidity removal",
        "pH adjustment capabilities",
        "Cost-effective solution",
      ],
      applications: [
        "Drinking water treatment",
        "Wastewater clarification",
        "Paper manufacturing",
        "Textile industry treatment",
      ],
    },
    {
      title: "Aluminum Chlorohydrate (ACH)",
      description:
        "Advanced coagulant for high-efficiency water and wastewater treatment.",
      image: "/images/products/ach.jpg",
      certifications: ["NSF", "KWA"],
      features: [
        "Pre-polymerized aluminum",
        "Lower alkalinity consumption",
        "Improved coagulation kinetics",
        "Reduced chemical dosing",
      ],
      applications: [
        "High-quality water production",
        "Industrial process water",
        "Cooling water treatment",
        "Advanced wastewater treatment",
      ],
    },
    {
      title: "Ferric Chloride",
      description:
        "Robust coagulant for industrial and municipal water treatment applications.",
      image: "/images/products/ferric-chloride.jpg",
      certifications: ["Ministry of Health - Egypt"],
      features: [
        "Effective at low temperatures",
        "Wide pH operating range",
        "Strong coagulation power",
        "Phosphorus removal capability",
      ],
      applications: [
        "Municipal wastewater treatment",
        "Industrial effluent treatment",
        "Phosphorus removal systems",
        "Sludge conditioning",
      ],
    },
    {
      title: "Activated Carbon",
      description:
        "High-quality activated carbon for effective removal of organic contaminants and impurities from water.",
      image: "/images/products/activated-carbon.jpg",
      certifications: ["NSF", "KWA"],
      features: [
        "High adsorption capacity",
        "Large surface area",
        "Various mesh sizes available",
        "Reactivation capability",
      ],
      applications: [
        "Drinking water purification",
        "Odor and taste removal",
        "Industrial water treatment",
        "Air purification systems",
      ],
    },
  ];

  return (
    <ProductPage
      title="Water Treatment Chemicals"
      description="Tayseer International Chemicals – TSC is a major water treatment chemicals manufacturer and supplier in Egypt. We specialize in producing and supplying a wide range of water treatment chemicals, including superior coagulants and flocculants for water and wastewater treatment. Our premium chemicals are designed to deliver outstanding results, helping you achieve high water quality standards both locally in Egypt and internationally. Discover our water treatment chemicals products portfolio and benefit from our commitment to quality."
      image="/images/products/water-treatment.jpg"
      imageAlt="Water Treatment Chemicals"
      features={features}
      badges={["Major Manufacturer", "Egypt Based", "International Quality"]}
      tags={["water-treatment"]}
      featuresTitle="Our Water Treatment Solutions"
      Products={Products}
    />
  );
};

export default WaterTreatmentChemicals;
