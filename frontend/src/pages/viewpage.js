import React, { useEffect, useState } from "react";
import '../styles/detailpage.css';
import axios from "axios";
import queryString from "query-string";
import { useNavigate } from 'react-router-dom'

function Viewpage() {

      const q = queryString.parse(window.location.search);
     const {movies} =q;
      console.log(movies);
      const [movie, setViewPage] = useState([])


      const getViewPage = async () => {

        axios({
            url: `http://localhost:5500/movies/${movies}`,
            method: 'get',
            headers: { 'Content-Type': 'application/JSON' }
        })
            .then(res => setViewPage(res.data.movieId[0]))
            .catch((err => console.log(err)))
  
     }

     useEffect(()=>{
        getViewPage()
     },[])


  return (
    <>
         <div className='container'>
                <div className='row'>
                    <div className='col-md-12 details position-absolute top-50 start-50 translate-middle'>
                        <h2>Title:{movie.name} </h2>
                            <img src={movie.imageUrl} className='side-img' alt='not found yet' ></img>
                                {console.log(movie)}
                        <div className='side-div'>
                            <h4>Movie Name: {movie.name} </h4>
                            <hr/>
                            <h3>Rating: {movie.rate} </h3><br/>
                            <h4>PRICE: N {movie.price} </h4><br/>
                            <h4>Type: {movie.type} </h4><br/>

                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default Viewpage
