import SingleArticle from "@/components/Article/SingleArticle";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles & Insights | Tayseer International Chemicals",
  description:
    "Explore our latest articles and insights about water treatment chemicals, fertilizers, commodities, and chemical industry trends from Tayseer International Chemicals - Egypt's leading chemical manufacturer.",
  keywords:
    "chemical articles, water treatment insights, fertilizer guides, commodity trends, chemical industry news, Egypt chemicals",
  openGraph: {
    title: "Articles & Insights | Tayseer International Chemicals",
    description:
      "Explore our latest articles and insights about water treatment chemicals, fertilizers, commodities, and chemical industry trends.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles & Insights | Tayseer International Chemicals",
    description:
      "Explore our latest articles and insights about water treatment chemicals, fertilizers, commodities, and chemical industry trends.",
  },
};

const Articles = () => {
  const articles = getAllPosts([
    "title",
    "date",
    "excerpt",
    "coverImage",
    "slug",
  ]);

  return (
    <>
      <Breadcrumb pageName="Article Grids" />

      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {articles.map((article, i) => (
              <div
                key={i}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mb-8"
              >
                <SingleArticle blog={article} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
