const ContactForm = () => {
  return (
    <div
      className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-dark-800 dark:shadow-gray-700 dark:hover:shadow-primary-500/10 sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
      data-wow-delay=".2s"
    >
      <h3 className="mb-8 text-2xl font-semibold text-forest-700 dark:text-primary-50 md:text-[28px] md:leading-[1.42]">
        Send us a Message
      </h3>
      <form>
        <div className="mb-[22px]">
          <label
            htmlFor="fullName"
            className="mb-4 block text-sm text-dark-600 dark:text-primary-200"
          >
            Full Name*
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Your Full Name"
            className="w-full border-0 border-b border-gray-200 bg-transparent pb-3 text-forest-700 placeholder:text-dark-400 focus:border-primary-500 focus:outline-none dark:border-dark-600 dark:text-primary-50 dark:placeholder:text-primary-300 dark:focus:border-primary-400"
          />
        </div>
        <div className="mb-[22px]">
          <label
            htmlFor="email"
            className="mb-4 block text-sm text-dark-600 dark:text-primary-200"
          >
            Email*
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            className="w-full border-0 border-b border-gray-200 bg-transparent pb-3 text-forest-700 placeholder:text-dark-400 focus:border-primary-500 focus:outline-none dark:border-dark-600 dark:text-primary-50 dark:placeholder:text-primary-300 dark:focus:border-primary-400"
          />
        </div>
        <div className="mb-[22px]">
          <label
            htmlFor="phone"
            className="mb-4 block text-sm text-dark-600 dark:text-primary-200"
          >
            Phone*
          </label>
          <input
            type="text"
            name="phone"
            placeholder="+20 123 456 7890"
            className="w-full border-0 border-b border-gray-200 bg-transparent pb-3 text-forest-700 placeholder:text-dark-400 focus:border-primary-500 focus:outline-none dark:border-dark-600 dark:text-primary-50 dark:placeholder:text-primary-300 dark:focus:border-primary-400"
          />
        </div>
        <div className="mb-[30px]">
          <label
            htmlFor="message"
            className="mb-4 block text-sm text-dark-600 dark:text-primary-200"
          >
            Message*
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder="Type your message here..."
            className="w-full resize-none border-0 border-b border-gray-200 bg-transparent pb-3 text-forest-700 placeholder:text-dark-400 focus:border-primary-500 focus:outline-none dark:border-dark-600 dark:text-primary-50 dark:placeholder:text-primary-300 dark:focus:border-primary-400"
          ></textarea>
        </div>
        <div className="mb-0">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-primary-500 px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none dark:bg-primary-600 dark:hover:bg-primary-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
