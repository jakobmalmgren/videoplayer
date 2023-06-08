import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { TfiBell } from "react-icons/tfi";
import { FaRegKeyboard } from "react-icons/fa";
import Iconbar from "./IconBar";
import { TbGridDots } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearSearchTerm, clearVideos } from "../store";
import { changeSearchTerm } from "../store";
import { GiOldMicrophone } from "react-icons/gi";
import { GiVideoCamera } from "react-icons/gi";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };
  return (
    <nav>
      <div className="flex justify-between  items-center  px-4 h-14 bg-[#4a544a] ">
        <div className="flex gap-2 items-center text-2xl">
          <div>
            <RxHamburgerMenu />
          </div>
          <Link to="/">
            <div className="flex gap-1 items-center justify-center">
              <GiVideoCamera className="text-5xl text-600 text-black" />
              <span className="text-xl font-medium">PlayMe</span>
            </div>
          </Link>
        </div>
        <div className="flex">
          <div className="flex items-center justify-center gap-5">
            <div className="text-xl p-3 bg-zinc-900 rounded-full hidden sm:block border-solid border border-white">
              <GiOldMicrophone />
            </div>
          </div>
          <div className="flex gap-5 items-center text-xl">
            <CiVideoOn className="ml-8 hidden sm:block" />
            <TbGridDots className="hidden sm:block" />
            <div className="relative">
              <TfiBell className="hidden sm:block" />
              <span className="absolute bottom-2.5 left-2.5 text-xs bg-black rounded-full w-5 h-5  justify-center items-center flex hidden sm:flex ">
                4
              </span>
            </div>
          </div>
        </div>
      </div>

      <Iconbar />
      <div className="flex justify-center my-3">
        <form
          className="sm: w-10/12 flex rounded-full p-2.5 bg-zinc-900 max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="bg-zinc-900 flex items-center justify-center w-24 rounded-l-full">
            <CiSearch className="text-xl " />
          </div>
          <input
            type="text"
            className=" w-full bg-zinc-900 focus:outline-none border-none  "
            value={searchTerm}
            onChange={(e) => {
              dispatch(changeSearchTerm(e.target.value));
            }}
          />

          <div className=" flex w-40 justify-evenly">
            <button>
              <RxCross2
                onClick={() => {
                  dispatch(clearSearchTerm());
                }}
                className={`text-xl cursor-pointer  ${
                  !searchTerm ? "invisible" : "visible"
                }`}
              />
            </button>
            <button>
              <FaRegKeyboard className="text-xl" />
            </button>
            <button>
              <CiSearch className="text-xl " />
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
}
