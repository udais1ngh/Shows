import React, { useEffect, useState } from "react";
import { useContext } from "react";

const AppContext= React.createContext();

const AppProvider =({children})=>{
    const [isLoading,setIsLoading]=useState(true);
    const [movie,setMovie]=useState([]);





useEffect(()=>{
    const getMovies= async (url)=>{

        const get=  await fetch(`https://api.tvmaze.com/search/shows?q=all`);
        const res =await get.json();
            setIsLoading(false);
            setMovie(res)
       console.log(res);
    
    }
    getMovies();
},[])

    return <AppContext.Provider value={{isLoading,movie}}> {children}</AppContext.Provider>;
}

const useGlobalContext=()=>{
    return useContext(AppContext);
}
    
export {AppContext,AppProvider,useGlobalContext};
