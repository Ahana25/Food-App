// import Navbar from './Components/Navbar';
import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Login from './Components/Login';
import Home from './Components/Home';
import AllFood from './Components/AllFood';
import AddFood from './Components/AddFood';
import Register from './Components/Register';
import Logout from './Components/Logout';
import Error from './Components/Error';
import './index.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/' component={Login}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/all' component={AllFood}/>
        <Route exact path='/add' component={AddFood}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/logout' component={Logout}/>
        <Route component={Error}/>

      </Switch>
    </div>
  );
}

export default App;
