import React from "react";
import { useState } from "react";

const MoneyCal=()=>{
    const [ravi, setravi]=useState('');
    const [isai, setisai]=useState('');

    const [value1,setValue1]=useState('500');
    const [value2,setValue2]=useState('700');

    const handleravi=(event)=>{
        setravi(event.target.value)
     };
     const handleisai=(event)=>{
       setisai(event.target.value)
     };

     const handlevalue1=(event)=>{
        setValue1(event.target.value)
     }
     const handleValue2=(event)=>{
        setValue2(event.target.value)
     }

     const handleButtonClick=(click)=>{
        if (click === 'sent' ){
            setravi('');
            alert(`${value2} + ${value1}`);                 
        }
        else if (click === 'receive'){
            setisai('');
            alert(`${value2-value1}`);
        }
        else{
            alert('error')
        }
     }

    return(
        <div>
            <h3>Mini calcultor</h3>
            <div>
                <button>Ravi</button><br/>

                <input 
                value={ravi}
                type="text" 
                onChange={(e)=>setravi(e.target.value)}
                ></input>

                <h4>value:{value1}</h4>
                <button onClick={() => handleButtonClick('sent')}>sent</button>
                <button onClick={() => handleButtonClick('receive')}>Receive</button>
            </div>

            <div>
                <button>Isai</button><br/>
                <input 
                value={isai}
                type="text" 
                onChange={(e)=>setisai(e.target.value)}
                ></input>
                <h4>value:{value2}</h4>
                <button onClick={() => handleButtonClick('sent')}>sent</button>
                <button onClick={() => handleButtonClick('receive')}>Receive</button>
            </div>
            
        </div>
    )
};

export default MoneyCal;