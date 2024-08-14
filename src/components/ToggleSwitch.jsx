import LightModeIcon from "../assets/icons/light-mode.svg?react";
import DarkModeIcon from "../assets/icons/dark-mode.svg?react";

const ToggleSwitch = ({ value, onChange }) => {
  return (
    <div
      className={`flex flex-row-reverse items-center justify-evenly gap-[0.3rem] w-14 h-7 transition-all duration-[0.1s] ease-[ease-in] bg-[#e9eaec] cursor-pointer rounded-2xl border-2 border-solid border-[#dadee1] dark:flex-row dark:bg-transparent dark:border-[#343A40]`}
      onClick={onChange}
    >
      <span className="w-[1rem] h-[1rem] mx-0.5 bg-white rounded-2xl"></span>
      <span className="">{!value ? <DarkModeIcon /> : <LightModeIcon />}</span>
    </div>
  );
};

export default ToggleSwitch;
