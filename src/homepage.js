// Import necessary libraries
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Home = () => {
 return(
    <div>
        <div class="bannerImg">
            <img src='https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/12/24131443/bfe.jpg' ></img>
        </div>
        <div class="sectionTwo">
            <img src='https://www.munveedu.com/wp-content/uploads/2021/01/favicon.png' />

            <h2>GOOD FOOD IS THE FOUNDATION OF GENUINE HAPPINESS</h2>
            <h1>MUNVEEDU</h1>
            <h2>NATIVE STYLE FINE DINING RESTAURANT</h2>
            <h4>FLAVOURS OF TAMIL NADU, SOUTH INDIAN, NORTH INDIAN & TANDOOR</h4>
        </div>

        <div class="sectionThree">
            <div class="sectionThreepad">
                <img src='https://www.munveedu.com/wp-content/uploads/2021/01/Rounded.png'/>
                <h2>OUR RECIPES</h2>
                <p>Our native recipes are meticulously crafted in an authentic traditional 
                    way with ingredients  procured from the villages down south Tamilnadu. Each dish would tell you a story.</p>
            </div>

            <div>
                <img src='https://www.munveedu.com/wp-content/uploads/2021/01/Rounded2.png'/>
                <h2>SIGNATURE DISHES</h2>
                <p>In house preparation of our sumptuous Kola urundai, Mutton Sukka, Naatu Kozhi Idichathu, Kalan Milagu, 
                    Urulai roast and our unique desert - Ilaneer payasam</p>
            </div>

            <div>
                <img src='https://www.munveedu.com/wp-content/uploads/2021/01/Rounded1.png'/>
                <h2>OUTDOOR CATERING</h2>
                <p>We undertake catering to Party orders, Corporate orders, Family functions where the client could 
                    choose from our variety of native dishes.</p>
            </div>
        </div>
        <div>
            <img src='https://www.munveedu.com/wp-content/uploads/2021/01/in_spl.png'/>
        </div>
        <div class="sectionFour">
            <div>
                <img src='https://www.munveedu.com/wp-content/uploads/2021/04/Ayiraimeen-munmveedu.jpg'/>
                <h3>AYIRAI MEEN KUZHAMBU</h3>
                <p>Indian spiny loach is a very tiny fresh water fish found in paddy / streams of rural south india. <br/>
                   This fish has medicinal value and much sought after. Ayirai Meen Kuzhambu is a delicacy,<br/> with its unique 
                   taste it is a must try in Munveedu.</p>
            </div>
            <div>
                <img src='https://www.munveedu.com/wp-content/uploads/2021/01/Madurai-Nattu-Kozhi-Idichathu-2048x1360.jpg'/>
                <h3>NATTU KOZHI IDICHATHU</h3>
                <p>A country chicken dish cooked in a traditional way. Adding the native tamilnadu<br/> spices to the 
                    perfection enhance your taste buds.</p>
            </div>
        </div>

    </div>
    );
};

export default Home;