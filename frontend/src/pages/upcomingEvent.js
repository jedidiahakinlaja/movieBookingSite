import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css';
function UpcomingEvent() {

  const [upcoming, setUpcoming] = useState([])

  const getUpComingEvent = async () => {

      axios({
          url: 'http://localhost:5500/upcoming',
          method: 'get',
          headers: { 'Content-Type': 'application/JSON' }
      })
          .then(res => setUpcoming(res.data.upcoming))
          .catch((err => console.log(err)))

   }

   function handleVideo(){
      
   }
  useEffect(() => {
    getUpComingEvent();
  }, [])
  return (
    <div>
        <div className="start">
                <center>Upcoming Event</center>
            </div>
          

            <div className='container'>
                <div className='row'>

                {upcoming.map((data, idx) => {
                            return<>
                            <div className=' col-sm-3 card' style={{marginRight: 0.5 + 'em', width:30+'em'}}>
                                <img class="card-img-top" src={data.imageUrl} alt="Card image cap" style={{ width:100+'%'}} ></img>
                                    <div class="card-body">
                                            <h5 class="card-text">Name: {data.name}</h5>
                                            <p class="card-text">Rating: {data.rate}</p>
                                            <button href="#" class="btn btn-primary"  onClick={() => handleVideo(data.id)}>Book</button>
                                    </div>
                            </div>
                            </>
                        })}
                </div>
            </div>
    </div>
  
  )
}

export default UpcomingEvent