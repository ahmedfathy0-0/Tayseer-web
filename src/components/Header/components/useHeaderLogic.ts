import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useHeaderLogic = () => {
  const pathUrl = usePathname();

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  // Determine if header should have solid background (non-home pages or sticky)
  const shouldHaveSolidBackground = pathUrl !== "/" || sticky;

  return {
    navbarOpen,
    navbarToggleHandler,
    sticky,
    openIndex,
    handleSubmenu,
    shouldHaveSolidBackground,
    pathUrl,
  };
};
