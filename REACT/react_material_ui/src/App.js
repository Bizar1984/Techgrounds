import './App.scss';
import React, {useRef, useEffect, useState} from 'react';

// Buttons
import Button from "@material-ui/core/Button";

// Icons
import SaveIcon from "@material-ui/icons/Save";

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
import { TweenMax, Power3 } from 'gsap';

// Styling a Button
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    marginBottom: 10,
    borderRadius: 15,
    color: "white",
    padding: "10 30",
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Styled with useStyles</Button>;
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
  let circleBlue = useRef(null);

  const [circleState, setState] = useState(false);

  const handleExpand = () => {
    TweenMax.to(circleRed, .8, { width: 200, height: 200, ease: Power3.easeOut })
    setState(true)
  }

  const handleShrink = () => {
    TweenMax.to(circleRed, .8, { width: 75, height: 75, ease: Power3.easeOut })
    setState(false)
  }

  useEffect(() => {
    TweenMax.from(circle, .8, { opacity: 0, x: -200, ease: Power3.easeInOut})
    TweenMax.from(circleRed, .8, { opacity: 0, x: -400, ease: Power3.easeInOut, delay: .2})
    TweenMax.from(circleBlue, .8, { opacity: 0, x: -600, ease: Power3.easeInOut, delay: .4})
    
    
  }, [])

  return (
    <div className="container">

      <div className="material-ui">   
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">MUI Theming</Typography>
              </Toolbar>
            </AppBar>

            {/* Some Fonts */}
            <Typography className="paddingPlease" variant="h3" component="div">
              Welcome to Typography
            </Typography>
            
            {/* Buttons */}
            <ButtonStyled />

           
            {/* Group of Buttons */}
            
              <Button startIcon={<SaveIcon />} color="primary">
                Save File
              </Button>
             
          </header>
        </div>
      </ThemeProvider>
      </div>

      <div className="gsap-container">
        <div className="circle-container">   

          <div 
          ref={el => {circle = el}}
          className="circle"></div>

          <div
          onClick={circleState !== true ? handleExpand: handleShrink }
          ref={el => {circleRed = el}}
          className="circle red"></div>

          <div 
          ref={el => {circleBlue = el}}
          className="circle blue"></div>
        </div>
      </div>

    </div>
    
  );
}

export default App;
