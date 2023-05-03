import React from 'react';
import './AllChefRecipes.css'
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const AllChefRecipes = ({ allRecipes }) => {
    const { name, Picture, ingredients, cooking_method, rating } = allRecipes;
    console.log(name)
    return (
        <div className='card recipe-card col-lg-4 col-md-4 col-sm-12 px-0 '>
            <img className='img-fluid allRecipes-picture' src={Picture} alt="" />
            <div className='p-2'>
                <h4>{name}</h4>
                <h6 className='text-secondary'><span className='text-success'>Ingredients: </span>{ingredients}</h6>
                <p><span className='text-success'>cooking Method: </span>{cooking_method}</p>
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
                    <button className='btn'>Add Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default AllChefRecipes;