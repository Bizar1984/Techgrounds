import React, {useRef, useEffect} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { TweenMax, Power3 } from 'gsap';
import ToastComponent from './components/ToastComponent';
import NavBarComponent from './components/NavBarComponent';
 

function App() {

  let logoItem = useRef(null);
  
  
  useEffect(() => {
    // console.log(logoItem);
    TweenMax.to(
      logoItem,
      .8,
      {
        opacity: 1,
        y: -100,
        ease: Power3.easeOut
      }
    )
    TweenMax.to(
      logoItem,
      .8,
      {
        opacity: 1,
        y: 0,
        ease: Power3.easeIn,
        delay: 1
      }
    )
    
  }, [])

  
  return (
    <div className="App">
      <NavBarComponent className="navigation"></NavBarComponent>
      
      
      <header className="App-header">
        <img 
        ref={el => {logoItem = el}}
        src={logo} className="App-logo" alt="logo" />
        
        <p>Watch the logo move</p>
        <ToastComponent className="toast"></ToastComponent>
        
        
        
        <a
          
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      
    </div>
  );
}

export default App;
