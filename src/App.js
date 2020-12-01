import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.components';
import Profile from './components/profile/profile.components';
import Header from './components/header/header.components';

function App() {
  return (
    <BrowserRouter>
      <Header />  
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/profile/:uname' component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
