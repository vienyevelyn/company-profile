import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


function Contact(){

    return (
        <>
        <div className="flex w-[1520px] gap-x-48 justify-center mt-40 items-center">
            <div>
                <div className="text-start">
                    <h1 className="font-bold text-blue-800 text-5xl">Contact Us</h1>
                    <p className="text-gray-600 font-semibold text-xl max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, libero?</p>
                </div>
            </div>
            <div className="mt-20 grid grid-cols-2 gap-y-10 gap-x-20">
                
                    <div className="text-start">
                        <p className="font-bold text-blue-800 text-lg">Email</p>
                        <p className="text-gray-600 font-semibold">hello@onetech.com</p>
                    </div>
                    <div className="text-start">
                        <p className="font-bold text-blue-800 text-lg">Phone Number</p>
                        <p className="text-gray-600 font-semibold">+62 852-5048-3555</p>
                    </div>
               
                
                    <div className="text-start">
                        <p className="font-bold text-blue-800 text-lg">Instagram</p>
                        <p className="text-gray-600 font-semibold">@oneTech</p>
                    </div>
                   
                


                
            </div>
            
        </div>
        <div className="mx-40 w-full">
        <p className="text-blue-800 text-xl font-semibold text-start mb-5">Jl Lorem ipsum dolor sit amet.</p>
        <iframe
                title="OneTech Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63347.745604470285!2d107.57311692001295!3d-6.903449400000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64d76f4b4e9%3A0x401e8f1fc28e1a0!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1693001082425!5m2!1sid!2sid"
                className="w-[1280px] h-72"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
        </>
    )

}
export default Contact