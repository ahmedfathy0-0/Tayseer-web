"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Dropdown from "./Dropdown";

const ContactForm = () => {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    productCategory: "",
    message: "",
  });

  // Auto-fill form from URL parameters
  useEffect(() => {
    const product = searchParams.get("product");
    const category = searchParams.get("category");
    const description = searchParams.get("description");

    if (product) {
      // Determine product category based on product name or category
      let productCategory = "";
      const productLower = product.toLowerCase();
      const categoryLower = category?.toLowerCase() || "";

      if (productLower.includes("water") || categoryLower.includes("water")) {
        productCategory = "water-treatment-chemicals";
      } else if (
        productLower.includes("fertilizer") ||
        productLower.includes("sulfate") ||
        productLower.includes("potassium") ||
        productLower.includes("magnesium") ||
        categoryLower.includes("agriculture") ||
        productLower.includes("sulphur") ||
        productLower.includes("sulfur")
      ) {
        productCategory = "fertilizers-agriculture";
      } else if (
        productLower.includes("acid") ||
        productLower.includes("caustic") ||
        productLower.includes("citric") ||
        productLower.includes("sodium") ||
        productLower.includes("chloride") ||
        productLower.includes("hydroxide") ||
        categoryLower.includes("industrial") ||
        categoryLower.includes("chemical")
      ) {
        productCategory = "industrial-chemicals-acids";
      } else if (categoryLower.includes("commodities")) {
        productCategory = "industrial-chemicals-acids"; // Map commodities to industrial chemicals
      }

      console.log("Auto-fill debug:", {
        product,
        category,
        productLower,
        categoryLower,
        detectedProductCategory: productCategory,
      });

      // Auto-fill industry based on category/product
      let industry = "";
      if (categoryLower.includes("water")) {
        industry = "water-treatment";
      } else if (
        categoryLower.includes("agriculture") ||
        productCategory === "fertilizers-agriculture"
      ) {
        industry = "agriculture";
      } else if (
        categoryLower.includes("food") ||
        productLower.includes("citric")
      ) {
        industry = "food-beverage";
      } else if (categoryLower.includes("textile")) {
        industry = "textile";
      } else if (categoryLower.includes("pharmaceutical")) {
        industry = "pharmaceutical";
      } else if (
        categoryLower.includes("industrial") ||
        categoryLower.includes("manufacturing")
      ) {
        industry = "industrial-manufacturing";
      }

      // Build pre-filled message
      let preFilledMessage = `I am interested in ${product}.`;
      if (description) {
        preFilledMessage += `\n\nProduct Description: ${description}`;
      }
      if (category && category !== "General") {
        preFilledMessage += `\n\nApplication: ${category}`;
      }
      preFilledMessage += `\n\nPlease provide detailed information about:\n- Product specifications\n- Pricing and minimum order quantities\n- Delivery terms\n- Technical support and documentation\n\nThank you for your assistance.`;

      setFormData((prev) => ({
        ...prev,
        productCategory,
        industry,
        message: preFilledMessage,
      }));

      console.log("Form data updated:", {
        productCategory,
        industry,
        message: preFilledMessage.substring(0, 50) + "...",
      });
    }
  }, [searchParams]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="wow fadeInUp rounded-lg bg-white px-6 py-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-dark-800 dark:shadow-gray-700 dark:hover:shadow-primary-500/10 sm:px-8 sm:py-10 md:p-10 lg:p-8 lg:px-8 lg:py-10 2xl:p-10 mt-6 sm:mt-8 lg:mt-10"
      data-wow-delay=".2s"
    >
      <h3 className="mb-6 text-xl font-semibold text-forest-700 dark:text-primary-50 sm:mb-8 sm:text-2xl md:text-[28px] md:leading-[1.42]">
        Request a Quote
      </h3>
      <p className="mb-6 text-sm text-dark-600 dark:text-primary-200 sm:text-base">
        Fill out the form below and our team will respond within 24 hours with
        detailed product information and pricing.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
      >
        {/* Full Name */}
        <div className="mb-4 sm:mb-[22px]">
          <label
            htmlFor="fullName"
            className="mb-2 block text-xs text-dark-600 dark:text-primary-200 sm:mb-4 sm:text-sm"
          >
            Full Name*
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Your full name"
            required
            className="w-full border-0 border-b border-gray-200 bg-transparent pb-2 text-sm text-forest-700 placeholder:text-dark-400 focus:border-primary-500 focus:outline-none dark:border-dark-600 dark:text-primary-50 dark:placeholder:text-primary-300 dark:focus:border-primary-400 sm:pb-3 sm:text-base"
          />
        </div>

        {/* Company Name */}
        <div className="mb-4 sm:mb-[22px]">
          <label
            htmlFor="companyName"
            className="mb-2 block text-xs text-dark-600 dark:text-primary-200 sm:mb-4 sm:text-sm"
          >
            Company Name*
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Your company name"
            required
            className="w-full border-0 border-b border-gray-200 bg-transparent pb-2 text-sm text-forest-700 placeholder:text-dark-400 focus:border-primary-500 focus:outline-none dark:border-dark-600 dark:text-primary-50 dark:placeholder:text-primary-300 dark:focus:border-primary-400 sm:pb-3 sm:text-base"
          />
        </div>

        {/* Email */}
        <div className="mb-4 sm:mb-[22px]">
          <label
            htmlFor="email"
            className="mb-2 block text-xs text-dark-600 dark:text-primary-200 sm:mb-4 sm:text-sm"
          >
            Email Address*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@company.com"
            required
            className="w-full border-0 border-b border-gray-200 bg-transparent pb-2 text-sm text-forest-700 placeholder:text-dark-400 focus:border-primary-500 focus:outline-none dark:border-dark-600 dark:text-primary-50 dark:placeholder:text-primary-300 dark:focus:border-primary-400 sm:pb-3 sm:text-base"
          />
        </div>

        {/* Phone */}
        <div className="mb-4 sm:mb-[22px]">
          <label
            htmlFor="phone"
            className="mb-2 block text-xs text-dark-600 dark:text-primary-200 sm:mb-4 sm:text-sm"
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+20 xxx xxx xxxx"
            className="w-full border-0 border-b border-gray-200 bg-transparent pb-2 text-sm text-forest-700 placeholder:text-dark-400 focus:border-primary-500 focus:outline-none dark:border-dark-600 dark:text-primary-50 dark:placeholder:text-primary-300 dark:focus:border-primary-400 sm:pb-3 sm:text-base"
          />
        </div>

        {/* Industry */}
        <div className="mb-4 sm:mb-[22px]">
          <label
            htmlFor="industry"
            className="mb-2 block text-xs text-dark-600 dark:text-primary-200 sm:mb-4 sm:text-sm"
          >
            Industry
          </label>
          <Dropdown
            options={[
              { value: "agriculture", label: "Agriculture" },
              { value: "water-treatment", label: "Water Treatment" },
              {
                value: "industrial-manufacturing",
                label: "Industrial Manufacturing",
              },
              { value: "food-beverage", label: "Food & Beverage" },
              { value: "textile", label: "Textile" },
              { value: "pharmaceutical", label: "Pharmaceutical" },
              { value: "other", label: "Other" },
            ]}
            value={formData.industry}
            onChange={(value) => handleDropdownChange("industry", value)}
            placeholder="Select your industry"
            name="industry"
            id="industry"
          />
        </div>

        {/* Product Category */}
        <div className="mb-4 sm:mb-[22px]">
          <label
            htmlFor="productCategory"
            className="mb-2 block text-xs text-dark-600 dark:text-primary-200 sm:mb-4 sm:text-sm"
          >
            Product Category
          </label>
          <Dropdown
            options={[
              {
                value: "water-treatment-chemicals",
                label: "Water Treatment Chemicals",
              },
              {
                value: "industrial-chemicals-acids",
                label: "Industrial Chemicals & Acids",
              },
              {
                value: "fertilizers-agriculture",
                label: "Fertilizers & Agriculture",
              },
              {
                value: "specialty-chemicals",
                label: "Specialty Chemicals",
              },
              { value: "multiple-categories", label: "Multiple Categories" },
            ]}
            value={formData.productCategory}
            onChange={(value) => handleDropdownChange("productCategory", value)}
            placeholder="Select product category"
            name="productCategory"
            id="productCategory"
          />
        </div>

        {/* Message - Full Width */}
        <div className="col-span-full mb-6 sm:mb-[30px]">
          <label
            htmlFor="message"
            className="mb-2 block text-xs text-dark-600 dark:text-primary-200 sm:mb-4 sm:text-sm"
          >
            Message / Requirements*
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Please describe your chemical requirements, quantities needed, application details, and any specific questions you have"
            required
            className="w-full resize-none border-0 border-b border-gray-200 bg-transparent pb-2 text-sm text-forest-700 placeholder:text-dark-400 focus:border-primary-500 focus:outline-none dark:border-dark-600 dark:text-primary-50 dark:placeholder:text-primary-300 dark:focus:border-primary-400 sm:pb-3 sm:text-base"
          ></textarea>
        </div>

        {/* Submit Button - Full Width */}
        <div className="col-span-full mb-0">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-primary-500 px-6 py-2.5 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none dark:bg-primary-600 dark:hover:bg-primary-700 sm:w-auto sm:px-10 sm:py-3 sm:text-base"
          >
            Send Quote Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
