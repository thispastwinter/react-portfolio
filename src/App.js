import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './Grid.css';
import Header from './Components/header';
import { PublicRoutes } from './Routes/routes';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <PublicRoutes />
      </Router>
    </React.Fragment>
  );
}

export default App;
