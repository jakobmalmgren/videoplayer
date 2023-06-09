import {
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { HiArrowLeft, HiArrowRight, HiOutlineHome } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="flex  text-black justify-center my-1 items-center">
      <HiArrowLeft className="ml-2 text-slate-400" />
      <MdOutlineSmartDisplay className="text-xl mx-2" />
      <MdOutlineWatchLater className="text-xl mx-2" />
      <MdThumbUpOffAlt className="text-xl mx-2" />
      <div className=" rounded-full p-2 bg-[#4a544a] border-solid border border-black">
        <HiOutlineHome className="text-white text-4xl" />
      </div>
      <TbMusic className="text-xl mx-2" />
      <MdOutlineSportsVolleyball className="text-xl mx-2" />
      <TbDeviceGamepad2 className="text-xl mx-2" />
      <HiArrowRight className="mr-2 text-slate-400" />
    </div>
  );
}
