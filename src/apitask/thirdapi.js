import React from "react";
import { useState,useEffect } from "react";

const Thirdapi=()=>{
    const [isLoading,setLoading]=useState(true);
    const [data,setData]=useState([]);

    const getCity= async ()=>{
        try{
            const response = await fetch('https://www.balldontlie.io/api/v1/teams');
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
                        {item.id}
                    </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Thirdapi;