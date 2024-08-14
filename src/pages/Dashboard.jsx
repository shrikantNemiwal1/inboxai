import { useEffect } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function OneBox() {
  const Navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let token = queryParams.get("token");
  if (!token) token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      Navigate("/login");
    }
    if (queryParams.get("token")) {
      localStorage.setItem("token", `Bearer ${token}`);
    }
  }, [token]);

  return (
    <div className="h-screen w-screen dark:bg-black bg-white md:pl-14">
      <SideBar />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default OneBox;
