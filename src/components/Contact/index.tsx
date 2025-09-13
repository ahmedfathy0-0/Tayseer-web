import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import LocationsMap from "./components/LocationsMap";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full bg-white dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-gradient-to-b from-primary-50 to-transparent dark:from-dark-700 dark:to-transparent lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        {/* Contact Information and Form */}
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <ContactInfo />
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <ContactForm />
          </div>
        </div>

        {/* Google Maps Section */}
        <LocationsMap />
      </div>
    </section>
  );
};

export default Contact;
