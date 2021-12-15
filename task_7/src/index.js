import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import AllEmployee from './Components/AllEmployee';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'; 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>


        <Route exact path="/Contact">
            <Contact/>
        </Route>


        <Route exact path="/Student">
            <Student/>
        </Route>

        <Route exact path="/AllEmployee">
            <AllEmployee/>
        </Route>

      </Switch>
    </Router>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();