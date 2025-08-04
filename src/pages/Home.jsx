import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


function Home(){

    return (
        <>
        <div className="bg-blue-50 w-full h-full">
            <h1>World's</h1>
            <h1>One and Only</h1>
            <h1>Finest AI</h1>
            <p>by industry leaders worldwide. Pushing boundaries with Innovationg</p>
            <button><Link to={"/about"}>About Us</Link></button>
        </div>
        </>
    )

}
export default Home