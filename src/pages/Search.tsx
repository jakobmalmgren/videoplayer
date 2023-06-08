import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { HomePageVideos } from "../Types";
import SearchCard from "../components/SearchCard";
import { clearVideos } from "../store";
import { useNavigate } from "react-router-dom";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
export default function Search() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  // när ja söker o stor screen vill inte scrolla ner.
  // men när jag går ner ill mobile gör de de...o sen upp till
  // stor screen går de...konstigtt ..kolla! de enda kvar
  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === "") navigate("/");
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div className="flex " style={{ height: "92.5vh" }}>
        {videos.length ? (
          <div className="py-8 pl-1 flex flex-col gap-5 w-full">
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={1000}
              className="flex flex-wrap justify-center"
            >
              {videos.map((item: HomePageVideos) => {
                return (
                  <div className="my-5 w-96 flex">
                    <SearchCard data={item} key={item.videoId} />;
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
