import React from "react";
import { useState } from "react";
import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"
import { motion } from "framer-motion";
// import { useNavigate, Link } from "react-router-dom";


function About(){

    return (
        <>
        <div className="2xl:w-[1500px] xl:w-[1440px] lg:w-[1024px] w-full pt-36 mt-20 flex flex-col  gap-y-20 items-center justify-center px-20">
            <div className="flex items-end lg:flex-row flex-col justify-around gap-x-24 px-20">
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-start"
                >
                    <p className="lg:text-lg text-2xl text-blue-800 font-semibold">We are OneTech</p>
                    <h1 className="lg:text-5xl text-7xl font-bold">Set Up To build</h1>
                    <h2 className="lg:text-5xl text-7xl font-semibold text-gray-500">A better way to Innovate</h2>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-start"
                >
                    <p className="md:text-end text-lg text-md">No Responsive amet consectetur adipisicing elit. Pariatur dolor blanditiis veritatis odio facilis deleniti!.</p>
                </motion.div>
            </div>
            
            <div className="flex lg:flex-row flex-col animate-fade-up duration-3000 justify-center items-center lg:gap-x-10 gap-x-5 lg:gap-y-0 gap-y-10">
                <img src={about1} alt="" className="xl:w-full md:w-full  lg:w-[300px] h-[400px] object-cover rounded-xl object-center shadow-md"/>
                <img src={about2} alt="" className="xl:w-full md:w-full lg:w-[400px] h-[400px] object-cover rounded-xl object-center shadow-md" />
            </div>

            <div className="flex lg:flex-row flex-col animate-fade-up duration-3000 justify-between lg:gap-x-36 md:gap-y-10 items-center mt-10">
                <div>
                    <h2 className="text-5xl font-bold text-blue-800 mb-5">Our Story</h2>
                    <img src={about2} alt="" className="w-[500px] object-cover rounded-xl object-center shadow-md"/>
                </div>
                <div>
                    <p className="md:text-end text-center text-md max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum iste consectetur asperiores expedita praesentium non mollitia esse nemo impedit.</p>
                </div>
            </div>


        </div>
        </>
    )

}
export default About