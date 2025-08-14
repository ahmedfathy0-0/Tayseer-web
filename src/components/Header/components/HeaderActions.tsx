import ThemeToggler from "./ThemeToggler";
import MobileMenuToggler from "./MobileMenuToggler";

interface HeaderActionsProps {
  navbarOpen: boolean;
  navbarToggleHandler: () => void;
  sticky: boolean;
}

const HeaderActions = ({
  navbarOpen,
  navbarToggleHandler,
  sticky,
}: HeaderActionsProps) => {
  return (
    <div className="flex items-center gap-4 px-4">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <ThemeToggler sticky={sticky} />
        </div>
        <MobileMenuToggler
          navbarOpen={navbarOpen}
          navbarToggleHandler={navbarToggleHandler}
          sticky={sticky}
        />
      </div>
    </div>
  );
};

export default HeaderActions;
