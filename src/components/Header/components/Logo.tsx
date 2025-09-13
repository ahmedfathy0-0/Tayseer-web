import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LogoProps {
  sticky: boolean;
}

const Logo = ({ sticky }: LogoProps) => {
  const pathUrl = usePathname();
  const shouldUseDarkText = pathUrl !== "/" || sticky;
  const isHomePage = pathUrl === "/";

  // Use consistent padding logic: py-2 for sticky/non-home, py-5 for non-sticky home
  const shouldUseCompactPadding = !isHomePage || sticky;

  return (
    <div className="flex items-center gap-4 px-4">
      <Link
        href="/"
        className={`navbar-logo flex items-center ${
          shouldUseCompactPadding ? "py-2" : "py-5"
        } `}
      >
        <Image
          src="/images/logo/logo.png"
          alt="logo"
          width={isHomePage && !sticky ? 70 : 90}
          height={50}
          className="header-logo dark:hidden max-[420px]:w-16 max-[420px]:h-16"
        />
        <Image
          src="/images/logo/logo.png"
          alt="logo"
          width={isHomePage && !sticky ? 70 : 90}
          height={50}
          className="header-logo hidden dark:block max-[420px]:w-16 max-[420px]:h-16"
        />

        <div className="ml-3 flex flex-col">
            <h1
            className={`font-bold text-lg leading-tight ${
              shouldUseDarkText
              ? "text-forest-700 dark:text-primary-50"
              : "text-white"
            } text-[16px]  max-[460px]:text-[11px] max-[700px]:text-[14px]
            `}
            >
            Tayseer International Chemicals
            </h1>
          <span
            className={`text-sm font-medium tracking-wider ${
              shouldUseDarkText
                ? "text-primary-500 dark:text-teal-400"
                : "text-teal-300"
            } max-[420px]:text-[8px] max-[700px]:text-[10px] text-[12px]
            `}
          >
            TSC
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
