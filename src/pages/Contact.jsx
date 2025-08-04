import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


function Contact(){

    return (
        <>
        <div>
            <div>
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, libero?</p>
            </div>
            <div>
                <p>Email</p>
                <p>hello@onetech.com</p>
            </div>
            <div>
                <p>Phone Number</p>
                <p>+62 852-5048-3555</p>
            </div>
            <div>
                <p>Instagram</p>
                <p>@oneTech</p>
            </div>
            <div>
                <p>FaceBook</p>
                <p>onetech2025</p>
            </div>
            <iframe
            title="OneTech Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63347.745604470285!2d107.57311692001295!3d-6.903449400000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64d76f4b4e9%3A0x401e8f1fc28e1a0!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1693001082425!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        </>
    )

}
export default Contact