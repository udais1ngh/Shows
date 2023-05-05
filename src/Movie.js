import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";


const Movie = () => {
  const {movie}=useGlobalContext();
  return (
   <>
    <section className="movie-page">
<div className="grid grid-4-col">
{
  movie.map((curMovie)=>{
    
    const {show}=curMovie;
    
    return <NavLink className="ln" to={`movie/${show.externals.thetvdb}`} >
<div className="card">
<div className="card-info">
  <h2>
    {show.name}
  </h2>
<img src={show?.image?.original} alt={show.id}/>
<h2>
  Premiered-{show.premiered}
</h2>
</div>
 
</div>

    </NavLink>
      
    
     
    
  })
}
</div>
</section>



   </>
  )
}

export default Movie;