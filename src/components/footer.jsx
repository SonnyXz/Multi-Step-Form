import { FaChevronRight } from "react-icons/fa";
export const Footer = ({ buttonName }) => {
  return (
    <button className="w-[416px] h-[44px] bg-black text-white rounded-md flex items-center justify-center gap-2">
      {buttonName}
      <FaChevronRight />
    </button>
  );
};
