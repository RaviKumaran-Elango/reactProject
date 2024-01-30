import React from "react";
import { useState,useEffect } from "react";

const Weather=()=>{
    const [isLoading,setLoading]=useState(true);
    const [data,setData]=useState(null);
    

    const getCity= async ()=>{
        try{
            const response = await fetch('https://api.tomorrow.io/v4/weather/forecast?location=chennai&apikey=tBpezqW8cmShZ634b1dt6yrfJw1JMWkD');
            const json=await response.json();
            setData (json.timelines);
            
        }catch(error){
            console.error(error);
        }finally{
            setLoading(false)
        }
    };

    useEffect(()=>{
        getCity();
    },[]);


    const gridContainerStyle = {
        display:'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))',
        gap:'20px',
    }
    const gridItemStyle = {
        textAlign:'center',
    }

    return(
        <div>
            {isLoading ?
            (
                <p>loading...</p>
            ):(
                <div style={gridContainerStyle}>
                    {data.map((item) => (
                    <div style={gridItemStyle}>
                        <p>Time:{item.minutely.time}</p>
                    </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Weather;