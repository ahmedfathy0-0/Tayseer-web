import { usePathname } from "next/navigation";

interface MobileMenuTogglerProps {
  navbarOpen: boolean;
  navbarToggleHandler: () => void;
  sticky: boolean;
}

const MobileMenuToggler = ({
  navbarOpen,
  navbarToggleHandler,
  sticky,
}: MobileMenuTogglerProps) => {
  const pathUrl = usePathname();

  return (
    <button
      onClick={navbarToggleHandler}
      id="navbarToggler"
      aria-label="Mobile Menu"
      className="block rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
    >
      <span
        className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
          navbarOpen ? " top-[7px] rotate-45" : " "
        } ${pathUrl !== "/" && "!bg-forest-700 dark:!bg-primary-50"} ${
          pathUrl === "/" && sticky
            ? "bg-forest-700 dark:bg-primary-50"
            : "bg-white"
        }`}
      />
      <span
        className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
          navbarOpen ? "opacity-0 " : " "
        } ${pathUrl !== "/" && "!bg-forest-700 dark:!bg-primary-50"} ${
          pathUrl === "/" && sticky
            ? "bg-forest-700 dark:bg-primary-50"
            : "bg-white"
        }`}
      />
      <span
        className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
          navbarOpen ? " top-[-8px] -rotate-45" : " "
        } ${pathUrl !== "/" && "!bg-forest-700 dark:!bg-primary-50"} ${
          pathUrl === "/" && sticky
            ? "bg-forest-700 dark:bg-primary-50"
            : "bg-white"
        }`}
      />
    </button>
  );
};

export default MobileMenuToggler;
