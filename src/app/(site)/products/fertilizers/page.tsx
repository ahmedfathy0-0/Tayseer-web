import ProductPage from "@/components/Product";
import { Metadata } from "next";
import { title } from "process";

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

  const Products = [
    {
      title: "Potassium Sulfate (Powder)",
      description:
        "High-quality potassium sulfate fertilizer for optimal crop nutrition and soil health.",
      image: "/images/products/k2so4-powder.jpg",
      certifications: ["Agricultural Grade", "Water Soluble"],
      features: [
        "Rich source of potassium and sulfur",
        "Enhances crop yield and quality",
        "Improves soil fertility",
        "Low chloride content",
      ],
      applications: [
        "Suitable for a wide range of crops including fruits, vegetables, and cereals",
        "Ideal for use in both soil and foliar applications",
        "Compatible with various irrigation systems",
      ],
      datasheets: ["/datasheets/TDS-Potassium-Sulphate-Powder.pdf"],
    },
    {
      title: "Potassuim Sulphate (Granular)",
      description:
        "Premium granular potassium sulfate fertilizer for efficient nutrient delivery and improved crop performance.",
      image: "/images/products/k2so4-granular.jpg",
      certifications: ["Agricultural Grade", "Granular Form"],
      features: [
        "Granular form for easy application",
        "Provides essential potassium and sulfur",
        "Enhances plant growth and resilience",
        "Low chloride content for sensitive crops",
      ],
      applications: [
        "Ideal for a variety of crops including fruits, vegetables, and ornamentals",
        "Suitable for direct soil application or incorporation into fertilizers blends",
        "Effective in both conventional and precision agriculture practices",
      ],
      datasheets: ["/datasheets/k2so4-granular.pdf"],
    },
    {
      title: "Sulphur",
      description:
        "High-purity sulfur fertilizer for improved soil health and enhanced crop nutrition.",
      image: "/images/products/sulphur.jpg",
      certifications: ["Agricultural Grade", "Elemental Sulfur"],
      features: [
        "Essential nutrient for plant growth",
        "Improves soil structure and fertility",
        "Enhances nutrient uptake",
        "Supports disease resistance in crops",
      ],
      applications: [
        "Suitable for a wide range of crops including cereals, legumes, and oilseeds",
        "Can be applied directly to soil or used in fertilizer blends",
        "Effective in both acidic and alkaline soils",
      ],
      datasheets: ["/datasheets/sulphur.pdf"],
    },
    {
      title: "Magnesium Sulphate (MgSO4) ",
      description:
        "Premium magnesium sulfate fertilizer for optimal plant nutrition and improved crop yields.",
      image: "/images/products/mgso4.jpg",
      certifications: ["Agricultural Grade", "Water Soluble"],
      features: [
        "Rich source of magnesium and sulfur",
        "Enhances photosynthesis and chlorophyll production",
        "Improves crop yield and quality",
        "Water soluble for easy application",
      ],
      applications: [
        "Ideal for a variety of crops including fruits, vegetables, and cereals",
        "Suitable for soil and foliar applications",
        "Compatible with various irrigation systems",
      ],
      datasheets: ["/datasheets/mgso4.pdf", "/datasheets/mgso4-2.pdf"],
    },
    {
      title: "Sulphur bentonite 90",
      description:
        "High-quality sulfur bentonite fertilizer for enhanced soil health and effective nutrient delivery.",
      image: "/images/products/sulphur-bentonite-90.jpg",
      certifications: ["Agricultural Grade", "Slow Release"],
      features: [
        "Combines sulfur with bentonite clay for improved soil structure",
        "Provides a slow-release source of sulfur",
        "Enhances nutrient availability and uptake",
        "Supports healthy microbial activity in soil",
      ],
      applications: [
        "Suitable for a wide range of crops including fruits, vegetables, and ornamentals",
        "Can be applied directly to soil or used in fertilizer blends",
        "Effective in both acidic and alkaline soils",
      ],
      datasheets: ["/datasheets/TDS-SB.pdf"],
    },
  ];

  return (
    <ProductPage
      title="Fertilizers"
      description="Tayseer International Chemicals offers a comprehensive range of high-quality fertilizers designed to enhance crop productivity and soil health. Our fertilizer solutions include balanced NPK formulations, organic alternatives, essential micronutrients, and innovative soil conditioners. Each product is carefully formulated to meet the specific nutritional needs of various crops while promoting sustainable agricultural practices. Trust TSC for reliable fertilizer solutions that deliver consistent results and support your agricultural success."
      image="/images/products/fertilizers.jpg"
      imageAlt="Fertilizers"
      features={features}
      badges={["Agricultural Solutions", "Egypt Based", "Sustainable Farming"]}
      tags={["fertilizers"]}
      featuresTitle="Our Fertilizer Solutions"
      Products={Products}
    />
  );
};

export default Fertilizers;
