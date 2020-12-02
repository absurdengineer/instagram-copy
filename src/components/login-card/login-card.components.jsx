import React from 'react'
import logo from '../../assets/logo.png'
import {signInWithGoogle} from '../../firebase/firebase.utils.js'

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

            <hr className="my-4"/>

            <div className="pt-2">
                    <button type="button" className="btn btn-blue waves-effect" onClick={signInWithGoogle}>Sign in with Google</button>
            
            </div>

        </div>
     );
    }
}
 
export default LoginCard;
