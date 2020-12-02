import React from 'react'
import loginImage from '../../assets/login.png'
import LoginCard from '../../components/login-card/login-card.components';
import SignUpForm from '../../components/signup-form/signup-form.components';

const LoginPage = props => {
    return (
        <div className="container mt-5 pt-md-5 ">
        {!props.signUp ?
            <div className="row">
                
                <div className="col-md-6 text-right mt-5">
                    <img src={loginImage} alt=""/>
                </div>
                <div className="col-md-6 p-5 mt-4">
                    <LoginCard />
                </div>
                
            </div>
            :
            <div className="offset-md-2 col-md-8">
                <SignUpForm />
            </div>
        }   
        </div>
     );
}
 
export default LoginPage;