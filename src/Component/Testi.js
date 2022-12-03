import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Testi.css"

const Testi = () =>{
  return(
    <Container>
    <div className="intro4">
    <div className="texti4">
        <h1>Testimonial</h1>
        <h4>Berbagai review positif dari para pelanggan kami</h4>
    </div>

    <div className="cardtesti">
        <div className="row">
            <div className="col">
             <div class="card" widhth="619px" height="270px">
                 <div class="card-body">
                    <div className="isicard">
                        <img src="https://i.ibb.co/rynLYcj/img-photo.png"></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                 </div>
                </div>
            </div>

        </div>
    </div>
</div>
</div>

</Container>
)

    }
export default Testi;