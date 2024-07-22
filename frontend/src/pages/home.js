import React, { useEffect, useState } from "react";
import axios from "axios";
import navHook from "./nav";
import { useNavigate } from 'react-router-dom'
// importing components from react-router-dom package

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import './style.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from 'swiper/modules';
import{ setUpComingEvent,setMovies} from '../redux/actions/productAction'

const BASE_URL = process.env.REACT_APP_BASE_URL;
const  Home = ()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    let upcoming = useSelector((state) => state.allProducts.products);
    let movies = useSelector((state) => state.allMovies.movies);
   

    const getcomingEvent = async() => {

        axios({
            url: 'http://localhost:5500/recommend',
            method: 'get',
            headers: { 'Content-Type': 'application/JSON'}
        })
   
        .then (res=> dispatch(setUpComingEvent(res.data.recommend)))

        .catch((err => console.log(err)))
        
    }
    const getMovies = async() => {

        axios({
            url: 'http://localhost:5500/movies',
            method: 'get',
            headers: { 'Content-Type': 'application/JSON'}
        })
        .then( res => dispatch(setMovies(res.data.movies)))

        .catch((err => console.log(err)))
        
    }
  

   function selectBooking (ss) {
                navigate(`/detailpage?movies=${ss}`, {replace: true})
    }

    useEffect(() => {
        getcomingEvent();
        getMovies();
    }, [])


  return (
    <div className="my-5">
            <div className="container-fluid">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={5}
                        modules={[Navigation]}
                        navigation
                        className="mySwiper"
                    >
                        {upcoming.map((data, idx) => {
                            return<>
                            
                            <SwiperSlide>
                                <div className="card">
                                    <img src={data.imageUrl}  key={idx} className="img-fluid" alt="notfound" />
                                </div>
                            </SwiperSlide>
                            </>
                        })}
                    </Swiper>
                </div>

                <hr></hr>

            <div className="container">   
                    <h3>Recommended Movies</h3>
            </div>

            <div className='container-fluid'>
                <div className='row'>

                {movies.map((data, idx) => {
                            return<>
                            <div className=' col-sm-5 card' style={{marginRight: 0.7 + 'em', width:31+'em'}}>
                                <img class="card-img-top" src={data.imageUrl} alt="Card image cap" style={{ width:100+'%'}} ></img>
                                    <div class="card-body">
                                            <h5 class="card-text">Name: {data.name}</h5>
                                            <p class="card-text">Rating: {data.rate}</p>
                                            <button href="#" class="btn btn-primary"  onClick={() => selectBooking(data._id)}>Book</button>
                                    </div>
                            </div>
                            </>
                        })}
                </div>
            </div>

      
    </div>
  )
}

export default Home;
