import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const navHook = () => {
    return() => {
        const navigate = useNavigate();
        // return <Component navigate={navigate} {...props} />
       
    }
}

export default navHook;