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
      title: "Polyaluminum Chloride (TPP-100 PAC 18%)",
      description:
        "High-performance coagulant for effective drinking water and wastewater treatment applications.",
      image: "/images/products/pac.jpg",
      certifications: ["NSF", "KWA", "Ministry of Health - Egypt"],
      features: [
        "Low residual aluminium",
        "High recovery",
        "Low dose",
        "Low energy required",
        "High water quality",
        "Superior coagulation efficiency",
        "Wide pH range effectiveness",
        "Reduced sludge production",
        "Cost-effective treatment solution",
      ],
      applications: [
        "Drinking water production",
        "Pre- treatment of RO",
        "Swimming pool water treatment",
        "Waste water treatment",
      ],
      datasheets: [
        "/datasheets/TDS-TPP-100-PAC-18%.pdf",
        "/datasheets/MSDS-TPP-100-PAC-18%.pdf",
      ],
    },
    {
      title: "Ferric Chloride (TSC-FC 40%)",
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
      datasheets: ["/datasheets/TDS-FC.pdf", "/datasheets/MSDS-FC.pdf"],
    },
    {
      title: "TSC-CO-Polymer",
      description:
        "High-efficiency coagulant for enhanced water and wastewater treatment performance.",
      image: "/images/products/co-polymer.jpg",
      certifications: ["NSF"],
      features: [
        "Dual-function coagulant",
        "Improved settling rates",
        "Reduced chemical consumption",
        "Versatile application range",
      ],
      applications: [
        "Wastewater clarification",
        "Industrial water treatment",
        "Cooling tower water treatment",
      ],
      datasheets: ["/datasheets/TDS-CO-Polymer.pdf"],
    },
    {
      title: "Advanced PAC (ACH)",
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
        "High turbidity water treatment",
        "Direct filtration systems",
        "Advanced wastewater treatment",
      ],
      datasheets: ["/datasheets/PDS-TSC-Advanced-ACH.pdf"],
    },
    {
      title: "TSC-Ploy-Ferric-Chloride (PFC)",
      description:
        "High-performance flocculant for efficient solid-liquid separation in water treatment processes.",
      image: "/images/products/cationic-flocculants.jpg",
      certifications: ["NSF"],
      features: [
        "Effective at low temperatures",
        "Wide pH operating range",
        "Strong coagulation power",
        "Phosphorus removal capability",
        "Reduced chemical dosing",
      ],
      applications: [
        "Municipal wastewater treatment",
        "Industrial effluent treatment",
        "Phosphorus removal systems",
        "COD reduction",
        "Sludge conditioning",
      ],
      datasheets: ["/datasheets/TDS-cationic-polymer-TSC-PFC.pdf"],
    },
    {
      title: "TSC- PACS",
      description:
        "Specialized coagulant for targeted water treatment applications, delivering efficient turbidity removal and improved water quality.",
      image: "/images/products/pacs.jpg",
      certifications: ["NSF", "KWA"],
      features: [
        "Tailored coagulation solution",
        "Effective turbidity removal",
        "Optimized for specific water types",
        "Cost-effective treatment option",
      ],
      applications: [
        "Drinking water treatment",
        "Industrial water treatment",
        "Wastewater treatment",
        "Cooling tower water treatment",
      ],
      datasheets: ["/datasheets/TDS-PACS.pdf"],
    },
    {
      title: "TSC-CPAM-630",
      description:
        "High-performance anionic polyacrylamide for effective sludge dewatering and water treatment applications.",
      image: "/images/products/pam-630.jpg",
      certifications: ["NSF"],
      features: [
        "Medium-High molecular weight polymer",
        "Medium-High charge density",
        "Excellent bridging properties",
        "Fast settling characteristics",
        "Reduced chemical dosing",
      ],
      applications: [
        "Sludge dewatering",
        "Clarification processes",
        "Mining applications",
        "Paper manufacturing",
        "Wastewater treatment",
        "Oil and gas treatment",
      ],
      datasheets: ["/datasheets/TDS-anionic-polymer-TSC-PAM-630.pdf"],
    },
    {
      title: "TSC-APAM (TW-8120)",
      description:
        "Versatile flocculants designed to enhance solid-liquid separation in various water treatment processes.",
      image: "/images/products/polymer-flocculants.jpg",
      certifications: ["NSF"],
      features: [
        "Medium-High molecular weight polymers",
        "Medium-High charge density",
        "Excellent bridging properties",
        "Fast settling characteristics",
        "Reduced chemical dosing",
      ],
      applications: [
        "Sludge dewatering",
        "Clarification processes",
        "Mining applications",
        "Paper manufacturing",
        "wastewater treatment",
        "Oil and gas treatment",
      ],
      datasheets: ["/datasheets/TDS-polyacrylamide-TW-8120.pdf"],
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
      datasheets: ["/datasheets/aluminum-sulfate.pdf"],
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
      datasheets: [
        "/datasheets/activated-carbon.pdf",
        "/datasheets/activated-carbon-2.pdf",
      ],
    },
  ];

  return (
    <ProductPage
      title="Water Treatment Chemicals"
      description="Tayseer International Chemicals – TSC is a pioneer for major water treatment chemicals manufacturer and supplier in Egypt. We specialize in producing and supplying a wide range of water treatment chemicals, including superior coagulants and flocculants for water and wastewater treatment. Our premium chemicals are designed to deliver outstanding results, helping you achieve high water quality standards both locally in Egypt and internationally. Discover our water treatment chemicals products portfolio and benefit from our commitment to quality. we provide reliable solutions for municipal and industrial water treatment applications, technical support, exceptional customer service, and after-sales support."
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
