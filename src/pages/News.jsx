import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


function News(){
        const key = "157d69aa1dfd9f445f625e11a8634850"
        const url = `https://gnews.io/api/v4/top-headlines?category=general&apikey=${key}`
        const[data, setData] = useState([])

        async function fetchData(){
        try {
            const response = await axios.get(url)

            setData(response.data.results || [])
            setError("")

        } 
        catch(err){
            console.error(err)
            setError("There's a problem when fetching the News.")
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (

        <>
        <div>
            <div className="bg-green-50">
                <h4>OneTech</h4>
                <h1>Article and News</h1>
            </div>
            <div className="news-api">
                
            </div>
        </div>
        </>
    )

}
export default News