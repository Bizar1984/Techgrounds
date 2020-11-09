import React, { useEffect } from "react";

import astronaut from "./images/spaceArmorDark.svg";
import finish from "./images/finish.jpg";
import powershell from "./images/powershell.png";
import js from "./images/js.png";
import python from "./images/python.png";
import github from "./images/github.png";
import nodejs from "./images/nodejs.png";
import question_mark from "./images/question.png";
import three from "./images/three.jpg";
import unity from "./images/unity.jpg";
import greensock from "./images/greensock.png";

import { gsap } from "gsap";

import "./App.css";

function App() {
  
  const tl = gsap.timeline({repeat: 1, yoyo: true});

  useEffect(() => {
    
    gsap.set(".astronaut", { transformOrigin: "50% 50%" });
    // transformOrigin is a css property with two paramters, x and y axes (z for 3d)

    let myObject = { rotation: 0 };
    gsap.to(myObject, {
      duration: 4,
      rotation: 720,
      onUpdate: function () {
        console.log(myObject.rotation);
      },
    });

    tl.from(".text", {
      duration: 2,
      opacity: 0,
      x: -800,
      ease: "back",
      scale: 0.5,
      stagger: 0.3,
    })
      .from(".circle", { duration: 0.5, opacity: 0.2, y: 50, stagger: 0.05 })
      .addLabel("circlesOutro", "+=3.5")
      .from(
        ".powershell",
        { duration: 1.5, rotation: 270, opacity: 0, ease: "power3.out" },
        "-=2.5"
      )
      .to(
        ".astronaut",
        { duration: 2, x: -300, opacity: 0.8, ease: "bounce" },
        "-=.5"
      )
      .to(
        ".powershell",
        { duration: 1.5, rotation: 270, opacity: 0, ease: "power3.out" },
        "-=1.2"
      )
      .to(".astronaut", {
        duration: 2,
        x: 0,
        opacity: 1,
        scale: 1,
        ease: "back",
      })
      .to(".js", { duration: 2, opacity: 1, ease: "back" }, "-=3.5")
      .to(
        ".js",
        { duration: 2, x: 250, opacity: 0, rotation: 360, ease: "power3.out" },
        "-=1.8"
      )
      .to(".astronaut", { duration: 0.5, x: 295, ease: "easeOut" })
      .to(".python", { duration: 2, opacity: 1 }, "-=1")
      .to(
        ".python",
        { duration: 2, rotation: 1440, opacity: 0, x: 400 },
        "-=1.2"
      )
      .to(
        ".circle",
        { duration: 1.2, opacity: 0.4, ease: "power3.out" },
        "circlesOutro"
      )
      .to(".astronaut", { duration: 1, x: 0, ease: "easeOut" }, "-=.8")
      .to(".circle3", { duration: 2, opacity: 1, scale: 1.6 })
      .to(".circle3", {
        duration: 1.2,
        y: 275,
        ease: "bounce",
        opacity: 0,
        scale: 0.5,
      })
      .to(".astronaut", { duration: 1, y: 250, ease: "easeInOut" }, "-=.9")
      .to(".github, .nodejs", { duration: 3.5, opacity: 1 }, "-=3")
      .to(".astronaut", { duration: 1, x: -300, opacity: 0.8, ease: "easeIn" })
      .to(
        ".github",
        { duration: 1, rotation: 270, opacity: 0, ease: "power3.out" },
        "-=.8"
      )
      .to(".astronaut", { duration: 2, x: 300, opacity: 1, ease: "bounce" })
      .to(
        ".nodejs",
        {
          duration: 2.5,
          x: 400,
          y: -400,
          rotation: 1440,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.5"
      )

      // Part 2
      .to(
        ".question-mark",
        { duration: 2, rotation: 360, opacity: 1, scale: 3 },
        "-=1.5"
      )
      .to(".circle", { duration: 4, opacity: 0 }, "-=2")
      .to(".astronaut", { duration: 1, x: 0, ease: "easeIn" }, "-=1.9")
      .to(
        ".question-mark",
        {
          duration: 3,
          x: -600,
          y: -600,
          scale: 0.2,
          rotation: 1440,
          opacity: 0,
        },
        "-=1.6"
      )
      .to(".three, .unity", { duration: 5, opacity: 1, ease: "easeIn" }, "-=3")
      .to(".astronaut", { duration: 1, y: 420, ease: "easeIn" }, "-=3.5")
      .to(
        ".three",
        {
          duration: 2.5,
          rotate: 720,
          x: 620,
          scale: 0,
          ease: "easeInOut",
          opacity: 0,
        },
        "-=3.4"
      )
      .to(
        ".unity",
        { duration: 2, rotation: 360, scale: 0, opacity: 0, ease: "easeIn" },
        "-=3"
      )

      .to(
        ".astronaut",
        { duration: 2, x: 340, scale: 1.2, ease: "easeOut" },
        "-=1.5"
      )
      .to(
        ".finish",
        { duration: 1, scale: 0.8, opacity: 0, ease: "power2.Out" },
        "-=2"
      )

      .to(
        ".greensock",
        { duration: 4, scale: 10, opacity: 1, ease: "easeInOut" },
        "-=1"
      )
      .to(
        ".circle",
        { duration: 1, scale: 0.8, opacity: 0, ease: "easeInOut" },
        "-=3.5"
      )
      .to(
        ".text",
        { duration: 1, scale: 0.8, opacity: 0, ease: "easeInOut" },
        "-=2.5"
      )
      .to(
        ".text-container-two",
        { duration: 1, scale: 1.6, opacity: 1, ease: "easeInOut" },
        "-=1"
      );
  });

  return (
    <div className="App">
      <div className="animation-container">
        <div className="text-container">
          <div className="text letter1">m</div>
          <div className="text letter2">y</div>
          <div className="space"></div>
          <div className="text letter3">j</div>
          <div className="text letter4">o</div>
          <div className="text letter5">u</div>
          <div className="text letter6">r</div>
          <div className="text letter7">n</div>
          <div className="text letter8">e</div>
          <div className="text letter9">y</div>
        </div>

        <div className="text-container-two">
          <p>GREENSOCK ROCKS</p>
        </div>

        <img className="image powershell" src={powershell} alt="powershell" />
        <img className="image js" src={js} alt="js" />
        <img className="image python" src={python} alt="python" />
        <img className="image github" src={github} alt="github" />
        <img className="image nodejs" src={nodejs} alt="nodejs" />
        <img
          className="image question-mark"
          src={question_mark}
          alt="question-mark"
        />
        <img className="image three" src={three} alt="three" />
        <img className="image unity" src={unity} alt="unity" />
        <img className="image greensock" src={greensock} alt="greensock" />

        <div className="centered">
          <img className="astronaut" src={astronaut} alt="astronaut" />
        </div>

        <img src={finish} className="image finish" alt="finish" />

        <div className="circle-container">
          <div className="circle circle1 circleNew "></div>
          <div className="circle circle2 circleNew"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4 circleNew"></div>
          <div className="circle circle5 circleNew "></div>
        </div>
      </div>
      {/* end of animation container */}
      
    </div>
  );
}

export default App;
