import LogoIconLight from "../assets/icons/logo-light.svg?react";
import LogoIconDark from "../assets/icons/logo-dark.svg?react";
import HomeIcon from "../assets/icons/home.svg?react";
import PersonSearchIcon from "../assets/icons/person-search.svg?react";
import EmailIcon from "../assets/icons/email.svg?react";
import CampaignsIcon from "../assets/icons/campaigns.svg?react";
import ListIcon from "../assets/icons/list.svg?react";
import BarChartIcon from "../assets/icons/bar-chart.svg?react";
import InboxIcon from "../assets/icons/inbox.svg?react";
import { useLocation, useNavigate } from "react-router-dom";

function SideBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="dark:bg-[#101113] bg-white overflow-y-scroll no-scrollbar md:h-screen md:w-16 w-screen h-16 flex flex-row md:flex-col justify-center md:justify-between items-center py-6 border-r-2 border-t-2 dark:border-[#343A40] border-[#E0E0E0] left-0 bottom-0 md:top-0 fixed z-10">
      <div className="rounded-xl hidden md:block">
        <LogoIconDark className="hidden dark:block" />
        <LogoIconLight className="dark:hidden" />
      </div>
      <div className="text-[#AEAEAE] text-2xl space-x-5 md:space-x-0 md:space-y-7 flex flex-row md:flex-col">
        <div
          className={`cursor-pointer p-1 ${
            pathname === "/home"
              ? "dark:bg-gray-600 bg-gray-200 rounded-lg "
              : "hover:bg-gray-100 fill-[#ffffff] rounded-lg dark:hover:bg-gray-800 group"
          }`}
          onClick={() => navigate("/home")}
        >
          <HomeIcon />
        </div>
        <div
          className={`cursor-pointer  p-1 ${
            pathname === "/search"
              ? "dark:bg-gray-600 bg-gray-200 rounded-lg"
              : "hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800"
          }`}
          onClick={() => navigate("/search")}
        >
          <PersonSearchIcon />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            pathname === "/email-accounts"
              ? "dark:bg-gray-600 bg-gray-200 rounded-lg"
              : "hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800"
          }`}
          onClick={() => navigate("/email-accounts")}
        >
          <EmailIcon />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            pathname === "/campaigns"
              ? "dark:bg-gray-600 bg-gray-200 rounded-lg"
              : "hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800"
          }`}
          onClick={() => navigate("/campaigns")}
        >
          <CampaignsIcon />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            pathname === "/lead-list"
              ? "dark:bg-gray-600 bg-gray-200 rounded-lg"
              : "hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800"
          }`}
          onClick={() => navigate("/lead-list")}
        >
          <ListIcon />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            pathname === "/onebox"
              ? "dark:bg-gray-600 bg-gray-200 rounded-lg"
              : "hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800"
          }`}
          onClick={() => navigate("/onebox")}
        >
          <InboxIcon />
        </div>
        <div
          className={`cursor-pointer p-1 ${
            pathname === "/analytics"
              ? "dark:bg-gray-600 bg-gray-200 rounded-lg"
              : "hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800"
          }`}
          onClick={() => navigate("/analytics")}
        >
          <BarChartIcon />
        </div>
      </div>
      <div className="text-white bg-sky-500 p-2 w-10 text-center rounded-full  hidden md:block">
        SN
      </div>
    </div>
  );
}

export default SideBar;
