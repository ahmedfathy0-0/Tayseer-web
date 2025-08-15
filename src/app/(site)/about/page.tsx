import About from "@/components/About";
import Intro from "@/components/IntroVideo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Tayseer International Chemicals - TSC",
  description:
    "Learn more about Tayseer International Chemicals (TSC), our mission, values, certifications, and team. Discover why we are trusted for water treatment and industrial chemical solutions.",
  keywords: [
    "Tayseer International Chemicals",
    "TSC",
    "About TSC",
    "Water Treatment",
    "Industrial Chemicals",
    "Certifications",
    "Team",
    "KIWA",
    "NSF",
    "Egypt",
    "National Research Centre",
    "Ministry of Health",
  ],
  openGraph: {
    title: "About Us | Tayseer International Chemicals - TSC",
    description:
      "Discover Tayseer International Chemicals (TSC), our certifications, team, and commitment to quality in water treatment and industrial chemicals.",
    url: "https://your-domain.com/about",
    type: "website",
    images: [
      {
        url: "https://your-domain.com/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Tayseer International Chemicals Team and Certifications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Tayseer International Chemicals - TSC",
    description:
      "Learn about TSC, our team, certifications, and commitment to quality.",
    images: ["https://your-domain.com/images/og-about.jpg"],
  },
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <Intro />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
