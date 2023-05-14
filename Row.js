import React, { useState , useEffect } from 'react'
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}) {
  
  const [movies , setMovies] = useState([]);
  const [trailerUrl , setrailerURL] = useState("");
  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  },[fetchUrl]);
  const opts = {
    height : "390" , 
    width  : "100%" , 
    playervars : {

      autoplay : 1,
    },
  };
  const handleClick = (movies) =>{
    if(trailerUrl){
      setrailerURL('');
    }else{
      movieTrailer(movies?.name || "")
      .then(url => {
        const urlParams = new URLSearchParams (URL(url).search);
        setrailerURL(urlParams.get("v"));

      }).catch((error)=>{
        console.log(error)
      })
    }

  }
  console.table(movies);
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_poster'>
        {movies.map(movies=>(
          <img 
          key={movies.id}
          onClick={() =>handleClick(movies)}
          className={`rowposter ${isLargeRow && "rowposterlarge"}`}
          src={`${baseUrl}${isLargeRow ? movies.poster_path:movies.backdropPath}`} alt={movies.name}/>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}
  
export default Row