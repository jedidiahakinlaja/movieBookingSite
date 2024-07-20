import React, { useEffect, useState } from "react";
import '../styles/detailpage.css';
import axios from "axios";
import queryString from "query-string";

function Detailpage() {
       const q = queryString.parse(window.location.search);
        const {movies} =q;
        console.log(movies);
    const [movie, setMovies] = useState([])
    const getIndividualDetail = async () => {
        

        axios({
            url: `http://localhost:5500/movies/${movies}`,
            method: 'get',
            headers: { 'Content-Type': 'application/JSON' }
        })
            .then(res => setMovies(res.data.movieId[0]))
            .catch((err => console.log(err)))
            
    
     }
    useEffect(() => {
       getIndividualDetail();
      }, [])

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 details position-absolute top-50 start-50 translate-middle'>
                        <h2>Title:{movie.name} </h2>
                            <img src={movie.imageUrl} className='side-img' alt='not found yet' ></img>
                                {console.log(movie)}
                        <div className='side-div'>
                            <p>Movie Name: {movie.name} </p>
                            <p>Rating: {movie.rate} </p>
                        </div>
                        <div className='booknow'>
                           <button class='btn btn-primary'>Book Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Detailpage