import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'




const Login = () => {

    const { allContext } = useAuth();
    const { googleSignIn, setError } = allContext;
    const history = useHistory()
    const location = useLocation();
    const redirect_url = location.state?.from || "/home"

    // console.log(allContext);
    // const { googleSignIn } = allContext;

    const handleLoginRedirect = () => {
        googleSignIn()
            .then((result) => {

                history.push(redirect_url)


            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)

            })

    }



    return (
        <div>
            <h2 className="section-heading">login to our website</h2>

            <div className="login-box text-center p-4 w-50">
                <h1><i className="fas fa-user-circle"></i></h1>
                <Button onClick={handleLoginRedirect} className="login-btn"> <span className='inter-button'><i class="fab fa-google"></i> Google Login</span> </Button>
            </div>
        </div>
    );
};

export default Login;