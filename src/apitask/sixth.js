import React from "react";
import { useState,useEffect } from "react";

const Sixthapi=()=>{
    const [isLoading,setLoading]=useState(true);
    const [data,setData]=useState([]);
    

    const getCity= async ()=>{
        try{
            const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
            const json=await response.json();
            setData (json.data);
            
        }catch(error){
            console.error(error);
        }finally{
            setLoading(false)
        }
    };

    useEffect(()=>{
        getCity();
    },[]);


    return(
        <div>
            {isLoading ?
            (
                <p>loading...</p>
            ):(
                <ul>
                {data.map((item)=>(
                    <li key={item.id}>
                        <li>Nation:{item.Nation}</li>
                        <li>Year:{item.Year}</li>
                        <li>Name:{item.Population}</li><hr/>
                        
                    </li>
                ))}
                </ul>
            )}
        </div>
    )
}
export default Sixthapi;