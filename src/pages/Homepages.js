import React from "react";
import Banner from "../Component/Banner";
import ContainBody from "../Component/ContainBody";
import ContainHeader from "../Component/ContainHeader";
import Faq from "../Component/Faq";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Testi from "../Component/Testi";
import Whyus from "../Component/Whyus";


const Homepages = () =>{
    return(
        <div>
            <Navbar/>
            <ContainHeader/>
            <ContainBody/>
            <Whyus/>
            <Testi/>
            <Banner/>
            <Faq/>
            <Footer/>
        </div>
    )
}
export default Homepages;