import ProductPage from "@/components/Product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fertilizers | Tayseer",
  description:
    "Nourish your crops for optimal growth with Tayseer International Chemicals – TSC premium range of fertilizers. Developed with quality and effectiveness in mind, our fertilizers provide essential nutrients to support healthy plant development.",
};

const Fertilizers = () => {
  const features = [
    {
      title: "Essential Nutrients",
      description:
        "Our fertilizers provide essential nutrients including nitrogen, phosphorus, and potassium to support healthy plant development and maximize agricultural productivity.",
    },
    {
      title: "Quality & Effectiveness",
      description:
        "Developed with quality and effectiveness in mind, our premium fertilizers are designed to deliver superior results for crops in Egypt and international markets.",
    },
    {
      title: "Agricultural Productivity",
      description:
        "Maximize your agricultural productivity with our scientifically formulated fertilizers that promote optimal crop growth and enhanced yields.",
    },
  ];

  return (
    <ProductPage
      title="Fertilizers"
      description="Nourish your crops for optimal growth with Tayseer International Chemicals – TSC premium range of fertilizers. Developed with quality and effectiveness in mind, our fertilizers provide essential nutrients to support healthy plant development and maximize agricultural productivity in Egypt and international markets. Browse our product offerings to discover how we can help you achieve superior results."
      image="/images/products/fertilizers.jpg"
      imageAlt="Premium Fertilizers"
      features={features}
      badges={["Premium Quality", "Essential Nutrients", "Superior Results"]}
      tags={["fertilizers", "agriculture", "crops"]}
      featuresTitle="Our Fertilizer Solutions"
    />
  );
};

export default Fertilizers;
