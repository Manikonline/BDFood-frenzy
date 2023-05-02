
import { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGoogle, FaGithub} from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';




const Login = () => {
  const{signIn,googleLogin,githubLogin}=useContext(AuthContext)
  const[error, setError]=useState('')
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
          
        setError('');
        form.reset();
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // navigate(from, {replace:true})
            })
            .catch(error => {
                console.log(error);
                setError(error.message)

            })
    }

    const handleGoogleLogin=()=>{
         googleLogin()
         .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
        
            const user = result.user;
       
          }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
       
          });
      
    }

    const handleGithubLogin=()=>{
        githubLogin()
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user)
          }).catch((error) => {
            const errorMessage = error.message;
             console.log(errorMessage)
          });
    }

    return (
        <Container className='w-25 mx-auto'>
            
            <h3 className='text-center'>Please Login</h3>
            <Form onSubmit={handleLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <div>
                    <p className='text-danger'>{error}</p>
                </div>

                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Registration</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>


            <div className='mt-3 text-center'>
                <p>Or</p>
                <h5>Login With</h5>
                <div className='py-5'>
                <Button onClick={handleGoogleLogin} className="button mb-2" variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button onClick={handleGithubLogin} className="button" variant="outline-secondary"><FaGithub /> Login with Github</Button>
                </div>
            </div>
        </Container>
    );
};

export default Login;