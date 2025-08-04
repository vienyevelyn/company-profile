import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

function Navbar(){

    return (
        <>
        <div className="bg-red-50 w-full drop-shadow-md flex justify-between items-center px-6 py-4">
            <h1 className="text-xl font-bold">OneTech</h1>
            <ul className="flex space-x-6 font-medium text-gray-700">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/services"}>Services</Link></li>
                <li><Link to={"/news"}>News</Link></li>
                <li><Link to={"/Contact"}>Contact</Link></li>
            </ul>
        </div>
        </>
    )

}
export default Navbar