import About from "@/components/About";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Cirtificates from "@/components/Cirtificates";
import HomeArticleSection from "@/components/Article/HomeArticleSection";

import { getAllPosts } from "@/utils/markdown";
import { Blog } from "@/types/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tayseer International Chemicals - TSC",
  description:
    "Welcome to Tayseer International Chemicals (TSC). Discover our water treatment and industrial chemical solutions, certifications, team, and company values.",
  keywords: [
    "Tayseer International Chemicals",
    "TSC",
    "Water Treatment",
    "Industrial Chemicals",
    "Certifications",
    "KIWA",
    "NSF",
    "Egypt",
    "National Research Centre",
    "Ministry of Health",
  ],
  openGraph: {
    title: "Tayseer International Chemicals - TSC",
    description:
      "Explore Tayseer International Chemicals (TSC), our products, certifications, and team.",
    url: "https://your-domain.com/",
    type: "website",
    images: [
      {
        url: "https://your-domain.com/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Tayseer International Chemicals Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tayseer International Chemicals - TSC",
    description:
      "Discover TSC's water treatment and industrial chemical solutions.",
    images: ["https://your-domain.com/images/og-home.jpg"],
  },
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <About />
      <Features />
      <Team />
      <HomeArticleSection posts={posts as Blog[]} />
      <Cirtificates />
      <Contact />
      {/* <Features />
      <About />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <Faq />
      <Team />
      <Clients /> */}
    </main>
  );
}
