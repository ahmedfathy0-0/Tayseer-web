interface LocationCardProps {
  title: string;
  icon: string;
  address: string;
  mapEmbedUrl: string;
  googleMapsUrl?: string;
  description?: string;
}

const LocationCard = ({
  title,
  icon,
  address,
  mapEmbedUrl,
  googleMapsUrl,
  description,
}: LocationCardProps) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark-900 dark:shadow-gray-700 dark:hover:shadow-primary-500/10">
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">
          {icon} {title}
        </h3>
        <p className="text-sm text-body-color dark:text-body-color-dark">
          {address}
        </p>
      </div>
      <div className="overflow-hidden rounded-lg">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-64 w-full sm:h-72"
          title={`${title} Location`}
        ></iframe>
      </div>
      <div className="mt-4">
        {googleMapsUrl ? (
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
          >
            Open in Google Maps
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        ) : (
          description && (
            <span className="text-sm text-body-color dark:text-body-color-dark">
              {description}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default LocationCard;
