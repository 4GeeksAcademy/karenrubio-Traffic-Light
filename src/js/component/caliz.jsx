import React,{useState} from "react";


const Caliz = () => {
    const [lightColor, setLightColor] = useState("red");
    const [activeLight, setActiveLight] = useState(null);
  
    function redActive() {
      setLightColor("red");
      setActiveLight("red");
    }
  
   
  
    return (
        <>


                <div className="bg-dark w-25 h-auto d-inline-block ">dfh</div>
                <div className="bg-dark rounded-5 d-inline-flex flex-column w-25 p-5 d-inline my-5 ">
                 
                    <div
                className={`rounded-5 bg-danger text-danger p-5  my-3${
                    activeLight === "red" ? "glow" : ""
                }`}
                style={{ backgroundColor: lightColor }}
                onClick={redActive}
                >red
                </div>
                <div
                className={`rounded-5 bg-danger text-danger  p-5 my-3${
                    activeLight === "red" ? "glow" : ""
                }`}
                style={{ backgroundColor: lightColor }}
                onClick={redActive}
                >red
                </div>
                <div
                className={`rounded-5 bg-danger text-danger  p-5 my-3${
                    activeLight === "red" ? "glow" : ""
                }`}
                style={{ backgroundColor: lightColor }}
                onClick={redActive}
                >red
                </div>
                </div>
                
        </>
    );
  };
  
  
  
  export default Caliz