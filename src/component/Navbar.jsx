import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

function Navbar(){

    return (
        <>
        <div className="w-[1100px] mx-auto fixed top-0 left-0 right-0 z-10 px-10 py-5  drop-shadow-xl flex justify-between items-center my-9 rounded-full bg-white">
            <h1 className="text-2xl font-bold text-blue-800">OneTech</h1>
            <ul className="flex space-x-6 font-medium text-blue-800">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/services"}>Services</Link></li>
                <li><Link to={"/news"}>News</Link></li>
                <li><Link to={"/Contact"} className="bg-blue-800 py-2 px-3 rounded-full text-white">Contact</Link></li>
            </ul>
        </div>
        </>
    )

}
export default Navbar