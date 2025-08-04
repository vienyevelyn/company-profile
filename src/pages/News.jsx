import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


function News(){
        const key = "6b0cdf861729b996b5d6ef9ffb83a488"
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`
        const[datas, setData] = useState([])
        const[error, setError] = useState("")

        async function fetchData(){
        try {
            const response = await axios.get(url)

            setData(response.data.results || [])
            setError("")
            console.log(response.data)

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
        <div className="mt-48 mb-40 mx-auto w-[1520px]">
            <div className="bg-green-700 w-[1000px] h-[200px] mx-auto py-10 rounded-xl mb-20 hover:bg-green-900 transition-all duration-500">
                <h4 className="text-xl text-white font-semibold mb-2">(template API + hover)</h4>
                <h1 className="text-5xl text-white font-bold">Article and News</h1>
            </div>
            {error && <p className="text-center text-red-400 text-lg mb-6">{error}</p>}

            <div className="grid grid-cols-3 gap-20 mx-20 my-10">
                {datas.map((data, index)=>(
                    <div key={data.id} className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg overflow-hidden shadow-md hover:scale-110 transition duration-300 border border-white/20">


                        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        className="w-full"/>


                        <div className="p-4">
                            <h2 className="text-lg font-bold">{data.title}</h2>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
        </>
    )

}
export default News