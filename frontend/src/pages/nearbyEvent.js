import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css';
function NearbyEvent() {

  const [event, setEvent] = useState([])
  const getNearByEvent = async () => {

    axios({
        url: 'http://localhost:5500/event',
        method: 'get',
        headers: { 'Content-Type': 'application/JSON' }
    })
        .then(res => setEvent(res.data.newEvent))
        .catch((err => console.log(err)))

 }

 function handleVideo(){
    
 }
useEffect(() => {
  getNearByEvent();
}, [])
  return (
    <div>
         <div className="start">
               
            </div>
          

            <div className='container'>
                <div className='row'>

                {event.map((data, idx) => {
                            return<>
                            <div className=' col-sm-3 card' style={{marginRight: 0.5 + 'em', width:30+'em'}}>
                                <img class="card-img-top" src={data.imageUrl} alt="Card image cap" style={{ width:100+'%'}} ></img>
                                    <div class="card-body">
                                            <h5 class="card-text">Name: {data.name}</h5>
                                            <p class="card-text">Rating: {data.rate}</p>
                                            <button href="#" class="btn btn-primary"  onClick={() => handleVideo(data.id)}>View</button>
                                    </div>
                            </div>
                            </>
                        })}
                </div>
            </div>
    </div>
  )
}

export default NearbyEvent