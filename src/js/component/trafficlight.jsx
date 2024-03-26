import React, { useState } from "react";

const Trafficlight = () => {
  const [lightColor, setLightColor] = useState("red");
  const [activeLight, setActiveLight] = useState(null);

  function redActive() {
    setLightColor("red");
    setActiveLight("red");
  }

  function yellowActive() {
    setLightColor("yellow");
    setActiveLight("yellow");
  }

  function greenActive() {
    setLightColor("green");
    setActiveLight("green");
  }

  return (
    <>
        <div className="bg-dark w-25 h-auto d-inline-block ">asdas</div>
        <div className="bg-dark rounded-5 d-inline-flex flex-column w-25 p-5 d-inline my-5 ">
        <div
            className={`rounded-5 bg-danger text-danger p-5  my-3  ${
            activeLight === "red" ? "glow" : ""
            }`}
            style={{ backgroundColor: lightColor }}
            onClick={redActive}
        >as</div>
        <div
            className={`rounded-5 bg-warning text-warning p-5  my-3 ${
            activeLight === "yellow" ? "glow" : ""
            }`}
            style={{ backgroundColor: lightColor }}
            onClick={yellowActive}
        >as</div>
        <div
            className={`rounded-5 bg-success text-success p-5  my-3 ${
            activeLight === "green" ? "glow" : ""
            }`}
            style={{ backgroundColor: lightColor }}
            onClick={greenActive}
        >as</div>
        </div>
        <button></button>
    
        </>
  );
};



export default Trafficlight