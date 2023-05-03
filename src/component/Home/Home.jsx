import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Foods from '../Foods/Foods';
import About from '../About/About';
import Chef from '../Chef/Chef';


const Home = () => {

  const [index, setIndex] = useState(0);
  const [chefs, setChefs]=useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/datas")
    .then(res=>res.json())
    .then(data=>setChefs(data))
  },[])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



  return (
   <div>
     <div className='my-4 carousel-data'>
      <Carousel className='carousel ' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className='d-flex row'>
            <div className='col-sm-12 col-md-6'>
              <img
                className="d-block carousel-img img-fluid "
                src="../../../public/bhuna-khichuri.png"
                alt="First slide"
              />
            </div>
            <div className=' col-sm-12 col-md-6 p-4 mt-4'>
              <h4 className='text-success'>Our Special</h4>
              <h2>Bhuna Khichuri</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex ab id repudiandae sequi soluta quisquam,</p>
              <button className='btn btn-outline-success' >Order Now</button>
            </div>
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex  row'>
            <div className='col-sm-12 col-md-6'>
              <img
                className="d-block carousel-img img-fluid "
                src="../../../public/biriyani.jpg"
                alt="Second slide"
              />
            </div>
            <div className='col-sm-12 col-md-6 p-4 mt-4' >
              <h4 className='text-success'>Our Special</h4>
              <h2>Biriyani</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex ab id repudiandae sequi soluta quisquam,</p>
              <button className='btn btn-outline-success' >Order Now</button>
            </div>
          </div>


        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex  row'>
            <div className='col-sm-12 col-md-6'>
              <img
                className="d-block carousel-img img-fluid "
                src="../../../public/morog-polau.jpg"
                alt="Third slide"
              />
            </div>
            <div className='col-sm-12 col-md-6 p-4 mt-4'>
              <h4 className='text-success'>Our Special</h4>
              <h2>Morog Polau</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex ab id repudiandae sequi soluta quisquam,</p>
              <button className='btn btn-outline-success' >Order Now</button>
            </div>
          </div>


        </Carousel.Item>
      </Carousel>
    </div>

    <div className='row container-fluid  m-auto '>
      <h4 className='text-center text-success'>Our Chefs</h4>
    {
      chefs.map(singleChef=><Chef key={singleChef.id} singleChef={singleChef}></Chef>)
     }
    </div>

    <Foods></Foods>
    <About></About>
    
   </div>
  );
};

export default Home;