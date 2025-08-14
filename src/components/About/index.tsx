import AboutContent from "./components/AboutContent";
import AboutImages from "./components/AboutImages";

const About = () => {
  return (
    <section
      id="about"
      className="bg-background-light-secondary dark:bg-dark-800 pb-8 pt-20 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <AboutContent />
            <AboutImages />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
