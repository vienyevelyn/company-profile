import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import service1 from "../assets/service1.jpg"
import service2 from "../assets/service2.jpg"
import service3 from "../assets/service3.jpg"

function Services(){

    return (
        <>
        <div className="">
            <div className="text-black mb-6 flex justify-around px-20 items-end gap-x-32 mt-48 mb-40 mx-auto w-[1520px]"> 
                <h1 className="text-6xl text-start font-semibold">Our<br/> Services!</h1>
                
                <p className="text-md text-justify max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatibus, modi inventore aliquid non ratione? Corporis suscipit consectetur vel aperiam.</p>
            </div>
            <div className="relative w-[1520px]">
                <h2 className="absolute z-50 bottom-0 text-6xl font-bold mx-10 my-5 text-white">DOLORES</h2>

                <img src={service1} alt="" className="w-screen h-[200px] object-cover object-center" />
            </div>
            <div className="relative w-[1520px]">
                <h2 className="absolute z-50 text-6xl bottom-0 font-bold font-bold mx-10 my-5 text-white">IPSUM</h2>

                <img src={service2} alt="" className="w-screen h-[200px] object-cover object-center"/>
            </div>
            <div className="relative w-[1520px]">
                <h2 className="absolute z-50 text-6xl bottom-0 font-bold font-bold mx-10 my-5 text-white">NO RESPONSIVE</h2>

                <img src={service3} alt="" className="w-screen h-[200px] object-cover object-center"/>
            </div>
        </div>
        </>
    )

}
export default Services