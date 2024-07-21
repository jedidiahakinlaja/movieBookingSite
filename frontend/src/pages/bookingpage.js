import React, { useEffect, useState } from "react";
import '../styles/detailpage.css';
import axios from "axios";
import queryString from "query-string";

function BookingPage() {
       const q = queryString.parse(window.location.search);
        const {movies} =q;
        console.log(movies);
        const [movie, setMovies] = useState([])
        const [tim, setTim]=useState([])
        const [time,setTime]=useState([])
        const [handTime, setHandleTime]=useState([])
        const [handSeat, setHandSeat]=useState([])
    const getIndividualDetail = async () => {
        
        
        axios({
            url: `http://localhost:5500/movies/${movies}`,
            method: 'get',
            headers: { 'Content-Type': 'application/JSON' }
        })
            .then(
                res => setMovies(res.data.movieId[0]),
                
           )
            .catch((err => console.log(err)))
            
     }


     const getIndividualDetail2 = async () => {
        
        
        axios({
            url: `http://localhost:5500/movies/${movies}`,
            method: 'get',
            headers: { 'Content-Type': 'application/JSON' }
        })
           .then(
            res=> setTim(res.data.movieId[0].timing)
            
       )
            .catch((err => console.log(err)))   
    
       }

       function handleTimimg (event){

             setHandleTime(event.target.value);
       }

       function handleSeat (event){
            setHandSeat(event.target.value)
       }


       const postDetails= async()=>{
            const calprice = movie.price * handSeat
        const filterObj = {
          sendId:movie._id,
          timeChosen:handTime,
          QR:movie.qr,
          TotalPrice:calprice
        }
        console.log(filterObj);

        // axios({
        //     url: `http://localhost:5500/filter`,
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/JSON'},
        //     data: filterObj
        // })
        // .then( res => {
        //     console.log(res);
        // })
        // .catch((err => console.log(err)))
     }

      function getCurYear ()  {
        const today = new Date();
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        setTime(date);
      };


    useEffect(() => {
       getIndividualDetail();
       getIndividualDetail2();
       getCurYear();
      }, [])

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 details position-absolute top-50 start-50 translate-middle'>
                        <h2>Title:{movie.name} </h2>
                            <img src={movie.qr} className='side-img' alt='not found yet' ></img>
                                {console.log(movie)}
                        <div className='side-div'>
                            <p>Movie Name: {movie.name} </p>
                            <p>Date: {time} </p>
                            <p>Price:{movie.price}</p>
                            <label>Available Show Timing:</label><br/>

                            {tim.map((data, idx) => {
                            return<>
                                <input type="radio" name="timing" id="tim1" onChange={handleTimimg}  value={data.option1}/> <label id="tim1">{data.option1}</label><br/>
                                <input type="radio" name="timing" id="tim2" onChange={handleTimimg}  value={data.option2}/> <label id="tim2">{data.option2}</label><br/>
                            </>
                        })}
                                <input type="" placeholder="number of seats" onChange={handleSeat}></input>
                        </div>
                        <div className='booknow'>
                           <button class='btn btn-primary' onClick={()=>postDetails()} >Book Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BookingPage