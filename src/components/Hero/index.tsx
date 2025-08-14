import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-dark pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <HeroContent />
            <HeroImage />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
