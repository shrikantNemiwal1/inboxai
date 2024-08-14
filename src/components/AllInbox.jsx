import axios from "axios";
import ChevronDownIcon from "../assets/icons/chevron-down.svg?react";
import RefreshIcon from "../assets/icons/refresh.svg?react";
import SearchIcon from "../assets/icons/search.svg?react";
import SendIcon from "../assets/icons/send.svg?react";
import DotFillIcon from "../assets/icons/dot.svg?react";

function AllInbox({ data, loadMail, selectedThread }) {
  async function reloadHandler() {
    const token = localStorage.getItem("token");
    await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
      headers: {
        Authorization: token,
      },
    });
  }

  return (
    <div className="border-r-2 bg-[#FAFAFA] dark:bg-black dark:dark:border-[#33383F] border-[#E0E0E0]  h-full overflow-y-scroll no-scrollbar">
      <div className="px-4 pt-4 flex justify-between">
        <div className="px-4 ">
          <div className="text-2xl py-3 text-[#4285F4] font-semibold flex items-center">
            All Inbox(s){" "}
            <ChevronDownIcon className="ml-2 font-normal mt-1 cursor-pointer" />
          </div>
          <div className="dark:text-white text-black font-bold">
            {data.length}/25{" "}
            <span className="text-[#7F7F7F] font-normal">Inboxes selected</span>
          </div>
        </div>
        <div
          className="p-3 mt-3 dark:bg-[#25262B] bg-white border border-gray-200 dark:border-gray-800 mr-4 rounded-xl h-min cursor-pointer"
          onClick={reloadHandler}
        >
          <RefreshIcon className="text-black dark:text-white w-5 h-5" />
        </div>
      </div>

      <div className="my-4 px-8">
        <div className="relative">
          <input
            placeholder=" Search"
            className="w-full outline-none dark:bg-[#23272C] bg-[#F4F6F8] rounded-md p-1 pl-8 border dark:border-[#FFFFFF1A] border-[#DFE3E8]"
          />
          <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 " />
        </div>
        <div className="flex justify-between py-4">
          <div className="dark:text-white text-black">
            <span className="dark:bg-[#222426] bg-[#ECECEC] text-[#5C7CFA] px-2 pb-[4px] pt-[1px] rounded-3xl font-bold">
              {data?.length}
            </span>{" "}
            New Replies
          </div>
          <div className="flex items-center dark:text-white text-black font-bold">
            Newest <ChevronDownIcon className="ml-3 text-xl" />
          </div>
        </div>
      </div>

      <div>
        {data.map((email) => (
          <Mail
            key={email.id}
            fromEmail={email.fromEmail}
            subject={email.subject}
            emailData={email}
            threadId={email.threadId}
            loadMail={loadMail}
            selectedThread={selectedThread}
          />
        ))}
      </div>
    </div>
  );
}

function Mail({ fromEmail, subject, threadId, loadMail, selectedThread }) {
  const trimSubject = (subject, wordCount) => {
    const words = subject.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + " ...";
    }
    return subject;
  };
  const handleMailClick = () => {
    loadMail(threadId);
  };

  return (
    <div
      className={`mx-6 cursor-pointer box-border border-l-4  ${
        threadId === selectedThread ? " border-sky-500" : "border-transparent"
      }`}
      onClick={handleMailClick}
    >
      <div className="border-t-2 pl-4 py-5 dark:border-[#ffffff25] border-[#8b8b8b20]">
        <div className="flex justify-between">
          <div className="dark:text-white text-black text-lg font-normal text-ellipsis overflow-hidden whitespace-nowrap w-[90%]">
            {fromEmail}
          </div>
          <div className="dark:text-[#FCFCFC66] text-[#919EAB] font-thin w-20 text-center">
            Mar 7
          </div>
        </div>
        <div className="py-2 dark:text-[#E1E0E0] text-gray-600 text-sm mb-2 font-normal">
          {trimSubject(subject, 7)}
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="dark:bg-[#222426] bg-[#F0F0F0] pl-2 pr-4 pb-[1px] pt-[1px] rounded-2xl text-[#57E0A6] text-sm flex items-center">
            <DotFillIcon className="mr-1 text-lg" />
            <span className="pb-1">Interested</span>
          </div>
          <div className=" flex items-center dark:bg-[#222426] bg-[#F0F0F0] pl-2 pr-4 pb-[1px] pt-[2px] rounded-2xl dark:text-[#FFFFFF] text-black text-sm">
            <SendIcon className="mr-1 text-lg" />
            <span className="pb-1">Campaign Name</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllInbox;
