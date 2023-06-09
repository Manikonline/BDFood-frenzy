import { Link } from 'react-router-dom';
import './Chef.css'
import { FaThumbsUp } from 'react-icons/fa';
const Chef = ({singleChef}) => {
    const { id,chefName,chefPicture,yearOfExperience,numRecipes,likes } = singleChef;

    return (
             
            <div className="card card-chef my-2 col-sm-6 col-md-3 col-lg-4 p-0">
                <img src={chefPicture} className="card-img-top chef-img img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{chefName}</h5>
                    <h6 className="card-text">Experience:{yearOfExperience}</h6>
                    <h6 className="card-text">Number of Recipes:{numRecipes}</h6>
                    <div className='d-flex'>
                        <span className='flex-grow-1 text-success'><FaThumbsUp></FaThumbsUp> {likes}</span>
                        <button className='btn btn-color'><Link className='text-success' to={`/chefrecipe/${id}`}>View Recipes</Link> </button>
                    </div>
                </div>
            </div>
        
    );
};

export default Chef;