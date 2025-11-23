import React from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
       const dispatch=useDispatch()
  const movies = async()=>{
    const data=  await fetch('https://api.themoviedb.org/3/discover/movie',API_OPTIONS)
    const json = await data.json();
    console.log(json.results)
     dispatch(addNowPlayingMovies(json.results))
   
  }
 
  useEffect(()=>{
    movies()
    
  },[])

}
export default useNowPlayingMovies;
 