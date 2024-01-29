import React, {useState}from 'react';


const ValidationForm = () =>{
    const[inputMail,Seta] = useState('');
    const[inputName,setb] = useState('');


    const getMovies = async () => {
        try {
          const response = await fetch('https://reqres.in/api/users');
          const json = await response.json();
          
        } catch (error) {
          console.error(error);
        }  
    
      };
    //functions
    const handleInputMail =(event) =>{
        Seta(event.target.value);
    };
    const handleInputName =(event) =>{
        setb(event.target.value);
    };
           
        

return(
    <form>
        <div 
         style={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         height: '60vh',
         width:'45vw',
         backgroundColor:'#ACC8E5',
         color:'#112A46',
         borderRadius:'16px',
         marginTop:'100px',
         marginLeft:'350px',
         }}>
            <div>
            <input
            style={{
                width:'250px',
                height:'30px',
                margin:'10px',
                margin:'8px',
                borderRadius:'6px',
            }}
            type="text"
            value={inputMail}
            onChange={(e)=>Seta(e.target.value)}
            required='true'
            placeholder="Enter Your email"
            />
            <br/>
         
            <input
            style={{
                width:'250px',
                height:'30px',
                margin:'10px',
                margin:'8px',
                borderRadius:'4px',
                }}
            type="text"
            value={inputName}
            required='true'
            onChange={(e)=>setb(e.target.value)}
            placeholder="Enter Your first"
            />
            <br/>
         
           

         <button type="submit" 
                style={{
                   width:'100px',
                   height:'30px',
                   margin:'10px',
                   margin:'8px',
                   borderRadius:'4px',
                   }} 
         >Submit</button>
         </div>
        </div>
    </form>
);
};

export default ValidationForm;