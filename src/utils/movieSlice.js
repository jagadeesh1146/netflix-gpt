import {createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        nowPopularMovies:[],
        nowPlayingMovies :[],
        trailerVedio : null,
    },
    reducers :{
        addNowPlayingMovies:(state , action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state ,action)=>{
            state.nowPopularMovies=action.payload;

        },
        addTrailerVedio :(state,action)=>{
            state.trailerVedio=action.payload
        },
    }
})
export const {addNowPlayingMovies , addPopularMovies , addTrailerVedio} = movieSlice.actions;
export default movieSlice.reducer;