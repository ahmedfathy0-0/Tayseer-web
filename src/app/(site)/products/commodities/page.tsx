import ProductPage from "@/components/Product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commodities | Tayseer",
  description:
    "Discover Tayseer International Chemicals – TSC comprehensive commodities range. From our base in Egypt, we cater to a wide array of applications across various sectors, featuring key industrial materials.",
};

const Commodities = () => {
  const features = [
    {
      title: "Industrial Materials",
      description:
        "Key industrial materials including cement, ceramics, glass, and building materials to support various manufacturing and construction applications.",
    },
    {
      title: "Pharmaceutical & Chemical Commodities",
      description:
        "High-quality pharmaceutical raw materials and chemical commodities that meet stringent industry standards for both local and international markets.",
    },
    {
      title: "Fertilizers & Water Treatment",
      description:
        "Comprehensive range of fertilizer commodities and water treatment materials to support agricultural and industrial water management sectors.",
    },
  ];

  return (
    <ProductPage
      title="Commodities"
      description="Discover Tayseer International Chemicals – TSC comprehensive commodities range. From our base in Egypt, we cater to a wide array of applications across various sectors, featuring key industrial materials such as cement, ceramics, glass, pharmaceuticals, building materials, fertilizers, and water treatment, supplying quality commodities to meet the demands of both local and international markets."
      image="/images/products/commodities.jpg"
      imageAlt="Global Commodities"
      features={features}
      badges={["Egypt Based", "Multi-Sector", "Quality Commodities"]}
      tags={["commodities", "trading", "agricultural"]}
      featuresTitle="Our Commodity Solutions"
    />
  );
};

export default Commodities;
