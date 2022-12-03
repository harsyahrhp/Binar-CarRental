import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Banner.css"

const Banner = () =>{
  return(
    <Container>
    <div className="intro5">
    <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    {/* <button className="buttonsewa">
                Mulai Sewa Mobil
            </button> */}
            <a href="/Search" type="button" class="btn btn-success">Mulai Sewa Mobil</a>
</div>

</Container>
)

    }
export default Banner;