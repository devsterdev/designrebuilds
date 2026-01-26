import { useState } from "react";
import Keyboard from "./components/Keyboard";
import ParticleCanvas from "./components/ParticleCanvas";
import Outline from "./components/Outline";

function App() {
  return (
    <>
      <div className="h-full bg-black flex justify-center items-center flex-col space-y-6 p-4">
        <Outline text="Aceternity keyboard" link="https://ui.aceternity.com/">
          <Keyboard />
        </Outline>
        
        <Outline text="Partical Canvas" link="https://particle-canvas-psi.vercel.app/">
          <ParticleCanvas />
        </ Outline>
      </div>
    </>
  );
}

export default App;
