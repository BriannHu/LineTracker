import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import ListView from './components/list.component';
import CreateRequest from './components/request.component';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={ListView} />
      <Route path="/create" exact component={CreateRequest}/>

    </Router>
  );
}

export default App;
