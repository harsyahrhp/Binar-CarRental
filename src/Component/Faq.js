import { Container} from "react-bootstrap";
import './Faq.css'

const Faq = () => {
    return(
        <Container>
            <div className="faq">
                <div className="left3">
                    <h1>Frequently Asked Question</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>

                </div>

                <div className="right3">
                    <div>
                        <select class="form-select" aria-label="Default select example">
                        <option selected>Apa saja syarat yang dibutuhkan?</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>

                    <div>
                        <select class="form-select" aria-label="Default select example">
                        <option selected>Berapa hari minimal sewa mobil lepas kunci?</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>

                    <div>
                        <select class="form-select" aria-label="Default select example">
                        <option selected>Berapa hari sebelumnya sabaiknya booking sewa mobil?</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>

                    <div>
                        <select class="form-select" aria-label="Default select example">
                        <option selected>Apakah Ada biaya antar-jemput?</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>

                    <div>
                        <select class="form-select" aria-label="Default select example">
                        <option selected>Bagaimana jika terjadi kecelakaan</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>

                    

                </div>
            </div>

        </Container>

        )
        }
        export default Faq