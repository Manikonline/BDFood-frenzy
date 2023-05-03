import { Card } from "react-bootstrap";
import './Foods.css'

const Foods = () => {
    return (
        <div className="container-fluid my-4">
            <h4 className="font-bold ms-2 text-success text-center">Our Dishes</h4>
            <h3 className="font-bold ms-2 text-center">POPULAR DISHES</h3>
              <hr className="w-50 m-auto text-success" />
            <div className="row mt-2 ">
                <div className=" my-2 col-sm-6 col-md-3 col-lg-3">
                <Card>
            <Card.Img className="card-img" variant="top" src="../../../public/Shorshe Ilish.jpg" />
            <Card.Body>
              <h6>Shorshe Ilish</h6>
              <p><span className="text-success">৳320</span> <span className="price">৳420</span></p>
               <button className="btn btn-outline-success w-100">Order Now</button>
            </Card.Body>
          </Card>
                </div>
                
                <div className="my-2  col-sm-6 col-md-3 col-lg-3">
                <Card>
            <Card.Img className="card-img" variant="top" src="../../../public/Kacchi Biriyani.jpg" />
            <Card.Body>
              <h6>Kacchi Biriyani </h6>
              <p><span  className="text-success">৳650</span> <span className="price">৳750</span></p>
              <button className="btn btn-outline-success w-100">Order Now</button>
            </Card.Body>
          </Card>
                </div>
                
                <div className="my-2  col-sm-6 col-md-3 col-lg-3">
                <Card>
            <Card.Img className="card-img" variant="top" src="../../../public/kalabhuna.jpg"/>
            <Card.Body>
              <h6>Beef Kala Bhuna</h6>
              <p><span  className="text-success">৳470</span> <span className="price">৳490</span></p>
              <button className=" btn btn-outline-success w-100">Order Now</button>
            </Card.Body>
          </Card>
                </div>
                <div className="my-2  col-sm-6 col-md-3 col-lg-3">
                <Card>
            <Card.Img className="card-img" variant="top" src="../../../public/bhuna-khichuri.png" />
            <Card.Body>
              <h6>Bhuna-Khichuri</h6>
              <p><span  className="text-success">৳350</span> <span className="price">৳400</span></p>
              <button className="btn btn-outline-success w-100">Order Now</button>
            </Card.Body>
          </Card>
                </div>
                <div className="my-2  col-sm-6 col-md-3 col-lg-3">
                <Card>
            <Card.Img className="card-img" variant="top" src="../../../public/dal-recipe.jpg" />
            <Card.Body>
              <h6>Masoor Dal Recipe</h6>
              <p><span  className="text-success">৳150</span> <span className="price">৳250</span></p>
              <button className="btn btn-outline-success w-100">Order Now</button>
            </Card.Body>
          </Card>
                </div>
                <div className="my-2  col-sm-6 col-md-3 col-lg-3">
                <Card>
            <Card.Img className="card-img" variant="top" src="../../../public/bhorta.jpg" />
            <Card.Body>
              <h6>Fish Finger Bhorta</h6>
              <p><span  className="text-success">৳150</span> <span className="price">৳170</span></p>
              <button className="btn btn-outline-success w-100">Order Now</button>
            </Card.Body>
          </Card>
                </div>
                <div className="my-2  col-sm-6 col-md-3 col-lg-3">
                <Card>
            <Card.Img className="card-img" variant="top" src="../../../public/fuchka.jpg" />
            <Card.Body>
              <h6>Fuchka</h6>
              <p><span className="text-success">৳50</span><span className="price">৳70</span></p>
              <button className="btn btn-outline-success w-100">Order Now</button>
            </Card.Body>
          </Card>
                </div>
                <div className="my-2  col-sm-6 col-md-3 col-lg-3">
                <Card>
            <Card.Img className="card-img" variant="center" src="../../../public/singhara.jpg" />
            <Card.Body>
            <p><span className="text-success">৳70</span> <span className="price">৳120</span></p>
              <h6>Kolijar Shingara </h6>
              <button className="btn btn-outline-success w-100">Order Now</button>
            </Card.Body>
          </Card>
                </div>
            </div>
        </div>
    );
};

export default Foods;