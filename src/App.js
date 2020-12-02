import './App.css';
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components';
import Profile from './pages/profile/profile.components';
import Header from './components/header/header.components';
import LoginPage from './pages/login/login.components';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
  state= {
    currentUser : null
  }
  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          this.setState({currentUser : {
            id : snapshot.id,
            ...snapshot.data()
            }
          })
        })   
      }
      else{
        this.setState({currentUser : userAuth })
      }
    })
  } 

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    console.log(this.state.currentUser)
    return (
    <BrowserRouter>
      <Header currentUser={this.state.currentUser} />  
      <Switch>
        <Route currentUser={this.state.currentUser} exact path='/' component={HomePage} />
        <Route currentUser={this.state.currentUser} exact path='/login' component={LoginPage} />
        <Route exact path='/profile/:uname' component={Profile} />
      </Switch>
    </BrowserRouter>
  );
  }
  
}

export default App;
