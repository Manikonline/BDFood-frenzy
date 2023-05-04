
import './AllChefRecipes.css'
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const AllChefRecipes = ({ allRecipes }) => {
    const [disable, setDisable]=useState(false)
    const { name, Picture, ingredients, cooking_method, rating } = allRecipes;
    console.log(name)

     const handleAddFavorite=()=>{
            toast('Added to Favorites');
            setDisable(true);
     }
    

    return (
        <div className='card recipe-card col-lg-4 col-md-4 col-sm-12 px-0 '>
            <img className='img-fluid allRecipes-picture' src={Picture} alt="" />
            <div className='p-2 '>
                <h4 className='text-success'>{name}</h4>
                <h6 className='text-bold'><span className='text-bold'>Ingredients: </span><span className='text-secondary'>{ingredients}</span></h6>
                <p><span className='text-bold'>Cooking Method: </span>{cooking_method}</p>
                <div className='d-flex'>
                    <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span className=''>{rating}</span>
                    </div>
                    {
                        disable ? <button onClick={handleAddFavorite} className='btn favorite-btn disabled'>Add Favorite</button>:<button onClick={handleAddFavorite} className='btn favorite-btn'>Add Favorite</button>
                    }
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default AllChefRecipes;