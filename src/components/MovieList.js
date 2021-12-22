import React, { useState} from "react";

import { Link } from "react-router-dom";
import Home from './Home'
import { Container } from "react-bootstrap";


const MovieList=()=>{
    // const [searching, setSearching] = useState(false);
    // const [message, setMessage] = useState(null);
    // const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([        {
        "Title": "Bond 25",
        "Year": "1977",
        "Genere":" Action,Adventure,Thriller",
        "Director":"Cary Joji Fukunaga",

        "imdbID": "tt0076759",
        "Type": "POST",
        "Starring":"Anna de Armas..",
        "Vote":"1",
        "Language":"Kannada",
        "Poster": "	https://th.bing.com/th/id/OIP.VveFcB6BxfZg0aY0INLmnQHaHa?pid=ImgDet&w=148&h=148&c=7"
    },
    {
        "Title": "The New Muttants",
        "Year": "1980",
        "Genere":"Action,Horrr,Scifi",
        "imdbID": "tt0080684",
        "Director":"josh Boone",
        "Language":"English",
        "Starring":"Anna de Armas..",
        "Type": "POST",
        "Vote":"2",

        "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "Genere":"Thriller,Scifi",
        "imdbID": "tt0086190",
        "Director":"josh Boone",
        "Starring":"Anna de Armas..",
        "Language":"Hindi",
        "Vote":"3",

        "Type": "POST",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }]);

    // const searchMovies = async(e) =>{
    //     e.preventDefault();
    //     setSearching(true);
    //     // const url= `http://www.omdbapi.com/?i=tt3896198&apikey=9d19a1dc`;
    //      try{
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setMessage(null);
    //         setMovies(data.Search);
    //         setSearching(false);
    //      }catch(err){
    //         setMessage('An unexpected error occured.')
    //         setSearching(false);
    //      }
    //     }
return (
<>
<Home/>

<div className="container mx-auto">
       
     <div class="container mx-auto">{movies.map(movie => ( 
        <div class="inline-block px-2 w-64 h-64 movie-co-section">
             <div class="rounded-lg overflow-hidden movielistsection shadow-xl my-8 py-4"key={movie.imdbID}>
                 <div class="vote-section">
                 <p><i class="fas fa-caret-up"></i>{movie.Vote}<i class="fas fa-caret-down"></i></p>
                 <span>Votes</span>
                     </div>
                 <div class="movie-poster">
              <img src={movie.Poster} alt="movieimage" class="w-full h-64"/>
              </div>
              <div class="p-4 content-movie">
                  <p class="font-medium title text-lg"><span class="font-normal text-base leadin-relaxed">{movie.Title}</span></p>
                  
                  <p class="font-medium text-lg">Genere: <span class="font-normal text-base leadin-relaxed">{movie.Genere}</span></p>
                  <p class="font-medium text-lg">Director: <span class="font-normal text-base">{movie.Director}</span></p>
                  <p class="font-medium text-lg">Starring: <span class="font-normal text-base leadin-relaxed">{movie.Starring}</span></p>
                  <p class="font-medium text-lg">Language: <span class="font-normal text-base leadin-relaxed">{movie.Language}</span></p>
                 
                   <p class="font-medium text-lg voted">137 views <span>Voted by {movie.Vote} People</span></p>
                  
                   </div>
                    </div>
                    <Link to="">Watch Trailer</Link>
                  </div> 
                ))}
            </div>
        </div>
        
    
</>


)

}
export default MovieList;