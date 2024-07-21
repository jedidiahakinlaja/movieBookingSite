import React, { useEffect, useState } from "react";
import '../styles/detailpage.css';
import axios from "axios";
import queryString from "query-string";
import { useNavigate } from 'react-router-dom'

function BookingPage() {
    const navigate = useNavigate()
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
            url: `http://localhost:5500/movie/${movies}`,
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
            url: `http://localhost:5500/movie/${movies}`,
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
           totalPrice:calprice,
           title:movie.name,
           img:movie.imageUrl
        }
        // console.log(filterObj);

       await axios({
            url: `http://localhost:5500/postDetails`,
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON'},
            data: filterObj
        })
        .then( res => { navigate(`/finalpage?movies=${res.data.Details._id}`, {replace: true})
               

        }

       )
        .catch((err => console.log(err)))


    
        
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
            <div className='container' style={styles.container}>
                <div className='row'>
                    <div className='col-md-12 details position-absolute top-50 start-50 translate-middle'>
                        <h2>Title:{movie.name} </h2>
                            <img src={movie.qr} className='side-img' alt='not found yet' ></img>
                                {console.log(movie)}
                        <div className='side-div'>
                            <h4>Movie Name: {movie.name} </h4> <br/>
                            <h5>Date: {time} </h5> <br/>
                            <h5>Price:{movie.price}</h5><br/>
                            <label>Available Show Timing:</label><br/>

                            {tim.map((data, idx) => {
                            return<>
                                <input type="radio" name="timing" id="tim1" onChange={handleTimimg}  value={data.option1}/> <label id="tim1">{data.option1}</label><br/><br/>
                                <input type="radio" name="timing" id="tim2" onChange={handleTimimg}  value={data.option2}/> <label id="tim2">{data.option2}</label><br/><br/>
                            </>
                        })}
                              <label/>Number of Seats: <br/>
                              <input type="number" placeholder="number of seats" onChange={handleSeat}></input>
                        </div>
                        <div className='booknow'>
                           <button class='btn btn-primary'
                            style={handSeat.length === 0
                                ? styles.disabledButton : styles.enabledButton}
                            disabled={handSeat.length === 0}
                            onClick={()=>postDetails()} >Book Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BookingPage

const styles={
    disabledButton: {
        backgroundColor: 'gray',
        color: 'white',
        cursor: 'not-allowed',
        margin: 10,
        padding: 15,
        borderRadius: "8px",
        border: "none",
        boxShadow: "0px 0px 10px 0px grey",
    },
    enabledButton: {
        backgroundColor: 'green',
        color: 'white',
        cursor: 'pointer',
        margin: 10,
        padding: 15,
        borderRadius: "8px",
        border: "none",
        boxShadow: "0px 0px 10px 0px grey",
    }
}