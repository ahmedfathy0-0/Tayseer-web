
interface VideoPlayerProps {
  src: string;
  poster: string;
  alt?: string;
  width?: number;
  height?: number;
  captionsSrc?: string;
  captionsLang?: string;
  captionsLabel?: string;
  className?: string;
}

const VideoPlayer = ({
  src,
  poster,
  alt = "Video",
  width = 640,
  height = 360,
  captionsSrc,
  captionsLang = "en",
  captionsLabel = "English",
  className = "",
}: VideoPlayerProps) => {

  return (
    <div className={`relative w-full aspect-video ${className}`}>
        <video
          width={width}
          height={height}
          controls
          preload="none"
          poster={poster}
          aria-label={alt}
          className="w-full h-full object-cover rounded"
        >
          <source src={src} type="video/mp4" />
          {captionsSrc && (
            <track
              src={captionsSrc}
              kind="subtitles"
              srcLang={captionsLang}
              label={captionsLabel}
            />
          )}
          Your browser does not support the video tag.
        </video>
    </div>
  );
};

export default VideoPlayer;
