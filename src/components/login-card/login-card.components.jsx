import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import {signInWithGoogle, signInWithFacebook} from '../../firebase/firebase.utils.js'
import LoginForm from '../login-form/login-form.components'

class LoginCard extends React.Component {
    state = {  }
    handleSubmit = () => {
        console.log("Attempt Login")
    }
    render() { 
        return ( 
        <div className="jumbotron text-center">
            <p className="blue-text my-4 font-weight-bold"></p>
            <div className="row d-flex justify-content-center">
                <div className="col-xl-7 pb-2">
                    <img src={logo} className="img-fluid" alt="Logo" />
                </div>

            </div>
            <LoginForm />
            <hr className="my-4"/>

            <div className="pt-2">
                <button type="button" className="btn btn-red waves-effect" onClick={signInWithGoogle}>Sign in with <i className="fab fa-google"></i></button>
                <button type="button" className="btn btn-blue waves-effect" onClick={signInWithFacebook}>Sign in with <i className="fab fa-facebook"></i></button>
                <p className="mt-3">Create New Account <Link to='/signup' className="font-weight-bold">Sign Up</Link> here.</p>
            </div>

        </div>
     );
    }
}
 
export default LoginCard;
