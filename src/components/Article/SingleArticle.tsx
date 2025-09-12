import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, excerpt, date, slug, tags } = blog;

  return (
    <div className="wow fadeInUp group mb-10 h-full" data-wow-delay=".1s">
      <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="h-48 overflow-hidden rounded-t-lg">
          <Link
            href={`/articles/${slug}`}
            aria-label="blog cover"
            className="block h-full"
          >
            <Image
              src={coverImage!}
              alt="image"
              className="h-full w-full object-cover transition group-hover:scale-105"
              width={408}
              height={272}
            />
          </Link>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="mb-3 inline-block w-fit rounded bg-primary px-3 py-1 text-xs font-semibold text-white">
            {format(new Date(date), "dd MMM yyyy")}
          </span>
          <h3 className="mb-3 flex-1">
            <Link
              href={`/articles/${slug}`}
              className="line-clamp-2 text-lg font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary"
            >
              {title}
            </Link>
          </h3>
          <p className="line-clamp-3 text-sm text-body-color dark:text-dark-6 mb-3">
            {excerpt}
          </p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}         
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
