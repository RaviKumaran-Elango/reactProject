import React from "react";
import { useState,useEffect } from "react";

const Sevenapi=()=>{
    const [isLoading,setLoading]=useState(true);
    const [data,setData]=useState([]);
    

    const getCity= async ()=>{
        try{
            const response = await fetch('https://www.balldontlie.io/api/v1/games');
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
                        <li>Date:{item.date}</li>
                        <li>visitorteam id:{item.visitor_team.id}</li>
                        <li>conference:{item.visitor_team.conference}</li>
                        <li>Home team id:{item.period}</li><hr/>                        
                    </li>
                ))}
                </ul>
            )}
        </div>
    )
}
export default Sevenapi;