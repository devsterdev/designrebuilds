import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 md:px-12 flex flex-col">
        <div className="flex justify-start items-center min-h-[30vh] py-12">
          <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-medium tracking-tight">
            Watch my components.
          </h1>
        </div>

        <div className="flex flex-col border-t border-[#EAEAEA] w-full pb-24">
          <Component srNum="01" name="Hover Item" to='/hover-item' />
          <Component srNum="02" name="Card" to='/card' />
          <Component srNum="03" name="Glass Card" to='/glass-card' />
          <Component srNum="04" name="Partical Canvas" to='/partical' />
          <Component srNum="05" name="Aceternity Keyboard" to='/keyboard' />
        </div>
      </main>
  )
}

export default Home


const Component = ({ name, srNum, to }) => (
  <Link
    key={srNum}
    className="group py-6 px-4 border-b border-[#EAEAEA] cursor-pointer grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] items-center"
    to={to}
  >

    <span className="text-sm text-[#A0A0A0] font-medium tabular-nums transition-all duration-500 ease-out group-hover:blur-[3px] group-hover:opacity-30">
      {srNum}
    </span>
    

    <span className="text-lg md:text-xl font-medium origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:text-[#000 inline-block">
      {name}
    </span>
  </Link>
)