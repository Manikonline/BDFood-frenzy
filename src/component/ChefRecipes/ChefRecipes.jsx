import { useLoaderData } from "react-router-dom";
import './ChefRecipes.css'
import { FaThumbsUp } from 'react-icons/fa';
import AllChefRecipes from "../AllChefRecipes/AllChefRecipes";

const ChefRecipes = () => {
   const recipes=useLoaderData()
    return (
        <div>
            <div className="chef-info container my-5">
            <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div>
                        <img className="img-fluid chif-photo" src={recipes?.chefPicture} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className=" mt-5 mb-0">
                        <h2 className="text-success">{recipes?.chefName}</h2>
                        <p>{recipes?.shortBio}</p>
                         <h6 className="text-secondary">Number of Recipes: {recipes?.numRecipes}</h6>
                         <h6 className="text-secondary">Year Of Experience: {recipes?.yearOfExperience}</h6>
                         <h6 className="text-success"><FaThumbsUp></FaThumbsUp> {recipes?.likes}</h6>
                    </div>
                </div>
            </div>
        </div>
          
          <div className="row card-edit container-fluid py-5 ">
            {
                recipes?.chefRecipes?.map(allRecipes=><AllChefRecipes key={allRecipes} allRecipes={allRecipes}></AllChefRecipes>)
            }
          </div>
          
        </div>
    );
};

export default ChefRecipes;