import React from "react";
import { Button, Container} from "react-bootstrap";
import "./Footer.css"

const Footer = () => {
    return(
        <Container>
<div className="apaya">

            <div class="container text-center">
  <div class="row">
    <div class="col">
      <div className="textdesc">
        <h1>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h1>
        <h1>binarcarrental@gmail.com</h1>
        <h1>081-233-334-808</h1>
      </div>
    </div>
    <div class="col">
      <div className="textmenu">
        <h2>Our services</h2>
        <h2>Why Us</h2>
        <h2>Testimonial</h2>
        <h2>FAQ</h2>
      </div>
    </div>
    <div class="col">
      <div className="conect">
        <h1>Connect with us</h1>
        {/* <img src={list}></img> */}
      </div>
    </div>
    <div class="col">
      <div className="copy">
        <h1>Copyright Binar 2022</h1>
        <Button></Button>
      </div>
    </div>
  </div>
</div>

</div>
        </Container>

)
}
export default Footer