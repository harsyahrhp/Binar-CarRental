import { Input } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, input } from "react-bootstrap";
import "./Searchbar.css"

const Searchbar = (props) => {
    // const [fname, setfname] = useState("");
    // const [Cardata, setCardata] = useState([]);

    // const handleChangeName =(e) =>{
    //     setfname(e.target.value);
    // };
    
    // const handelFilter = (e) =>{
    //     axios
    //     .get(
    //         `https://bootcamp-rent-cars.herokuapp.com/customer/car?name=${fname}`
    //         )
    //     .then((res) => {
    //         setCardata(res.data.cars);
    //     })
    //     .catch((err) => console.log(err.massage));
    // };

    return (

        // <Container>
        <div className="sea">
            <div class="card">
                <div class="card-body">
                    <h4>Pencarianmu</h4>

                    <div className="row">
                        <div className="form">

                        {/* <div className="nmmbl">
                            <label>Nama Mobil</label>
                            <input onChange={handleChangeName}/>
                        </div> */}

                        <div className="kat">
                            <label>Kategori</label>
                            <input />
                        </div>

                        <div className="harga">
                            <label>Harga</label>
                            <input />
                        </div>

                        <div className="status">
                            <label>Status</label>
                            <input />
                        </div>

                        {/* <div>
                            <button onChange={handelFilter}>edit</button>
                        </div> */}

                        </div>

                    </div>
                </div>
            </div>
        </div>

        // </Container>
    )

}
export default Searchbar;