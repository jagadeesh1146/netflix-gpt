import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVedio } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieVedioData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const json = await data.json();

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer =
      filteredData.length > 0 ? filteredData[0] : json.results[0];

    dispatch(addTrailerVedio(trailer));
  };

  useEffect(() => {
    if (movieId) movieVedioData();
  }, [movieId]); // ✔ important!
};

export default useMovieTrailer;
