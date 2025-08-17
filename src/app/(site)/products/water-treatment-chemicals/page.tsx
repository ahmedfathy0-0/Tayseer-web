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
    />
  );
};

export default WaterTreatmentChemicals;
