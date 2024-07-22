import React, { useEffect, useState } from "react";
import '../styles/detailpage.css';
import axios from "axios";
import queryString from "query-string";
import { useNavigate } from 'react-router-dom'

function Detailpage() {
        const navigate = useNavigate()
       const q = queryString.parse(window.location.search);
        const {movies} =q;
        console.log(movies);
        const [movie, setMovies] = useState([])


        const getIndividualDetail = async () => {  

        axios({
            url: `http://localhost:5500/movie/${movies}`,
            method: 'get',
            headers: { 'Content-Type': 'application/JSON' }
        })
            .then(res => setMovies(res.data.movieId[0]))

            // .then(res=>console.log(res))
            .catch((err => console.log(err)))
            
                
     }


     function selectBooking (ss) {
        navigate(`/bookingpage?movies=${ss}`, {replace: true})
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
                        <div className='side-div'>
                            <h4>Movie Name: {movie.name} </h4>
                            <hr/>
                            <h3>Rating: {movie.rate} </h3><br/>
                            <h4>PRICE: N {movie.price} </h4><br/>
                            <h4>Type: {movie.type} </h4><br/>

                        </div>
                        <div className='booknow'>
                           <button class='btn btn-primary' onClick={() => selectBooking(movie._id)}>NEXT</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Detailpage