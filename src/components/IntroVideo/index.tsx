import VideoSection from "../IntroVideo/components/VideoSection";

const About = () => {
  return (
    <section
      id="intro"
      className="overflow-hidden py-16 px-4 bg-background-light dark:bg-dark-900"
    >
      <div className="max-w-3xl mx-auto">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full rounded-xl shadow-lg bg-white dark:bg-dark-800 p-6">
              <VideoSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
