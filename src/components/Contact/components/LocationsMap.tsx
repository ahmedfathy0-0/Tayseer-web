import LocationCard from "./LocationCard";

const LocationsMap = () => {
  const locations = [
    {
      title: "Head Office",
      icon: "📍",
      address: "2 Ali Amin, Nasr City, Cairo",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.438410640025!2d31.328371999999998!3d30.052965399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f6f69fa5ebb%3A0x10a545f2cf37517c!2sTayseer%20International%20Chemicals%20Company!5e0!3m2!1sen!2seg!4v1757720496133!5m2!1sen!2seg",
      googleMapsUrl: "https://maps.app.goo.gl/gR1TBae229jgspDA6",
    },
    {
      title: "Factory",
      icon: "🏭",
      address: "El Robeky, Badr City",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.438410640025!2d31.328371999999998!3d30.052965399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f6f69fa5ebb%3A0x10a545f2cf37517c!2sTayseer%20International%20Chemicals%20Company!5e0!3m2!1sen!2seg!4v1757720496133!5m2!1sen!2seg",
      description: "Manufacturing Facility",
    },
  ];

  return (
    <div className="mt-16 md:mt-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-3xl lg:text-4xl">
            Visit Our Locations
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark sm:text-lg">
            Find us at our head office or factory location. We&apos;re here to
            serve you with quality chemical solutions.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              title={location.title}
              icon={location.icon}
              address={location.address}
              mapEmbedUrl={location.mapEmbedUrl}
              googleMapsUrl={location.googleMapsUrl}
              description={location.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsMap;
