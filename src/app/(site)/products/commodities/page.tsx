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

  const products = [
    {
      title: "Sulfuric Acid",
      description:
        "Technical and battery grade sulfuric acid for industrial applications",
      image: "/images/products/sulfuric-acid.jpg",
      applications: [
        "Battery manufacturing",
        "Metal processing",
        "Chemical synthesis",
      ],
      certifications: ["ISO Standards", "Industrial Grade"],
      datasheets: ["/datasheets/sulfuric-acid.pdf"],
    },
    {
      title: "Hydrochloric Acid",
      description:
        "High-purity hydrochloric acid for various industrial processes",
      image: "/images/products/hydrochloric-acid.jpg",
      applications: ["Metal pickling", "pH control", "Chemical processing"],
      certifications: ["Industrial Grade", "Technical Grade"],
      datasheets: ["/datasheets/hydrochloric-acid.pdf"],
    },
    {
      title: "Caustic Soda",
      description: "Sodium hydroxide solutions and flakes for industrial use",
      image: "/images/products/caustic-soda.jpg",
      applications: [
        "Soap manufacturing",
        "Textile processing",
        "Chemical production",
      ],
      certifications: ["Industrial Grade", "Food Grade"],
      datasheets: ["/datasheets/caustic-soda.pdf"],
    },
    {
      title: "Citric Acid",
      description: "Food and industrial grade citric acid",
      image: "/images/products/citric-acid.jpg",
      applications: ["Food & beverage", "Cleaning products", "Pharmaceutical"],
      certifications: ["Food Grade", "USP", "BP"],
      slug: "citric-acid",
      datasheets: [
        "/datasheets/citric-acid.pdf",
        "/datasheets/citric-acid-2.pdf",
      ],
    },
    {
      title: "Sodium Bisulfite",
      description:
        "Technical grade sodium bisulfite for industrial applications",
      image: "/images/products/sodium-bisulfite.jpg",
      applications: [
        "Water treatment",
        "Food preservation",
        "Textile processing",
      ],
      certifications: ["Food Grade", "Technical Grade"],
      datasheets: ["/datasheets/sodium-bisulfite.pdf"],
    },
    {
      title: "Sodium Metabisulfite",
      description: "High-purity metabisulfite for specialized applications",
      image: "/images/products/sodium-metabisulfite.jpg",
      applications: ["Food preservation", "Wine making", "Water treatment"],
      certifications: ["Food Grade", "Technical Grade"],
      datasheets: ["/datasheets/sodium-metabisulfite.pdf"],
    },
    {
      title: "Calcium Chloride",
      description:
        "Versatile calcium chloride for de-icing, dust control, and industrial uses",
      image: "/images/products/calcium-chloride.jpg",
      applications: [
        "De-icing roads",
        "Dust suppression",
        "Concrete acceleration",
      ],
      certifications: ["Industrial Grade", "Food Grade"],
      datasheets: ["/datasheets/calcium-chloride.pdf"],
    },
    {
      title: "Calcite (CaCO3) Powder",
      description:
        "High-quality calcite powder for industrial and agricultural applications",
      image: "/images/products/caco3-powder.jpg",
      applications: [
        "Construction materials",
        "Soil conditioning",
        "Plastic filler",
      ],
      certifications: ["Industrial Grade", "Agricultural Grade"],
      datasheets: ["/datasheets/caco3-powder.pdf"],
    },
    {
      title: "Calcite (CaCO3) Granules",
      description: "Durable calcite granules for various industrial uses",
      image: "/images/products/caco3-granules.jpg",
      applications: [
        "Water treatment",
        "Construction aggregates",
        "Soil amendment",
      ],
      certifications: ["Industrial Grade", "Agricultural Grade"],
      datasheets: ["/datasheets/caco3-granules.pdf"],
    },
    {
      title: "Aluminium Hydroxide (Al(OH)3)",
      description:
        "Versatile aluminium hydroxide for water treatment and industrial applications",
      image: "/images/products/al(oh)3.jpg",
      applications: [
        "Water purification",
        "Flame retardants",
        "Pharmaceuticals",
      ],
      certifications: ["NSF", "Industrial Grade"],
      datasheets: ["/datasheets/al(oh)3.pdf"],
    },
    {
      title: "Calcined Alumina (Al2O3)",
      description:
        "High-purity calcined alumina for advanced industrial applications",
      image: "/images/products/al2o3.jpg",
      applications: [
        "Abrasives",
        "Refractories",
        "Ceramics",
        "Catalyst support",
      ],
      certifications: ["Industrial Grade", "Technical Grade"],
      datasheets: ["/datasheets/al2o3.pdf"],
    },
    {
      title: "Iron Ore (Natural Yellow Iron Oxide)",
      description:
        "Natural yellow iron oxide for pigments and industrial applications",
      image: "/images/products/iron-ore.jpg",
      applications: ["Pigments", "Coatings", "Construction materials"],
      certifications: ["Industrial Grade", "Natural Pigment"],
      datasheets: ["/datasheets/iron-ore.pdf"],
    },
  ];

  return (
    <ProductPage
      title="Commodities"
      description="Discover Tayseer International Chemicals – TSC comprehensive commodities range. From our base in Egypt, we cater to a wide array of applications across various sectors, featuring key industrial materials such as cement, ceramics, glass, pharmaceuticals, building materials, fertilizers, and water treatment, supplying quality commodities to meet the demands of both local and international markets."
      image="/images/products/commodities.jpg"
      imageAlt="Global Commodities"
      features={features}
      Products={products}
      badges={["Egypt Based", "Multi-Sector", "Quality Commodities"]}
      tags={["commodities", "trading", "agricultural"]}
      featuresTitle="Our Commodity Solutions"
    />
  );
};

export default Commodities;
