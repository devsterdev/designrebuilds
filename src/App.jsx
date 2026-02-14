import { useState } from "react";
import Keyboard from "./components/Keyboard";
import ParticleCanvas from "./components/ParticleCanvas";
import Outline from "./components/Outline";
import Card from "./components/Card";
import GlassCard from "./components/GlassCard";
import BlueBtn from "./components/BlueBtn";
import DarkTodoCard from "./components/DarkTodoCard copy";
import LightTodoCard from "./components/LightTodoCard copy";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className=" flex flex-wrap justify-center items-center gap-8 p-8">
      {/* <div className="h-screen bg-black flex justify-center items-center"> */}
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

        <Outline text="cool button">
          <BlueBtn />
        </Outline>

        <Outline text="todo card">
          <div className="flex gap-3">
            <DarkTodoCard />
            <LightTodoCard />
          </div>
        </Outline>  
      </div>
    </div>
  );
}

export default App;
