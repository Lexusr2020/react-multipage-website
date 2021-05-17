
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './Pages/NavComponents/Navigation'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Network from './Pages/Network'



function App() {
  return (
    <>
    <div className="App">
      <Router>
      <Navigation />
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/network" exact component={Network} />
      </Switch>
      </Router>
      
      
    </div>
    </>
  );
}

export default App;