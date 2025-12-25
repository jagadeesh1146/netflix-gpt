
import React from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ movies, title }) => {
  if (!movies?.length) return null;

  return (
    <div className="mb-8">
      <h1 className="text-3xl text-white ml-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((m) => (
            <VideoCard key={m.id} movie={m} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;

