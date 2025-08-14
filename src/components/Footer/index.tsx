import FooterBrand from "./components/FooterBrand";
import FooterAbout from "./components/FooterAbout";
import FooterFeatures from "./components/FooterFeatures";
import FooterProducts from "./components/FooterProducts";
import FooterContact from "./components/FooterContact";
import FooterBottom from "./components/FooterBottom";
import FooterShapes from "./components/FooterShapes";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-background-light-secondary dark:bg-dark-800 pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <FooterBrand />
          <FooterAbout />
          <FooterFeatures />
          <FooterProducts />
          <FooterContact />
        </div>
      </div>

      <FooterBottom />
      <FooterShapes />
    </footer>
  );
};

export default Footer;
