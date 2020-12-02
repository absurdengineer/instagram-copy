import React from 'react';
import { Link } from 'react-router-dom';
import { auth, createUserProfileDocument, signInWithFacebook, signInWithGoogle } from '../../firebase/firebase.utils';
import InputBox from '../inputbox/inputbox.components';

class SignUpForm extends React.Component {
    state = { 
        displayName : '',
        email : '',
        password : '',
        confirmPassword : '',
     }
    
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name] : value})
    }
    handleSubmit = async event => {
        event.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state 
        if(password !== confirmPassword) return alert("password doesn't match.")
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)   
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : '',
            })
        }catch(error){
            console.error(`Unable to Create User : ${error}`)
        }
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state 
        return (
        <form className="mt-5 text-center border border-light p-5" onSubmit={this.handleSubmit}>
            <p className="h4 mb-4">Sign up</p>

            <div className="form-row mb-4">
                <div className="col">
                    <InputBox 
                        name="displayName" 
                        type="text"
                        className="form-control" 
                        placeholder="Full Name" 
                        value = {displayName}  
                        handleChange = {this.handleChange}
                        required
                    />
                </div>
            </div>


            <InputBox 
                type="email" 
                name="email" 
                className="form-control mb-4" 
                placeholder="E Mail" 
                value = {email}  
                handleChange = {this.handleChange}
                required
            />


            <InputBox 
                type="password" 
                name="password" 
                className="form-control" 
                placeholder="Password" 
                value = {password}  
                handleChange = {this.handleChange}
                required
            />
            <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                At least 6 characters
            </small>

            <InputBox 
                type="password" 
                name="confirmPassword" 
                className="form-control mb-4" 
                placeholder="Retype Password" 
                value = {confirmPassword}  
                handleChange = {this.handleChange}
                required
            />


            <button className="btn btn-info btn-block" type="submit">Sign in</button>


            <p className="mt-1">or sign up with : </p>

            <span onClick={signInWithFacebook} className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text"></i></span>
            <span onClick={signInWithGoogle} className="mx-2" role="button"><i className="fab fa-google light-blue-text"></i></span>

            <p className="mt-3">Already have an Account : </p>

            <Link to="/login" className="font-weight-bold" role="button">Login Here</Link>

            <hr />

            <p>By clicking
                <em> Sign up </em> you agree to our
                <a href="/" target="_blank"> terms of service </a>
            </p>

        </form>
     );
    }
}
 
export default SignUpForm;