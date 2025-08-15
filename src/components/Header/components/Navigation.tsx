import Link from "next/link";
import { usePathname } from "next/navigation";
import menuData from "../menuData";

interface NavigationProps {
  navbarOpen: boolean;
  navbarToggleHandler: () => void;
  sticky: boolean;
  openIndex: number;
  handleSubmenu: (index: number) => void;
}

const Navigation = ({
  navbarOpen,
  navbarToggleHandler,
  sticky,
  openIndex,
  handleSubmenu,
}: NavigationProps) => {
  const pathUrl = usePathname();
  const isHome = pathUrl === "/";
  const isMobile = navbarOpen; // You may refine this if you have a better mobile detection
  const shouldUseWhiteText = isHome && !sticky && !isMobile; // Home, sticky, not mobile
  const shouldUseDarkTextMobile = isHome && !sticky && isMobile; // Home, sticky, mobile
  return (
    <nav
      id="navbarCollapse"
      className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-primary-200/30 bg-white px-6 py-4 duration-300 dark:border-dark-600/30 dark:bg-background-dark-secondary lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
        navbarOpen
          ? "visibility top-full opacity-100"
          : "invisible top-[120%] opacity-0"
      }`}
    >
      <ul className="block lg:flex lg:gap-x-8 xl:gap-x-12">
        {menuData.map((menuItem, index) =>
          menuItem.path ? (
            <li key={index} className="group relative">
              <Link
                onClick={navbarToggleHandler}
                scroll={false}
                href={menuItem.path}
                className={`ud-menu-scroll flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6
            ${
              isHome
                ? shouldUseWhiteText
                  ? "text-white dark:text-white"
                  : shouldUseDarkTextMobile
                  ? "text-forest-700 dark:text-primary-50"
                  : sticky
                  ? "text-forest-700 dark:text-primary-50"
                  : "text-primary-50 dark:text-primary-50 lg:text-white hover:text-teal-300"
                : // other pages
                  "text-forest-700 group-hover:text-primary-500 dark:text-primary-50 dark:group-hover:text-teal-400"
            }
            ${
              pathUrl === menuItem?.path &&
              "!text-primary-500 dark:!text-teal-400"
            }`}
              >
                {menuItem.title}
              </Link>
            </li>
          ) : (
            <li className="submenu-item group relative" key={index}>
              <button
                onClick={() => handleSubmenu(index)}
                className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6
            ${
              isHome
                ? shouldUseWhiteText
                  ? "text-white dark:text-white"
                  : shouldUseDarkTextMobile
                  ? "text-forest-700 dark:text-primary-50"
                  : sticky
                  ? "text-forest-700 dark:text-primary-50"
                  : "text-white"
                : "text-forest-700 group-hover:text-primary-500 dark:text-primary-50 dark:group-hover:text-teal-400"
            }`}
              >
                {menuItem.title}
                <span className="pl-1">
                  <svg
                    className={`duration-300 lg:group-hover:rotate-180`}
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-background-dark-secondary lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                  openIndex === index ? "!-left-[25px]" : "hidden"
                }`}
              >
                {menuItem?.submenu?.map((submenuItem, i) => (
                  <Link
                    href={submenuItem.path || "#"}
                    key={i}
                    onClick={navbarToggleHandler}
                    className={`block rounded px-4 py-[10px] text-sm
                ${
                  isHome
                    ? shouldUseWhiteText
                      ? "text-forest-700 dark:text-primary-50"
                      : "text-dark-600 hover:text-primary-500 dark:text-primary-200 dark:hover:text-teal-400"
                    : pathUrl === submenuItem.path
                    ? "text-primary-500 dark:text-teal-400"
                    : "text-dark-600 hover:text-primary-500 dark:text-primary-200 dark:hover:text-teal-400"
                }`}
                  >
                    {submenuItem.title}
                  </Link>
                ))}
              </div>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
