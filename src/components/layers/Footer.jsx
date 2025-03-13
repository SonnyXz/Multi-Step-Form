import { FaChevronRight } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
export const Footer = ({ stepCount, befHandle, aftHandle }) => {
  return (
    <div className="w-full flex items-center gap-2">
      {" "}
      {stepCount > 1 && (
        <button
          className="rounded-md h-[44px] w-[100px] border border-[#CBD5E1] text-black flex justify-evenly items-center"
          onClick={befHandle}
        >
          {" "}
          <MdKeyboardArrowLeft /> Back
        </button>
      )}
      <button
        className="w-[416px] h-[44px] bg-black text-white rounded-md flex items-center justify-center gap-2"
        onClick={aftHandle}
      >
        Continue {stepCount}/3
        <FaChevronRight />
      </button>
    </div>
  );
};
