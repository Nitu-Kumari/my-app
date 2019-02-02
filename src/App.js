import React, { Component } from 'react';
import './App.css';
import { Route} from "react-router-dom";
import Login from './page/Login.js';
import Registration from './page/Registration.js';
import Result from './component/Result.js';
import Search from './page/Search.js';
import History from './page/History.js';
import PrivateRoute from './PrivateRoute';


class App extends Component {
  render() {
    return (
      <div className="App"> 
      <Route exact path='/' component={Login}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/registration' component={Registration}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/history' component={History}/>


   </div>
    );
  }
}

export default App;
