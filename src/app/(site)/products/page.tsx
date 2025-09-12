import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Tayseer International Chemicals - TSC",
  description:
    "Explore our comprehensive range of water treatment chemicals, fertilizers, and commodities. Quality products certified by international standards.",
  keywords: [
    "Water Treatment Chemicals",
    "Fertilizers",
    "Commodities",
    "Chemical Products",
    "TSC Products",
    "Industrial Chemicals",
    "Agriculture Solutions",
  ],
};

const productCategories = [
  {
    title: "Water Treatment Chemicals",
    description:
      "Comprehensive range of water treatment solutions including coagulants, flocculants, disinfectants, and specialty chemicals for municipal and industrial applications.",
    image: "/images/products/water-treatment.jpg",
    href: "/products/water-treatment-chemicals",
    features: [
      "Coagulants & Flocculants",
      "Disinfectants",
      "pH Adjusters",
      "Specialty Chemicals",
    ],
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Fertilizers",
    description:
      "High-quality fertilizers and agricultural chemicals designed to enhance crop yield and soil health for sustainable farming practices.",
    image: "/images/products/fertilizers.jpg",
    href: "/products/fertilizers",
    features: [
      "NPK Fertilizers",
      "Organic Solutions",
      "Micronutrients",
      "Soil Conditioners",
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Commodities",
    description:
      "Essential industrial commodities and raw materials for various manufacturing processes and industrial applications.",
    image: "/images/products/commodities.jpg",
    href: "/products/commodities",
    features: [
      "Industrial Salts",
      "Acids & Bases",
      "Raw Materials",
      "Specialty Compounds",
    ],
    color: "from-orange-500 to-red-600",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Breadcrumb pageName="Our Products" />

      <section className="pb-5 pt-5 dark:bg-dark">
        <div className="container">
          {/* Header Section */}
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="text-lg text-body-color dark:text-body-color-dark">
              Discover our comprehensive portfolio of high-quality chemicals and
              solutions, certified by international standards and trusted by
              industries worldwide.
            </p>
          </div>

          {/* Product Categories Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-800"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70`}
                  />
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Category Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="mb-6 text-sm text-body-color dark:text-body-color-dark">
                    {category.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold text-dark dark:text-white">
                      Key Products:
                    </h4>
                    <ul className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-body-color dark:text-body-color-dark"
                        >
                          <svg
                            className="mr-2 h-4 w-4 text-primary"
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

                  {/* CTA Button */}
                  <Link
                    href={category.href}
                    className="block w-full rounded-lg bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary/90"
                  >
                    Explore Products
                    <svg
                      className="ml-2 inline-block h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mx-auto mt-16 max-w-4xl rounded-lg bg-primary/5 p-8 text-center dark:bg-primary/10">
            <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white">
              Need Custom Solutions?
            </h2>
            <p className="mb-6 text-body-color dark:text-body-color-dark">
              Our team of experts can help you find the perfect chemical
              solution for your specific needs. Contact us for personalized
              recommendations and technical support.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-primary px-8 py-3 text-white transition-colors duration-200 hover:bg-primary/90"
              >
                Contact Our Experts
              </Link>
              <Link
                href="https://wa.me/message/YWOKGTSVIH4LJ1"
                className="rounded-lg border border-primary px-8 py-3 text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
