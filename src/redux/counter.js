import React from "react";
import { useSelector,useDispatch } from "react-redux";

const Counter =()=>{
    const counter = useSelector ((state)=> state.counter);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>counter:{counter}</h1>
            <button onClick={()=> dispatch ({type:'INCREMENT'})}>Incr</button>
            <button onClick={()=> dispatch ({type:'DECREMENT'})}>Decrt</button>
        </div>
    );
};

export default Counter;