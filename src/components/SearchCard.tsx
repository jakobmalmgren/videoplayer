import { HomePageVideos } from "../Types";
import { Link } from "react-router-dom";

export default function SearchCard({ data }: { data: HomePageVideos }) {
  return (
    <div className="flex ">
      <div className=" text-black">
        <div className="relative bg-red-900 w-fit">
          <Link to={`/watch/${data.videoId}`}>
            <img src={data.videoThumbnail} className="t" alt="thumbnail" />
          </Link>
          <span className="absolute bottom-3 right-6 text-sm bg-gray-900 px-2 py-0.5 z-10 text-white">
            {data.videoDuration}
          </span>
        </div>

        <h3 className="max-w-2xl">
          <a href="#" className="line-clamp-2 text-black break-all">
            {data.videoTitle}
          </a>
        </h3>
        <div className="text-xs text-grap-400">
          <div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
        <div className="min-w-fit my-2">
          <a href="#" className="flex items-center gap-2 text-xs text-gray-400">
            <img
              src={data.channelInfo.image}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
            <span>{data.channelInfo.name}</span>
          </a>
        </div>
        <div className="max-w-2xl line-clamp-2 text-sm text-gray-400 break-all">
          <p>{data.videoDescription}</p>
        </div>
      </div>
    </div>
  );
}
