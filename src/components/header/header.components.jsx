/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => {
    return (
        <nav className="navbar navbar-dark bg-white fixed-top ">
            <div className="container">
                <Link to="/" className="navbar-brand"  >
                    <img src="https://1000logos.net/wp-content/uploads/2017/02/instagram-logo.jpg" style={{margin:0,padding:0}} height="50" alt="mdb logo" />
                </Link> 
                { currentUser ? <div>Signed in as <span className="font-weight-bold">{currentUser.displayName}</span> <span className="btn btn-sm morpheus-den-gradient" style={{cursor:"pointer"}} onClick={() => auth.signOut()}>Logout</span></div> : <Link to="/login" style={{cursor:"pointer"}}>Login</Link>}
            </div>
        </nav>
     );
}
export default Header;