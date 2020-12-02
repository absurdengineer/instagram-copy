import React from 'react'
import loginImage from '../../assets/login.png'
import LoginCard from '../../components/login-card/login-card.components';

const LoginPage = props => {
    return ( 
        <div className="container mt-5 pt-md-5 ">
            <div className="row">
                <div className="col-md-6 text-right">
                    <img src={loginImage} alt=""/>
                </div>
                <div className="col-md-6 p-5 mt-5">
                    <LoginCard />
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;