import { useEffect, useState } from "react";
import axios from "axios";
import AllInbox from "./AllInbox";
import CenterPage from "./MiddleSection";
import RightSection from "./RightSection";
import LoadIcon from "../assets/icons/loading.svg?react";

function MainPage() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        <LoadIcon className="fill-sky-500" />
      </div>
    );
  }

  const loadMail = async (threadId) => {
    setSelectedThread(threadId);
  };

  return (
    <div className="bg-[#ECEFF3] dark:bg-black text-white pt-16 flex w-full  h-screen">
      <div className="w-full md:w-2/5 lg:w-1/4">
        <AllInbox
          data={datas}
          loadMail={loadMail}
          selectedThread={selectedThread}
        />
      </div>
      <div className=" md:w-3/5 md:block lg:w-2/4 ">
        <CenterPage
          selectedThread={selectedThread}
          setSelectedThread={setSelectedThread}
          data={datas}
        />
      </div>
      <div className="hidden lg:block lg:w-1/4">
        <RightSection />
      </div>
    </div>
  );
}

export default MainPage;
