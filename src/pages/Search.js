import Navbar from "../Component/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Searchbar from "../Component/Searchbar";
import Car from "../Component/Car";
import Footer from "../Component/Footer";

const Search = () =>{
    return(
        <div>
            <Navbar/>
            {/* <Searchbar /> */}
            <Car/>
            <Footer/>
           
        </div>
    )
}
export default Search;