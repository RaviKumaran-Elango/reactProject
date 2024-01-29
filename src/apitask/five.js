import React from "react";
import { useState,useEffect } from "react";

const Fifthapi=()=>{
    const [isLoading,setLoading]=useState(true);
    const [data,setData]=useState([]);
    const [url,setUrl]=useState([]);

    const getCity= async ()=>{
        try{
            const response = await fetch('https://reqres.in/api/users?page=2');
            const json=await response.json();
            setData (json.data);
            setUrl (json.support.url)
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
                        <li>Email:{item.email}</li>
                        <img src={item.avatar}/>
                        <li>Name:{item.first_name}</li>
                        <li>Support URL:{url}</li><hr/>
                    </li>
                ))}
                </ul>
            )}
        </div>
    )
}
export default Fifthapi;