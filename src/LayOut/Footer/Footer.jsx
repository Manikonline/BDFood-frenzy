import './Footer.css'
import { FaEnvelope, FaHouseUser, FaPhoneVolume } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='container-fluid footer-bg-color '>
            <div className="row p-5 ">
                <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                    <h6 className=' text-success'>Our location</h6>
                    <div className="contact-info text-start">
                        <ul className="list-style">
                            <li><FaHouseUser></FaHouseUser><span>Uttara, Sector-5, Bangladesh</span></li>
                            <li><FaPhoneVolume></FaPhoneVolume><span>+88 09 222 375 14</span></li>
                            <li><FaEnvelope></FaEnvelope><span>bdfoodfrozen@gmail.com</span></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center col-lg-3 col-md-6 col-sm-12">
                    <h6 className=' text-success '>More Links</h6>
                    <ul className="list-style-link  p-0">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Office</a></li>
                        <li><a href="#">Delivery</a></li>

                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                    <h6 className=' text-success '>Demo Links</h6>
                    <ul className="list-style-link p-0">
                        <li><a href="#">Our Store</a></li>
                        <li><a href="#">Buy Gift Card</a></li>
                        <li><a href="#">Return Policy</a></li>

                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h6 className='text-center text-success'>FeedBack</h6>
                    <input type="email" className="form-control w-100 text-success" placeholder="Enter your Email address... " />
                    <button type="submit" className="btn btn-outline-success rounded-2 mt-3  text-white ">Submit</button>
                </div>

            </div>
                 <div className='text-center'>
                <p className="text-muted "> Copyright &copy;<a className="text-decoration-none text-success " href="#"><b> <i>Food Frenzy</i></b></a> Company Ltd.All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;




