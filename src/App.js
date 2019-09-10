import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './Grid.css';
import Header from './Components/header';
import Contact from './Pages/contact';
import Portfolio from './Pages/portfolio';
import About from './Pages/about';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/contact" 
          render={(props) => <Contact {...props} heading="Contact" />}
          />
          <Route exact path="/portfolio" 
          render={(props) => <Portfolio {...props} heading="Portfolio" />}
          />
          <Route exact path="/about" 
          render={(props) => <About {...props} heading="Who Am I?" />}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
