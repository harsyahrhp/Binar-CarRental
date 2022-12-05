import { Input } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, input } from "react-bootstrap";
import "./Searchbar.css"

const Searchbar = () => {
    return (

        <div className="sea">
            <div class="card">
                <div class="card-body">
                    <h4>Pencarianmu</h4>

                    <div className="row">
                        <div className="form">            
                        <div className="harga">
                            <label>Nama Mobil</label>
                            <input disabled />
                        </div>

                        <div className="harga">
                            <label>Category</label>
                            <input disabled />
                        </div>

                        <div className="harga">
                            <label>Price</label>
                            <input disabled />
                        </div>

                        <div className="status">
                            <label>Status</label>
                            <input disabled />
                        </div>

                        {/* <div>
                            <button>edit</button>
                        </div> */}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default Searchbar;