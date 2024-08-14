import { useEffect, useState } from "react";
import axios from "axios";
import CustomMail from "./SendMailModal";
import DotFillIcon from "../assets/icons/dot.svg?react";
import DeletePopUp from "./DeletePopUp";
import LoadingIcon from "../assets/icons/loading.svg?react";
import LeftIcon from "../assets/icons/chevron-left.svg?react";
import ArrowDownLogo from "../assets/icons/arrow-down.svg?react";
import ReplyIcon from "../assets/icons/reply.svg?react";

const CenterPage = ({ selectedThread, setSelectedThread }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedMail, setSelectedMail] = useState([]);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setShowDelete(false);
    } catch (error) {
      console.error("Error deleting mail:", error);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "d" || event.key === "D") {
        setShowDelete(!showDelete);
        console.log("Pressed D");
      }

      if (event.key === "r" || event.key === "R") {
        setShowPopUp(!showPopUp);
        console.log("Pressed R");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [event]);

  useEffect(() => {
    const fetchMail = async () => {
      if (selectedThread) {
        setIsLoading(true);
        try {
          const token = localStorage.getItem("token");
          const res = await axios.get(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          setSelectedMail(res.data.data);
        } catch (error) {
          console.error("Error fetching mail:", error);
        }
        setIsLoading(false);
      } else {
        setSelectedMail([
          {
            id: 0,
            fromName: "",
            fromEmail: "jeanne@icloud.com",
            toName: "",
            toEmail: " lennon.j@mail.com",
            subject: "New Product Launch",
            body: "I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.y",
            sentAt: "2022-01-01T00:00:00.000Z",
          },
        ]);
      }
    };
    fetchMail();
  }, [selectedThread, showDelete]);

  return (
    <>
      {isLoading ? (
        <div className="h-full fixed md:static top-16 left-0 bg-white dark:bg-black z-30 w-full md:w-auto flex justify-center items-center">
          <LoadingIcon className="fill-sky-500" />
        </div>
      ) : selectedThread ? (
        <div className="overflow-y-scroll no-scrollbar h-full fixed md:static top-16 left-0 bg-white dark:bg-black z-10 w-full md:w-auto">
          <div className="border-b-2 dark:border-[#33383F] border-[#E0E0E0] w-full flex justify-between px-6 py-3 flex-wrap gap-2">
            <div className="flex">
              <button
                className="md:hidden"
                onClick={() => setSelectedThread(null)}
              >
                <LeftIcon className="mr-2" />
              </button>{" "}
              <div>
                <div className="dark:text-white text-black text-lg">
                  Orlando
                </div>
                <div className="dark:text-[#FFFFFF66] text-[#343A40B2] text-sm">
                  orladom@gmail.com
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex dark:bg-[#1F1F1F] bg-white border dark:border-[#343A40] items-center text-black dark:text-white rounded-md py-2 px-3 text-sm">
                <DotFillIcon className="text-yellow-500 text-xl" /> Meeting
                Completed <ArrowDownLogo className=" ml-2" />
              </div>
              <div className="dark:bg-[#1F1F1F] flex items-center text-black dark:text-white border bg-white dark:border-[#343A40] rounded-md py-2 px-3 text-sm">
                Move <ArrowDownLogo className=" ml-2" />
              </div>
              <div className="dark:bg-[#1F1F1F] border bg-white text-black dark:text-white  dark:border-[#343A40] rounded-md py-2 px-3 text-sm">
                ...
              </div>
            </div>
          </div>

          <div className="py-6 mx-8 relative flex justify-center items-center">
            <div className="h-[1px] w-full dark:bg-[#33383F] bg-[#E0E0E0]"></div>{" "}
            {/* Line */}
            <div className="absolute inset-0 flex justify-center items-center">
              {" "}
              <div className="dark:bg-[#171819] bg-[#E0E0E0]  px-4 py-1 text-xs text-black dark:text-white">
                {" "}
                Today
              </div>
            </div>
          </div>

          <div>
            {selectedMail.map((mail) => (
              <Mail key={mail.id} {...mail} />
            ))}
          </div>

          {/* <div className="py-6 mx-8 relative flex justify-center items-center">
            <div className="h-[1px] w-full bg-[#E0E0E0] dark:bg-[#33383F]"></div>{" "}
            <div className="absolute inset-0 flex justify-center items-center">
              {" "}
              <div className="dark:bg-[#171819] bg-[#E0E0E0] text-black dark:text-white px-4 py-1 text-xs flex items-center space-x-1">
                {" "}
                <MdOutlineExpand className="mr-3 text-sm text-[#AEAEAE]" /> View
                all <span className="text-blue-500"> 4 </span>
                <span>replies</span>
              </div>
            </div>
          </div> */}
          <div className="mx-8">
            {showPopUp && (
              <CustomMail
                threadId={selectedThread}
                threadData={selectedMail}
                onClose={() => setShowPopUp(false)}
              />
            )}
          </div>
          <div
            className="cursor-pointer flex items-center fixed bottom-0 ml-10 mb-10 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] rounded-md px-10 py-2"
            onClick={togglePopUp}
          >
            <ReplyIcon className="mr-2 text-xl" /> Reply
          </div>
          {showDelete && (
            <DeletePopUp
              onCancel={() => setShowDelete(false)}
              onDelete={handleDelete}
            />
          )}
        </div>
      ) : (
        <div className="hidden md:flex text-black dark:text-gray-500 items-center justify-center h-full">
          Select a thread to view mails
        </div>
      )}
    </>
  );
};

const Mail = ({ fromEmail, toEmail, subject, body }) => {
  return (
    <div className="dark:bg-[#141517] bg-white border dark:border-[#343A40] mx-8 rounded-md my-3">
      <div className="p-4">
        <div className="flex justify-between py-4">
          <div className="space-y-2">
            <div className="font-bold dark:text-white text-black ">
              {subject}
            </div>
            <div className="dark:text-[#AEAEAE] text-[#637381] text-sm">
              from: {fromEmail}
            </div>
            <div className="dark:text-[#AEAEAE] text-[#637381] text-sm">
              to: {toEmail}
            </div>
          </div>
          <div className="text-sm dark:text-[#7F7F7F] text-[#637381]">
            20 june 2022 : 9:16AM
          </div>
        </div>
        <div
          className="py-4 dark:text-[#E1E0E0] text-[#172B4D]"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  );
};

export default CenterPage;
