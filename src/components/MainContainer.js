import React from 'react'
import { useSelector } from 'react-redux'
import VedioName from './VedioName';
import VedioBackground from './VedioBackground';

const MainContainer = () => {

  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);

  // Handle first render (no data yet)
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[1];
  console.log(mainMovie)

  const { overview, title ,id} = mainMovie;

  return (
    <div>
      <VedioName title={title} overview={overview}/>
      <VedioBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
