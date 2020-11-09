import "./App.scss";

import React, { useRef, useEffect, useState } from "react";

// Buttons
import Button from "@material-ui/core/Button";

// Themes and Styles
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import { green } from "@material-ui/core/colors";

// Fonts
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";

// Navigation Bar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// GSAP Imports
import { gsap } from 'gsap';
import { Power3 } from "gsap";
import Cape from "./images/Cape.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { Power2 } from "gsap";

// Styling a Button
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #C02425, #F0CB35)",
    border: 0,
    marginBottom: 10,
    borderRadius: 15,
    color: "white",
    padding: "10 30",
    
    
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}></Button>;
}

// Creating a Custom Theme
const theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: 24,
      marginBottom: 8,
    },
  },
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: orange[600],
    },
  },
});

// GSAP Stuff!

function App() {
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleGreen = useRef(null);
  
  // reveal picture
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule('.container:after');

  const tl = gsap.timeline()

  const [circleState, setState] = useState(false);

  const handleExpand = () => {
    gsap.to(circleRed, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setState(true);
  };

  const handleShrink = () => {
    gsap.to(circleRed, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setState(false);
  };

  useEffect(() => {
    gsap.from(circle, .8, { opacity: 0, y: -40, ease: Power3.easeOut });
    gsap.from(circleRed, .8, { opacity: 0, x: -240, ease: Power3.easeOut, delay: .2 });
    gsap.from(circleGreen, 1, { opacity: 0, y: 40, ease: Power3.easeOut, delay: .2 });
    
  }, []);

  useEffect(() => {
    // console.log(container, image);
    // console.log(imageReveal)
    tl.to(container, 0.3, { css: { visibility: 'visible' }})
      .to(imageReveal, .6, {width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.8, ease: Power2.easeInOut, delay: -1 })

    });



  return (
    <div className="outer-container">

      {/* <div className="material-ui">
        <ThemeProvider theme={theme}>
          <div className="App">
            <header className="App-header">
              <AppBar color="secondary">
                <Toolbar>
                  <IconButton>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6">MUI and GSAP</Typography>
                  
                </Toolbar>
              </AppBar>

              
            </header>
          </div>
        </ThemeProvider>
      </div> */}
    
     
     
      <div className="gsap-container">
        <div className="circle-container">
          <div
            ref={(el) => {
              circle = el;
            }}
            className="circle"
          ></div>

          <div
            onClick={circleState !== true ? handleExpand : handleShrink}
            ref={(el) => {
              circleRed = el;
            }}
            className="circle red"
          ></div>

          <div
            ref={(el) => {
              circleGreen = el;
            }}
            className="circle blue"
          ></div>
        </div>
      </div>

      {/* the image to the right */}
      <div 
        ref={el => container = el}
        className="container">

        <img 
        ref={el => image = el} 
        className="gsap-image" src={Cape} alt="gsap" />

      </div>
      {/* <ButtonStyled></ButtonStyled> */}
    </div>


  );
}

export default App;
