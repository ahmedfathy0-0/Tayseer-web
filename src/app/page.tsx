import About from "@/components/About";
// import HomeBlogSection from "@/components/Blog/HomeBlogSection";
// import CallToAction from "@/components/CallToAction";
// import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
// import Contact from "@/components/Contact";
// import Faq from "@/components/Faq";
import Features from "@/components/Features";
// import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
// import Testimonials from "@/components/Testimonials";
// import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tayseer International Chemicals - TSC",
  description:
    "",
};

export default function Home() {
  // const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <About />
      <Features />
      <Team />
      {/* <Features />
      <About />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <Faq />
      <Team />
      <HomeBlogSection posts={posts} />
      <Contact />
      <Clients /> */}
    </main>
  );
}
