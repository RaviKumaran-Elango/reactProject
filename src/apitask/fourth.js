import React from "react";
import { useState,useEffect } from "react";

const Fourthapi=()=>{
    const [isLoading,setLoading]=useState(true);
    const [data,setData]=useState([]);

    const getCity= async ()=>{
        try{
            const response = await fetch('https://reqres.in/api/unknown');
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
                        <li>Id:{item.id}</li>
                        <li>Name:{item.name}</li>
                        <li>Year:{item.year}</li><hr/>
                    </li>
                ))}
                </ul>
            )}
        </div>
    )
}
export default Fourthapi;