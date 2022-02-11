import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from './module/form';
import List from './module/list';
import Edit from './module/edit';

function App() {
  return (
    <Router>
      <div className="App">

        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ color: 'orange', fontWeight: 'bold', background: 'linear-gradient(to right, #2AB6E4 , #D81FFB)' }}>
          <a class="navbar-brand" href="https://github.com/gasperpb" style={{ color: 'orange', fontWeight: 'bold' }}>Github</a>
          <a class="navbar-brand" href="https://www.linkedin.com/in/achilles-vasconcelos-48360b152/" style={{ color: 'orange', fontWeight: 'bold' }}>LinkedIn</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/"> Employee List </Link>
              </li>
            </ul>
            <Link class="btn btn-info " to="/form">Add Employee</Link>
          </div>
        </nav>

        <div class="container py-4">
          <div class="row">
            <Route path="/" exact component={List} />
            <Route path="/form" component={Form} />
            <Route path="/edit/:employeeId" component={Edit} />
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
