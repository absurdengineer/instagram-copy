import './App.css';
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components';
import Profile from './pages/profile/profile.components';
import Header from './components/header/header.components';
import LoginPage from './pages/login/login.components';
import {auth} from './firebase/firebase.utils'

class App extends React.Component {
  state= {
    currentUser : null
  }

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})
      console.log(user.isAnonymous)
    })
  }

  render(){
    return (
    <BrowserRouter>
      <Header />  
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/profile/:uname' component={Profile} />
      </Switch>
    </BrowserRouter>
  );
  }
  
}

export default App;
