import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import './style.css';
function Header() {
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const [suggestion, setSuggestion] = useState([])
    const [inputText, setInputText] = useState([])

    const getMovies = async() => {

        axios({
            url: 'http://localhost:5500/movies',
            method: 'get',
            headers: { 'Content-Type': 'application/JSON'}
        })
        .then( res => setMovies(res.data.movies))

        .catch((err => console.log(err)))
        
    }

   function handleInput(event){
        const text =event.target.value;

        let suggest =[]
        suggest = movies.filter(item=>item.name.toLowerCase().includes(text.toLowerCase()))
        setSuggestion(suggest);
        setInputText(text);

    }


    function selectBooking (ss) {
        navigate(`/detailpage?movies=${ss}`, {replace: true});
        window.location.reload();
    }


    

    useEffect(() => {
        getMovies();
    }, [])

  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-black bg-opacity-75" data-bs-theme="dark">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand" href="#">
                        {/* <img src="./Assets/img/netflix-logo-png-large.png" alt="Bootstrap" width="120" className="mx-2" /> */}
                        <h1>Booking Site</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="nav-item me-3"><Link to='/latest'>Latest Movies</Link></li>
                            <li className="nav-item me-3"><Link to='/upcomingevent'>UpComing Movies</Link></li>
                            <li className="nav-item me-3"><Link to='/nearbyevent'>NearBy Events</Link></li>
                                                    
                        </ul> 
                        <span className="move">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control bg-black rounded-0" id='search' onChange={handleInput} placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon2" />
                                <span className="input-group-text bg-black border border-black" id="basic-addon2"><i className="bi bi-search"></i></span>
                                 {/* Suggestion Box */}
                                 <ul className="suggestionBox">
                                    {
                                    suggestion.length === 0 && inputText === undefined?'':''}
                                  
                            
                                   {suggestion.length > 0 && inputText === ''?(null):''} 
                            
                                    {suggestion.length === 0 && inputText?
                                         (
                                            <li>No Results Found !!</li>
                                        ):''}



                                        {
                                            suggestion.length > 0 && inputText ?(
                                                suggestion.map((item, index) => (
                                                    <li key={index} className="suggList" onClick={() => selectBooking(item._id)}>
                                                        <img src={ item.imageUrl } className="suggImg" alt=" " />         {/* restaurant image */}
                                                        <span className="suggName">{item.name}</span>   {/* restaurant name */}
                                                        <span className="suggLoc">{item.rate}</span>   {/* restaurant Location */}
                                    
                                                    </li>
                                                ))
                                            ):''
                                        }
                                    
                            
                                    
                                    </ul>
                            </div>
                        </span>
                        
                    </div>
                   
                </div>
            </nav>
    </div>
  )
}

export default Header
