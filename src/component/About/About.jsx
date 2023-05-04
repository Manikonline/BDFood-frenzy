import { Button } from 'react-bootstrap';
import './About.css'
import { FaDollarSign, FaHeadset, FaTruckMoving} from 'react-icons/fa';

const About = () => {
    return (
       <div className='about-section my-2 py-3'>
         <div className="row container m-auto  "> 
             <h4 className="text-center text-success">About Us</h4>
             <h3 className="text-center">Why Choose Us?</h3>
            <div className="col-lg-6 col-md-6 col-sm-12 my-4">
              <img className="about-pic img-fluid me-2" src="https://i.ibb.co/nrZftWt/about-2.jpg" alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-3 ">
               <h3 className='text-success ' >The Best Food In The Country</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat vitae fuga sit? Dolore ratione aspernatur, fuga, architecto sint deleniti id at incidunt ab tempore reiciendis mollitia repellat aperiam natus, possimus iure dignissimos quas voluptatem provident impedit corrupti consectetur. Suscipit iste numquam deleniti doloribus obcaecati repellat. Pariatur voluptate maxime hic.</p>
               <div>
               <Button className='ms-1 mt-2 about-btn '  > <FaTruckMoving className='icon'></FaTruckMoving>Free Delivery</Button>
               <Button className='ms-1 mt-2 about-btn' > <FaDollarSign className='icon'></FaDollarSign>Easy Payments</Button>
               <Button className='ms-1 mt-2 about-btn' ><FaHeadset className='icon'></FaHeadset>24/7 Service</Button>
               </div>
               <Button className='mt-2 ms-1 about-btn img-fluid' variant="secondary">Learn More</Button>
            </div>
        </div>
       </div>
    );
};

export default About;