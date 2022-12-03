import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Cardetail.css"


const Cardetail = () =>{

    const {id} = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
        .then((res) => {
            console.log(res);
            setCar(res.data);
        })
        .catch((err) => console.log(err.massage));
    },[])

    return(
        <div className="crdtl">
            <Navbar/>
            <div className="crdtl1">
                <div className="card">
                    <h2>Tentang Paket</h2>
                    <h3>Include</h3>

                    <ul>
                        <li>apa saja yang termasuk</li>
                        <li>sudah termasuk</li>
                        <li>sudah termasuk</li>
                        <li>sudah termasuk</li>
                    </ul>
                </div>


             {
                Object.entries(car).length ? (
                    <div className="card">

                        <img src={car.image}></img>
                        <div className="carddtl">
                        <h1>{car.name}</h1>
                        <p>Total : {car.price}</p>
                        </div>
                    </div>
                ) : (
                    <h1>loading.......</h1>
                )
             }
             </div>
             <Footer/>
        </div>
    )
}
export default Cardetail;