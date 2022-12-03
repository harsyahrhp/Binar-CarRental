import React from "react";
import { Button, Container } from "react-bootstrap";
import "./whyus.css"

const Whyus = () =>{
  return(
    <Container>
    <div className="intro3">
    <div className="texti3">
        <h1>Why Us?</h1>
        <h4>Mengapa harus pilih Binar Car Rental?</h4>
    </div>

    <div className="cardwhy">
        <div className="row">
            <div className="col">
             <div class="card">
                 <div class="card-body">
                    <h5>Mobil Lengkap</h5>
                    <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                 </div>
                </div>
            </div>

            <div className="col">
             <div class="card">
                 <div class="card-body">
                    <h5>Harga Murah</h5>
                    <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                 </div>
                </div>
            </div>

            <div className="col">
             <div class="card">
                 <div class="card-body">
                 <h5>Layanan 24 Jam</h5>
                    <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                 </div>
                </div>
            </div>

            <div className="col">
             <div class="card">
                 <div class="card-body">
                 <h5>Sopir Profesional</h5>
                    <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                 </div>
                </div>
            </div>

        </div>
    </div>
</div>

</Container>
)

    }
export default Whyus;