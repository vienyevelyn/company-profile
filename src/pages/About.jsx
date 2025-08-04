import React from "react";
import { useState } from "react";
import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"
// import { useNavigate, Link } from "react-router-dom";


function About(){

    return (
        <>
        <div className="w-[1500px] pt-36 flex flex-col gap-y-20 items-center justify-center px-20">
            <div className="flex items-end justify-around gap-x-24 px-20">
                <div className="text-start">
                    <p className="text-lg text-blue-800 font-semibold">We are OneTech</p>
                    <h1 className="text-5xl font-bold">Set Up To build</h1>
                    <h2 className="text-5xl font-semibold text-gray-500">A better way to Innovate</h2>
                </div>
                <div>
                    <p className=" text-end text-md">No Responsive amet consectetur adipisicing elit. Pariatur dolor blanditiis veritatis odio facilis deleniti!.</p>
                </div>
            </div>
            
            <div className="flex justify-center items-center gap-x-10">
                <img src={about1} alt="" className="w-full h-[400px] object-cover rounded-xl object-center shadow-md"/>
                <img src={about2} alt="" className="w-full h-[400px] object-cover rounded-xl object-center shadow-md" />
            </div>

            <div className="flex justify-between gap-x-36 items-center mt-10">
                <div>
                    <h2 className="text-5xl font-bold text-blue-800 mb-5">Our Story</h2>
                    <img src={about2} alt="" className="w-[500px] object-cover rounded-xl object-center shadow-md"/>
                </div>
                <div>
                    <p className="text-end text-md max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum iste consectetur asperiores expedita praesentium non mollitia esse nemo impedit.</p>
                </div>
            </div>


        </div>
        </>
    )

}
export default About