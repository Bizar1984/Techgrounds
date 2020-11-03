import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'

export class NavBarComponent extends Component {
  render() {
    return (
      <>
        
        
        <Navbar bg="dark">
          <Navbar.Brand href="#home">
            <img
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>What's good?
        </Navbar>
        
        
      </>
    );
  }
}

export default NavBarComponent;
