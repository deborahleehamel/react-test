import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="Repspeak">
      <Navbar>
      <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Repspeak</a>
      </Navbar.Brand>
      </Navbar.Header>
      <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated line</MenuItem>
        </NavDropdown>
        </Nav>
        </Navbar>
        <div className="App-header">
          <h2>Welcome to Repspeak</h2>
        </div>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
