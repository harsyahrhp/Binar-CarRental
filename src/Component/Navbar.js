import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Navbar.css"

const Navbar = () =>{
  return(
    // <Container >
        <div className="wrapper">
            <div className="left">
                <div className="button">
                 <Button></Button>
                 </div>
            </div>

        <div className="right"> 
            <div className="menu">
            <a className="nav-link" href="OurService">Our Service</a> 
            <a className="nav-link" href="MyList">My List</a>
            <a className="nav-link" href="Testimonial">Testimonial</a>
            <a className="nav-link" href="Faq">Faq</a>
            </div>
        </div>


        </div>

    // </Container>
  
      
)
    }
export default Navbar;