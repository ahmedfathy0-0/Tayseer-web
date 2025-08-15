import VideoPlayer from "@/components/Common/VideoPlayer";

const VideoSection = () => (
  <section className="py-12">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="mb-4 text-2xl font-bold text-forest-700 dark:text-primary-50">
        Get to Know Tayseer International Chemicals
      </h2>
      <p className="mb-8 text-dark-600 dark:text-primary-200">
        Watch our introduction video to learn more about our company, values,
        and mission.
      </p>
      <VideoPlayer
        src="/videos/about/company-intro.mp4"
        poster="/images/about/poster.png"
        alt="Company Introduction"
      />
    </div>
  </section>
);

export default VideoSection;
