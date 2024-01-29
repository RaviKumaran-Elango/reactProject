import React from "react";
import Modal from"./modal";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";




function Header(){  

    return(
        
        <div class="header"> 
    
            <div class="firstContainer">
                <img src="https://www.munveedu.com/wp-content/uploads/2023/04/Logo-web.png" style={{width:'125px', height:'80px'}}/>
            
                <img src="https://www.munveedu.com/wp-content/uploads/2021/01/veg-nonveg.png" style={{width:'125px', height:'40px',float:'right'}}/>
            </div>

            <div class="orderButton">
                <Router>
                    <Link to="/">
                       
                    </Link>

                    <Routes>
                        <Route path="/" element={<Modal/>}/>
                    </Routes>
                </Router>
            </div>
          
        </div>
    );
};

export default Header;