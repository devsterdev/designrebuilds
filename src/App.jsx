import { useState } from "react";
import Keyboard from "./components/Keyboard";
import ParticleCanvas from "./components/ParticleCanvas";
import Outline from "./components/Outline";
import Card from "./components/Card";
import GlassCard from "./components/GlassCard";
import BlueBtn from "./components/BlueBtn";

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

        <Outline text="Card Component" link="https://kree8.studio/">
          <Card />
        </Outline>

        <Outline text="Black Card" link="https://x.com/ava_thiery/status/2018604506179670524  ">
          <GlassCard />
        </Outline>

        <Outline>
          <BlueBtn />
        </Outline>
      </div>
    </>
  );
}

export default App;
