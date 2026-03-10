import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function App() {

  return (
    <div className="bg-[#FCFCFC] min-h-screen text-[#111] font-sans selection:bg-gray-200 transition-colors duration-300 ">
      <nav className="flex justify-between items-center py-8 md:py-12 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="font-bold text-xl md:text-2xl tracking-tighter">devster</span>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          <div className="flex items-center gap-5 md:gap-6 text-[#A0A0A0]">
            <a className="cursor-pointer active:scale-90 hover:scale-110 hover:text-[#111]  transition-all duration-300" href="https://github.com/devsterdev/designrebuilds" target="_blank" rel="noreferrer">
              <GithubIcon />
            </a>
            <a className="cursor-pointer active:scale-90 hover:scale-110 hover:text-[#111] transition-all duration-300" href="https://www.linkedin.com/in/dev-shr/" target="_blank" rel="noreferrer">
              <LinkdeIn />
            </a>
            <a className="cursor-pointer active:scale-90 hover:scale-110 hover:text-[#111] transition-all duration-300" href="https://x.com/devsterxyz" target="_blank" rel="noreferrer">
              <X />
            </a>
            <a className="cursor-pointer active:scale-90 hover:scale-110 hover:text-[#111] transition-all duration-300" href="https://medium.com/@devsterxyz" target="_blank" rel="noreferrer">
              <MediumIcon />
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 md:px-12 flex flex-col">
        <div className="flex justify-start items-center min-h-[30vh] py-12">
          <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-medium tracking-tight">
            Watch my components.
          </h1>
        </div>

        <div className="flex flex-col border-t border-[#EAEAEA] w-full pb-24">
          <Component srNum="01" name="Keyboard" />
          <Component srNum="02" name="Particle Canvas" />
          <Component srNum="03" name="Outline" />
        </div>
      </main>
    </div>
  );
}

const Component = ({ name, srNum }) => (
  <Link
    key={srNum}
    className="group py-6 px-4 border-b border-[#EAEAEA] cursor-pointer grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] items-center"
    to='/blueBtn'
  >

    <span className="text-sm text-[#A0A0A0] font-medium tabular-nums transition-all duration-500 ease-out group-hover:blur-[3px] group-hover:opacity-30">
      {srNum}
    </span>
    

    <span className="text-lg md:text-xl font-medium origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:text-[#000 inline-block">
      {name}
    </span>
  </Link>
)

const Year = ({year}) => (
  <div className="text-xl border-b-2 border-[#EAEAEA] text-neutral-400 font-medium w-full">
    {year}
  </div>
)


const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" />
    <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" />
  </svg>
)

const LinkdeIn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" />
    <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" />
    <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" />
  </svg>
)

const X = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" />
  </svg>
)

const MediumIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* M */}
    <path d="M3 18V6L7 13L11 6V18" />

    {/* e */}
    <path d="M14 14C14 11.8 15.8 10 18 10C19.7 10 21 11.3 21 13H15C15 15 16.5 16 18 16C19 16 20 15.6 21 15" />
  </svg>
)

