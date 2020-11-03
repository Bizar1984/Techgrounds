import React, { Component } from "react";
import Toast from 'react-bootstrap/Toast';

export class ToastComponent extends Component {
  render() {
    return (
        <Toast>
        <Toast.Header>
          
          <strong className="mr-auto">Bootstrap</strong>
          <small>What's happening?</small>
        </Toast.Header>
        <Toast.Body>This is a toast message.</Toast.Body>
      </Toast>
    );
  }
}

export default ToastComponent;
