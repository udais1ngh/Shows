import { NavLink, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import { Input } from '@chakra-ui/react'
const SingleShow = () => {
  const [style, setStyle] = useState("cont");
  const [style1, setStyle1] = useState("cont3");
  const [isBtn,setBtn]=useState("bn");
  const [isT,setT]=useState(false);

  const changeStyle = () => {
    console.log("you just clicked");
    setT(true);
    setStyle("cont2");
    setStyle1("cont4");
  };
  const closeForm=()=>{
    setStyle1("cont3");
    setStyle("cont");
    setT(false);
  }
  const API_URL=`https://api.tvmaze.com/lookup/shows`;

  const [isLoading,setIsLoading]=useState(true);
    const [movie,setMovie]=useState([]);
    
  const { id } = useParams();
  console.log(id);
  useEffect(()=>{
    const getMovies= async (url)=>{

        const get=  await fetch(url);
        const res =await get.json();
            setIsLoading(false);
            setMovie(res)
       console.log(res);
    
    }
    
    getMovies(`${API_URL}?thetvdb=${id}`);
},)
  

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
   
    <section className="movie-sections">
      <div className="movie-cards">
        <div>
        <figure className="imag">
          <img src={movie?.image?.original} alt="" />
        </figure>
        </div>
        
        <div className="card-contents">
        <div>
        <center><p className="title">Name-{movie?.name}</p></center>
          <center><p className="card-texts"><b><span>Language-</span></b>{movie?.language}</p></center>
          <center><p className="card-texts"><b><span>Premiered-</span></b>{movie?.premiered}</p></center>
          <center><p className="card-texts"><b><span>Generes-</span></b>{movie?.genres[0]}/{movie?.genres[1]}</p></center>
          <center><p className="card-texts"><b><span>IMDB Rating-</span></b>{movie?.externals?.imdb}</p></center>
          <center><p className="card-texts"><b><span>Summary-</span></b>{movie?.summary}</p></center>
          <center><p className="card-texts"><b><span>Status-</span></b>{movie?.status}</p></center>
          </div>
          
         <div className='navy'>
         <div className="frm">
         <div>
          <NavLink  to={"/"}><center><Button onClick={changeStyle} variant="outlined" style={{maxWidth: '120px', maxHeight: '10px', minWidth: '100px', minHeight: '45px'}}>Back</Button></center></NavLink>
         </div>
      <div className={(isT===true?isBtn:style)}>
         <center><Button onClick={changeStyle} variant="outlined" style={{maxWidth: '120px', maxHeight: '10px', minWidth: '100px', minHeight: '45px'}}>Book Now</Button></center>
         </div>
         </div>
         <div>
          <form  className={style1}>
            <div className="form">
              <ClearIcon onClick={closeForm}/>
            <Input placeholder="" value={movie?.name}  size='md' />
          <Input placeholder="" value={movie?.language}  size='md' />
          <Input placeholder="Your Email"  size='md' />
          <Input placeholder="Your Phone No."  size='md' />
            </div>
          
          <div>
          <Button variant="outlined" style={{maxWidth: '120px', maxHeight: '10px', minWidth: '100px', minHeight: '45px'}}>Submit</Button>
          </div>
          

          </form>
         
         </div>
      
         
          </div> 
        </div>
      </div>
     
    </section>
  );
};

export default SingleShow;

