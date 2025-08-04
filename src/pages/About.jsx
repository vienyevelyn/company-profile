import React from "react";
import { useState } from "react";
import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"
import { motion } from "framer-motion";
// import { useNavigate, Link } from "react-router-dom";


function About(){

    return (
        <>
        <div className="w-[1500px] pt-36 mt-20 flex flex-col gap-y-20 items-center justify-center px-20">
            <div className="flex items-end justify-around gap-x-24 px-20">
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-start"
                >
                    <p className="text-lg text-blue-800 font-semibold">We are OneTech</p>
                    <h1 className="text-5xl font-bold">Set Up To build</h1>
                    <h2 className="text-5xl font-semibold text-gray-500">A better way to Innovate</h2>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-start"
                >
                    <p className=" text-end text-md">No Responsive amet consectetur adipisicing elit. Pariatur dolor blanditiis veritatis odio facilis deleniti!.</p>
                </motion.div>
            </div>
            
            <div className="flex animate-fade-up duration-3000 justify-center items-center gap-x-10">
                <img src={about1} alt="" className="w-full h-[400px] object-cover rounded-xl object-center shadow-md"/>
                <img src={about2} alt="" className="w-full h-[400px] object-cover rounded-xl object-center shadow-md" />
            </div>

            <div className="flex animate-fade-up duration-3000 justify-between gap-x-36 items-center mt-10">
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