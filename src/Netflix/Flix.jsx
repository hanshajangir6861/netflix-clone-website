import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Flix() {
    const [movie, setMovies] = useState([])


// useEffect(()=>{
//     const response= axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8125db8f67d23da1d30f6063b1b794b8")
//  setMovies(response.data.results)

// })
async function fetchData() {
    const response1 = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8125db8f67d23da1d30f6063b1b794b8"
    );
    setMovies(response1.data.results);
   
  }
  fetchData();












    return (

        <>

            <div className='movie' >

                {movie.map((movie, index) => {
                    return(
                    <div className="main" key={index}>
                        <img src={movie.image} alt="" />
                        <h3>{movie.title}</h3>
                    </div>
                    )
                })}

            </div>

        </>
    )
}

export default Flix