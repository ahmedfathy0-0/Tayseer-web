import Image from "next/image";
import HeroDecorations from "./HeroDecorations";

const HeroImage = () => {
  return (
    <div className="w-full px-4">
      <div
        className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
        data-wow-delay=".25s"
      >
        <div className="mt-16">
          <Image
            src="/images/hero/hero-image.jpg"
            alt="Tayseer International Chemicals - Chemical Solutions"
            className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
            width={845}
            height={316}
            priority
          />
        </div>
        <HeroDecorations />
      </div>
    </div>
  );
};

export default HeroImage;
