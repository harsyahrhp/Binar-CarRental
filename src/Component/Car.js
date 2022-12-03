import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, input } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Car.css"

const Car = () => {
    const [carData, setCardata] = useState([]);

    useEffect(() => {
        axios
        .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
        .then((res) => {
            console.log(res);
            setCardata(res.data.cars);
        })
        .catch((err) => console.log(err.massage));
    },[])

    console.log("cardata", carData);
    return (
        <Container>
            <div className="car">
                <div class="c1">
                {
                !!carData.length
                ? carData.map((item) =>{
                    return(
                        <div className="card">
                            <img src={item.image}/>
                            <h1>{item.name}</h1>
                            <p>{item.price}/hari</p>
                            <p>lorem ipsum</p>
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
           :null }
                    
                   
                </div>
            </div>

        </Container>
    )

}
export default Car;