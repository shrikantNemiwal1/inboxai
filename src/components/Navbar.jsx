import ThemeToggle from "./ThemeToggle";
import ChevronDownIcon from "../assets/icons/chevron-down.svg?react";
import LogoIconLight1 from "../assets/icons/logo-light.svg?react";
import LogoIconDark1 from "../assets/icons/logo-dark.svg?react";

function TopBar() {
  return (
    <div className="h-16 w-screen bg-white  dark:bg-[#1F1F1F] fixed pr-4 md:px-10 text-[#5B5F66] dark:text-white top-0 flex justify-between items-center border-b-2 dark:border-[#343A40] border-[#E0E0E0]">
      <div className="flex gap-3 font-bold text-lg">
        <span className="block md:hidden">
          <LogoIconDark1 className="hidden dark:block" />
          <LogoIconLight1 className="dark:hidden" />
        </span>
        Onebox
      </div>

      <div className="md:pr-10 flex items-center">
        <ThemeToggle />
        <span className="flex items-center cursor-pointer px-3 py-1.5 rounded-md hover:bg-gray-500/25">
          Tim&apos;s Workspace <ChevronDownIcon className="ml-3" />
        </span>
      </div>
    </div>
  );
}

export default TopBar;
