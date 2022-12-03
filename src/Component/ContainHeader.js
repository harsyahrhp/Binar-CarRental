import React from "react";
import { Button, Container } from "react-bootstrap";
import "./ContainHeader.css"

const ContainHeader = () =>{
  return(
    // <Container>
    <div className="intro">
    <div className="left1">
         <div className="textRental">
         <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
         <h4>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h4>
         {/* <button href="/search" className="buttonsewa">
                Mulai Sewa Mobil
            </button> */}
            <a href="/Search" type="button" class="btn btn-success">Mulai Sewa Mobil</a>
         </div>
         
    </div>

    <div className="right1">
        <div className="mercy">
        <img src="https://i.ibb.co/dMk1JmG/img-car.png"></img>
        </div>
        
    </div>

</div>

// </Container>
)

    }
export default ContainHeader;