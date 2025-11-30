import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VedioBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVedio = useSelector((store) => store.movies?.trailerVedio);

  if (!trailerVedio) return null;

  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVedio.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VedioBackground;
