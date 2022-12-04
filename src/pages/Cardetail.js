import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Cardetail.css"
import Searchbar from "../Component/Searchbar";


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
            <Searchbar/>

            <div className="crdtl1">
                <div className="card">
                    <h2>Tentang Paket</h2>
                    <h3>Include</h3>

                    <ul>
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                    </ul>

                    <h3>Exclude</h3>

                    <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>

                    <h3>Refund, Reschedule, Overtime</h3>

                    <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                </div>

                <div className="crdtl2">
             {
                Object.entries(car).length ? (
                    
                    <div className="card">
                        <div className="crd2">
                        <img src={car.image}></img>
                        <div className="carddtl">
                        <h1>{car.name}</h1>
                        <div className="prc">
                        <p>Total </p>
                        <p>{car.price}</p>
                        </div>
                        </div>

                        </div>
                    </div>
                   
                ) : (
                    <h1>loading.......</h1>
                )
             }
            </div>
             </div>
             <Footer/>
       
        </div>
    )
}
export default Cardetail;