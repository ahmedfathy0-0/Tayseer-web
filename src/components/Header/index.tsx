"use client";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import HeaderActions from "./components/HeaderActions";
import { useHeaderLogic } from "./components/useHeaderLogic";

const Header = () => {
  const {
    navbarOpen,
    navbarToggleHandler,
    sticky,
    openIndex,
    handleSubmenu,
    shouldHaveSolidBackground,
  } = useHeaderLogic();

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center ${
          shouldHaveSolidBackground
            ? "shadow-nav fixed z-[999] border-b border-primary-200/20 bg-white/95 backdrop-blur-[5px] dark:border-dark-600/20 dark:bg-background-dark/95"
            : "absolute bg-gradient-dark"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <Logo sticky={sticky}/>

            <div className="flex items-center gap-4 px-4">
              <div className="flex items-center gap-8">
                <Navigation
                  navbarOpen={navbarOpen}
                  navbarToggleHandler={navbarToggleHandler}
                  sticky={sticky}
                  openIndex={openIndex}
                  handleSubmenu={handleSubmenu}
                />

                <HeaderActions
                  navbarOpen={navbarOpen}
                  navbarToggleHandler={navbarToggleHandler}
                  sticky={sticky}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
