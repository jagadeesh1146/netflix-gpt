
import React from "react";
import VideoList from "./VideoList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const { nowPlayingMovies, nowPopularMovies } = useSelector(
    (store) => store.movies
  );

  if (!nowPlayingMovies?.length && !nowPopularMovies?.length) {
    return <div className="text-white p-4">Loading...</div>;
  }

  return (
    <div className="bg-black px-9">
      <div className="-mt-32 relative z-30">
        <VideoList title="Now Playing" movies={nowPlayingMovies} />
        <VideoList title="Popular" movies={nowPopularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

