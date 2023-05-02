
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
  const{user,logOut}=useContext(AuthContext)


  const handleLogOut=()=>{
     logOut();
  }


    return (
        <div className=''>
            <Navbar className='px-3' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className='nav-brand' href="#"><span className='text-success'>BD</span><span className='text-blue'>Food Frenzy</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto nav-link my-2 my-lg-0"
           
          >
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/blog">Blog</Link>
             {
              user ? <><span className='nav-link'><img className='use-img' title={user.displayName} src={user?.photoURL} alt="" /></span> <span className='nav-link' onClick={handleLogOut}>LogOut</span></>:<> <Link className='nav-link' to="/login">Login</Link></>
             }
            

            <Link className='nav-link' to="/register">Registration</Link>
            

        
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;


