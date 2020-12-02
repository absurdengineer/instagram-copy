import React, { Component } from 'react'
import { auth } from '../../firebase/firebase.utils'
import InputBox from '../inputbox/inputbox.components'

class LoginForm extends Component {
    state = { email : "", password : "" }
    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name] : value})
    }
    handleSubmit = async event => {
        event.preventDefault()
        const {email, password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email : "", password : "" })
        }catch(error){
            return alert(error)
        }
    }
    render() { 
        const {email, password} = this.state
        return (
            <form className="row d-flex justify-content-center px-4" onSubmit={this.handleSubmit}>
                <InputBox type="email" name="email" value={email} placeholder="Email ID" handleChange={this.handleChange} className="form-control mb-4" required/>
                <InputBox type="password" name="password" value={password} placeholder="Password" handleChange={this.handleChange} className="form-control mb-4" required />
                <button className="btn btn-amber">Sign In</button>
            </form>
         );
    }
}
 
export default LoginForm;