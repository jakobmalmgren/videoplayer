import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import { BiLike, BiDislike } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import WatchCard from "../components/WatchCard";
export default function Watch() {
  const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );
  const recommendedVideos = useAppSelector(
    (state) => state.youtubeApp.recommendedVideos
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
      setShowMoreStatus(false);
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideos(id));
  }, [currentPlaying, dispatch, id]);

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-screen overflow-hidden text-black  ">
          <div className="flex w-full" style={{ height: "92.5vh" }}>
            <div className="flex flex-wrap justify-center overflow-auto w-full">
              <div>
                <div>
                  <div className=" flex justify-center mt-16 ">
                    <iframe
                      className=" sm:w-3/5 sm:h-96  "
                      height="270px"
                      width="270px"
                      src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="mt-5 w-10/12 m-0 m-auto ">
                    <p className="text-sm sm:text-xl text-center">
                      {currentPlaying.videoTitle}
                    </p>
                    <div className="flex flex-col mt-1 text-center">
                      <div className="text-sm text-gray-400">
                        <span className="after:content-['•'] after:mx-1">
                          {currentPlaying.videoViews} views
                        </span>
                        <span> {currentPlaying.videoAge} ago</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 uppercase justify-center text-xs ">
                        <div className="flex items-center gap-1 cursor-pointer">
                          <BiLike className="text-xl" />
                          <strong>{currentPlaying.videoLikes}</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <BiDislike className="text-xl" />
                          <strong>dislike</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <FaShare className="text-xl" />
                          <strong>share</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <HiScissors className="text-xl" />
                          <strong>clip</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <MdOutlinePlaylistAdd className="text-xl" />
                          <strong>save</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <BsThreeDots className="text-xl" />
                        </div>
                      </div>
                    </div>
                    <div className="break-all flex gap-4 flex-col border-solid border-gray-400 border-2 my-5 pb-3 border-l-transparent border-r-transparent">
                      <div className=" gap-5 mr-5 mt-4">
                        <div>
                          <img
                            src={currentPlaying.channelInfo.image}
                            alt=""
                            className="rounded-full h-12 w-12"
                          />
                        </div>
                        <div className="w-5/6">
                          <h5 className="text-sm">
                            <strong>{currentPlaying.channelInfo.name}</strong>
                          </h5>
                          <h6 className="text-gray-400 text-xs">
                            {currentPlaying.channelInfo.subscribers} subscribers
                          </h6>
                        </div>
                        <div>
                          <button className="uppercase bg-[#5f775f]  rounded-sm p-2 text-sm tracking-wider">
                            subscribe
                          </button>
                        </div>
                      </div>
                      <div
                        className={`${
                          !showMoreStatus ? "max-h-40 overflow-hidden" : ""
                        } text-sm w-11/12`}
                      >
                        <pre
                          style={{
                            fontFamily: `"Roboto", sans-serif`,
                          }}
                          className="whitespace-pre-wrap"
                        >
                          {currentPlaying.videoDescription}
                        </pre>
                      </div>
                      <div>
                        <button
                          className="uppercase text-sm cursor-pointer pl-4 "
                          onClick={() => setShowMoreStatus(!showMoreStatus)}
                        >
                          Show {showMoreStatus ? "less" : "more"}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3   ">
                      {getRecommendedVideos.length &&
                        recommendedVideos.map((item) => {
                          return <WatchCard data={item} key={item.videoId} />;
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
