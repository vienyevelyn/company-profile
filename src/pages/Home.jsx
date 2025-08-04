import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bg from "../assets/home-bg.jpg"


function Home(){

    return (
        <>
        <div className="relative w-screen h-screen bg-cover bg-center pt-20"  style={{ backgroundImage: `url(${bg})`  }}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute animate-fade-up duration-3000 mx-auto text-start px-4 md:px-10 lg:px-20 py-16 md:py-20 mt-20 left-0 right-0 w-full max-w-6xl flex flex-col md:flex-row border gap-y-6 md:gap-x-20 justify-center items-end rounded-xl border-white/80">
                <div className="shrink-0">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">World's</h1>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/70">One and Only</h1>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">Finest Tech</h1>
                </div>
                <div className="text-end">
                    <p className="mb-4 text-white font-semibold text-sm md:text-base">No Responsive dolor amet consectetur adipisicing elit. Quidem voluptates esse eum reiciendis nisi necessitatibus debitis, nobis a consectetur voluptatem.</p>
                    <button><Link to={"/about"} className="bg-blue-800 py-2 px-3 rounded-full text-white hover:text-white hover:bg-indigo-900 transition-all duration-500">About Us</Link></button>
                </div>
            </div>
            
        </div>
        </>
    )

}
export default Home