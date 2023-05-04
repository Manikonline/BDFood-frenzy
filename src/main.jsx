import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main.jsx';
import Home from './component/Home/Home.jsx';
import Blog from './component/Blog/Blog.jsx';
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import ChefRecipes from './component/ChefRecipes/ChefRecipes.jsx';
import PrivateRoute from './Route/PrivateRoute.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'chefrecipe/:id',
        element:<PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader:({params})=>fetch(`https://food-frenzy-server-manikonline.vercel.app/datas/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
