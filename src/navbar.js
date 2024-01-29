import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./homepage";
import AboutUsPage from "./aboutUsPage";
import MenuPage from "./menuPage";
import GalleryPage from "./galleryPage";
import ContactPage from "./contactPage";


function Navbar(){
    return(
        <div class="navSection">
            <Router>
                <nav>
                
                <ul>
                    <li>
                    <Link to="/home" class="hover">Home</Link>
                    </li>
                    <li>
                    <Link to="/about" class="hover">About</Link>
                    </li>
                    <li>
                    <Link to="/menu" class="hover">Menu</Link>
                    </li>
                    <li>
                    <Link to="/gallery" class="hover">Gallery</Link>
                    </li>
                    <li>
                    <Link to="/contact" class="hover">Contact</Link>
                    </li>
                </ul>
                
                </nav> 

                <Routes>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/about" element={<AboutUsPage/>}/>
                  <Route path="/menu" element={<MenuPage/>}/> 
                  <Route path="/gallery" element={<GalleryPage/>}/> 
                <Route path="/Contact" element={<ContactPage/>}/>
              </Routes>
            </Router>
        </div>
    );
};

export default Navbar;