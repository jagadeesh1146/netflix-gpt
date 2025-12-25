import React from "react";
import { IMG_CDN } from "../utils/constants";

const VideoCard = ({ movie }) => {
  return (
    <div className="w-32 pr-4">
      <img
        alt="movie-poster"
        src={IMG_CDN + movie.poster_path}
      />
    </div>
  );
};

export default VideoCard;
