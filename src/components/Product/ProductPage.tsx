import SingleArticle from "@/components/Article/SingleArticle";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getPostsByTags } from "@/utils/markdown";
import Image from "next/image";

interface ProductFeature {
  title: string;
  description: string;
}

interface ProductPageProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features?: ProductFeature[];
  badges: string[];
  tags: string[];
  featuresTitle?: string;
}

const ProductPage = ({
  title,
  description,
  image,
  imageAlt,
  features = [],
  badges,
  tags,
  featuresTitle = "Our Solutions",
}: ProductPageProps) => {
  const relatedArticles = getPostsByTags(tags, [
    "title",
    "date",
    "excerpt",
    "coverImage",
    "slug",
    "tags",
  ]);

  return (
    <>
      <Breadcrumb pageName={title} />

      <section className="pb-10 pt-16 lg:pb-20 lg:pt-24">
        <div className="container mx-auto px-4">
          {/* Product Hero Section */}
          <div className="wow fadeInUp mb-12 lg:mb-16" data-wow-delay=".1s">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
              <div className="w-full lg:w-1/2">
                <h1 className="mb-4 text-2xl font-bold leading-tight text-dark dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  {title}
                </h1>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-dark-6 sm:text-lg">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {badges.map((badge, index) => (
                    <div
                      key={index}
                      className="rounded-lg bg-primary/10 px-3 py-2 sm:px-4"
                    >
                      <span className="text-xs font-semibold text-primary sm:text-sm">
                        {badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative mx-auto max-w-[500px]">
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={500}
                    height={400}
                    className="w-full rounded-lg shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Features */}
          {features.length > 0 && (
            <div className="wow fadeInUp mb-12 lg:mb-16" data-wow-delay=".2s">
              <h2 className="mb-6 text-center text-xl font-bold text-dark dark:text-white sm:text-2xl md:text-3xl lg:text-left">
                {featuresTitle}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:p-6"
                  >
                    <h3 className="mb-3 text-lg font-semibold text-dark dark:text-white sm:text-xl">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-body-color dark:text-dark-6 sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="wow fadeInUp" data-wow-delay=".3s">
              <h2 className="mb-6 text-center text-xl font-bold text-dark dark:text-white sm:text-2xl md:text-3xl lg:text-left">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.slice(0, 6).map((article, i) => (
                  <div key={i} className="h-full">
                    <SingleArticle blog={article} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductPage;
