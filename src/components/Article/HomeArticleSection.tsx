import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleArticle";
import { Blog } from "@/types/blog";

interface HomeBlogSectionProps {
  posts: Blog[];
}

const HomeBlogSection = ({ posts }: HomeBlogSectionProps) => {
  return (
    <section className="pb-10 pt-20 bg-background-light-secondary dark:bg-dark-800 lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Blogs"
            title="Our Recent News"
            paragraph="Explore our insightful articles showcasing innovative and cost-effective chemical solutions tailored for diverse industries, with a strong focus on their crucial applications in water and wastewater treatment, sustainable agriculture, and various other sectors."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap">
          {posts.slice(0, 3).map((blog: Blog, i: number) => (
            <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
