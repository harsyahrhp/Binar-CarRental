import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, input } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Car.css"
import Form from 'react-bootstrap/Form';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const Car = () => {
    const [carData, setCardata] = useState([]);
    const [fname, setfname] = useState("");
    const [fcategory, setfcategory] = useState("");
    const [fprice, setfprice] = useState("");
    const [fstatus, setfstatus] = useState("");

    useEffect(() => {
        axios
            .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
            .then((res) => {
                console.log(res);
                setCardata(res.data.cars);
            })
            .catch((err) => console.log(err.massage));
    }, [])

    const handleChangeName = (e) => {
        setfname(e.target.value);
    };

    const handelFilter = (e) => {
        axios
            .get(
                `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fname}&category=${fcategory}&price=${fprice}&status=${fstatus}`
            )
            .then((res) => {
                setCardata(res.data.cars);
            })
            .catch((err) => console.log(err.massage));
    };

    const handleChangeCategory = (e) => {
        setfcategory(e.target.value);
    };

    const handleChangePrice = (e) => {
        setfprice(e.target.value);
    };

    const handleChangeStatus = (e) => {
        setfstatus(e.target.value);
    };


    console.log(fprice);
    return (
        <Container>

            <div className="category">
                <div className="card">

                    <h1>Pencarianmu</h1>

                        <div className="card-body">
                            <div className="row">

                            <div className="col" >
                                <div className="nmmbl">
                        <label>Nama Mobil</label>
                        <input onChange={handleChangeName} />
                        </div>
                    </div>


                    <div className="col">
                    <label>Category</label>
                    <Form.Select value={fcategory} onChange={handleChangeCategory}>                    
                    <option value={''}>Category</option>
                     <option value={'small'}>Small</option>
                     <option value={'Medium'}>Medium</option>
                     <option value={'large'}>Large</option>
                    </Form.Select>
                    
                    </div>

                    <div className="col">
                    <label>Price</label>
                    <Form.Select value={fprice} onChange={handleChangePrice}>                    
                    <option value={''}>Price</option>
                     <option value={400000}>400.000</option>
                     <option value={500000}>500.000</option>
                    </Form.Select>
                    
                    </div>

                    <div className="col">
                        <div>
                        <label>Status</label>
                    <Form.Select value={fstatus} onChange={handleChangeStatus}>
                    <option>Status</option>
                    <option value={''}>Status</option>
                     <option value={'true'}>Disewakan</option>
                     <option value={'false'}>Disewa</option>
                    </Form.Select>
                        </div>

                    </div>

                    <div className="col">
                        <button onClick={handelFilter}>edit</button>
                    </div>

                            </div>
                        </div>
                    
                </div>


            </div>



            <div className="car">
                <div class="c1">
                    {
                        !!carData.length
                            ? carData.map((item) => {
                                return (
                                    <div className="card">
                                        <img src={item.image} />
                                        <h1>{item.name}</h1>
                                        <p>{item.price}/hari</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <div>
                                            {/* <a href="/Cardetail" type="button" class="btn btn-success">Click Disini</a> */}
                                            <Link to={`/cardetail/${item.id}`}>
                                                <button>
                                                    pilih mobil
                                                </button>
                                            </Link>

                                        </div>
                                    </div>
                                )
                            })
                            : null}


                </div>
            </div>

        </Container >
    )

}
export default Car;