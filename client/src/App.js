import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './Grid.css';
import Header from './Components/header';
import Footer from './Components/footer';
import { PublicRoutes } from './Routes/routes';
import { ProjectRoutes } from './Projects';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <PublicRoutes />
        <ProjectRoutes />
        <Footer />
      </Router>
    </React.Fragment>
    
  );
}

export default App;
