import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Navbar.css"

const Navbar = () =>{
  return(
    // <Container >
        <div className="wrapper">
            <div className="left">
                <div className="button">
                <a href="/" type="button" class="btn btn-primary"></a>
                 </div>
            </div>

        <div className="right"> 
            <div className="menu">
            <a className="nav-link" href="/">Our Service</a> 
            <a className="nav-link" href="/">My List</a>
            <a className="nav-link" href="/">Testimonial</a>
            <a className="nav-link" href="/">Faq</a>
            </div>
        </div>


        </div>

    // </Container>
  
      
)
    }
export default Navbar;