import React, { useEffect, useState } from "react";
import '../styles/detailpage.css';
import axios from "axios";
import queryString from "query-string";
import { useNavigate } from 'react-router-dom'


  function Finalpage() {

    const q = queryString.parse(window.location.search);
    const {movies} =q;
    const [final, setFinalDetails] = useState([])
    const getFinalDetails = async () => {
        
        
        axios({
            url: `http://localhost:5500/getDetails/${movies}`,
            method: 'get',
            headers: { 'Content-Type': 'application/JSON' }
        })
            .then(
                res => setFinalDetails(res.data.movieId[0])
                
           )
            .catch((err => console.log(err)))
            
     }

     useEffect(()=>{
        getFinalDetails();
     },[])

  return (
    <>
        <div className='container'>
                <div className='row'>
                    <div className='col-md-12 details position-absolute top-50 start-50 translate-middle'>
                        <h2>Title:{final.title} </h2>
                            <img src={final.QR} className='side-img' alt='not found yet' ></img>
                        <div className='side-div'>
                            <div>
                            <img src={final.img} style={{width:90+'%',height:40+'%'}} alt='not found yet' ></img>
                            <p>Time Chosen: {final.timeChosen} </p>
                            <p>Price:{final.totalPrice}</p>
                            </div>

                            
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default Finalpage