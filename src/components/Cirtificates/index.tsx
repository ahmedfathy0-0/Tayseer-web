import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const certificateImages = [
  "/images/certificates/certificate1.png",
  "/images/certificates/certificate2.png",
  "/images/certificates/certificate3.png",
  "/images/certificates/certificate4.png",
  "/images/certificates/certificate5.png",
];

const CertificatesSection = () => (
  <section className="pt-8 px-2 pb-8 bg-white  dark:bg-dark-900">
    <div className="mb-6">
      <SectionTitle
        subtitle="Certification & Approvals"
        title="Tayseer International Chemicals TSC approvals from KIWA, NSF National Research Centre and Ministry of Health & Population"
        paragraph="TSC Water Treatment Chemicals are certified and approved internationally by KWIA according to NSF/ANSI 60 and locally in Egypt by the National Research Centre and the Ministry of Health & Population."
        width="1000px"
        center
      />
    </div>
    <div className="max-w-6xl mx-auto">
      {/* Desktop/Tablet: 5 images in a row */}
      <div className="hidden sm:flex justify-center items-center gap-4">
        {certificateImages.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Certificate ${idx + 1}`}
            width={120}
            height={120}
            className="object-contain rounded shadow"
          />
        ))}
      </div>
      {/* Mobile: single combined image */}
      <div className="flex sm:hidden justify-center items-center">
        <Image
          src="/images/certificates/certificates.png"
          alt="Certificates"
          width={320}
          height={120}
          className="object-contain rounded shadow"
        />
      </div>
    </div>
  </section>
);

export default CertificatesSection;
