import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import service1 from "../assets/service1.jpg"
import service2 from "../assets/service2.jpg"
import service3 from "../assets/service3.jpg"
import { motion } from "framer-motion";

function Services(){

    return (
        <>
        <div className="">
            <div className="text-black flex justify-around px-20 items-end gap-x-32 my-48  mx-auto w-[1520px]"> 
                <motion.h1
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-6xl text-start font-semibold">Our<br/> Services!</motion.h1>
                
                <motion.p 
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-md text-justify max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatibus,
                     modi inventore aliquid non ratione? Corporis suscipit consectetur vel aperiam.</motion.p>
            </div>
            <div className="relative w-[1520px] group">
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-500 group-hover:bg-opacity-20"></div>

                <h2 className="absolute z-50 bottom-0 text-6xl font-bold mx-10 my-5 text-white">HOVER ME</h2>

                <img src={service1} alt="" className="w-screen h-[200px] object-cover object-center transition-all duration-500 group-hover:h-[300px]" />
            </div>
            <div className="relative w-[1520px] group">
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-500 group-hover:bg-opacity-20"></div>

                <h2 className="absolute z-50 text-6xl bottom-0 font-bold font-bold mx-10 my-5 text-white">IPSUM</h2>

                <img src={service2} alt="" className="w-screen h-[200px] object-cover object-center transition-all duration-500 group-hover:h-[300px]"/>
            </div>
            <div className="relative w-[1520px] group">
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-500 group-hover:bg-opacity-20"></div>

                <h2 className="absolute z-50 text-6xl bottom-0 font-bold font-bold mx-10 my-5 text-white">NO RESPONSIVE</h2>

                <img src={service3} alt="" className="w-screen h-[200px] object-cover object-center transition-all duration-500 group-hover:h-[300px]"/>
            </div>
        </div>
        </>
    )

}
export default Services