import { Children, useContext } from "react";

import { Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoute = ({children}) => {

    const {user, loading}=useContext(AuthContext)

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;