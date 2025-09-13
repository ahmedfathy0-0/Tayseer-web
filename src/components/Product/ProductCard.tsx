"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  certifications?: string[];
  applications?: string[];
  features?: string[];
  slug?: string;
  datasheets?: string[];
}

const ProductCard = ({
  title,
  description,
  image,
  certifications = [],
  applications = [],
  features = [],
  datasheets,
}: ProductCardProps) => {
  // Generate datasheet paths based on image name
  const getDatasheetPaths = () => {
    if (datasheets && datasheets.length > 0) {
      return datasheets;
    }

    // Extract image name without extension from image path
    const imageName = image
      .split("/")
      .pop()
      ?.replace(/\.[^/.]+$/, "");
    if (!imageName) return [];

    // Return both potential datasheet paths
    return [`/datasheets/${imageName}.pdf`, `/datasheets/${imageName}-2.pdf`];
  };

  // Handle multiple datasheet downloads
  const handleDatasheetDownload = async () => {
    const datasheetPaths = getDatasheetPaths();

    for (const path of datasheetPaths) {
      try {
        // Properly encode the URL for the fetch request
        const encodedPath = encodeURI(path);

        // Check if file exists before attempting download
        const response = await fetch(encodedPath, { method: "HEAD" });
        if (response.ok) {
          // Create download link with properly encoded href
          const link = document.createElement("a");
          link.href = encodedPath;
          link.download = path.split("/").pop() || "datasheet.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          // Add small delay between downloads
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      } catch (error) {
        console.log(`Datasheet not found: ${path}`, error);
      }
    }
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
      {/* Product Image */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Product Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          {/* Title */}
          <h3 className="mb-3 text-xl font-semibold text-dark dark:text-white">
            {title}
          </h3>

          {/* Description */}
          <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
            {description}
          </p>

          {/* Features Section */}
          {features.length > 0 && (
            <div className="mb-4">
              <h4 className="mb-2 text-sm font-semibold text-dark dark:text-white">
                Key Features:
              </h4>
              <ul className="space-y-1">
                {features.slice(0, 3).map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-xs text-body-color dark:text-body-color-dark"
                  >
                    <svg
                      className="mr-2 mt-0.5 h-3 w-3 flex-shrink-0 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Applications Section */}
          {applications.length > 0 && (
            <div className="mb-4">
              <h4 className="mb-2 text-sm font-semibold text-dark dark:text-white">
                Applications:
              </h4>
              <ul className="space-y-1">
                {applications.slice(0, 3).map((application, index) => (
                  <li
                    key={index}
                    className="flex items-start text-xs text-body-color dark:text-body-color-dark"
                  >
                    <svg
                      className="mr-2 mt-0.5 h-3 w-3 flex-shrink-0 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div className="mb-4">
              <h4 className="mb-2 text-sm font-semibold text-dark dark:text-white">
                Certifications:
              </h4>
              <div className="flex flex-wrap gap-1">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-primary px-2 py-1 text-xs text-white font-bold"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto justify-center">
          <button
            onClick={handleDatasheetDownload}
            className="flex items-center justify-center px-4 py-2 border border-primary hover:bg-primary/10 hover:border-primary/80
                text-background-dark-secondary dark:text-white text-[12px] font-medium rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Data Sheet
          </button>
          <Link
            href={`/contact?product=${encodeURIComponent(
              title
            )}&category=${encodeURIComponent(
              applications.length > 0 ? applications[0] : "General"
            )}&description=${encodeURIComponent(description)}`}
            className="flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary/90 text-white text-[12px] font-medium rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h4a2 2 0 002-2v-4m-6 4h.01M15 17h.01"
              />
            </svg>
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
