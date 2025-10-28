
import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png" ; 
import { FiMenu } from "react-icons/fi";


export const NavBar = () => {
    const [mobileMenu , setMobileMenu] = useState(false) ; 
    const [navbackGround , setNavBackGround] = useState("transparent")
    const handleMenu = () => {
        setMobileMenu((prev) => !prev)
    }
    useEffect(()=>{
        const handlescroll = ()=>{
            if(window.scrollY > 10 ){
            setNavBackGround("black")
        }else{
            setNavBackGround("transparent")
        }
        }
        window.addEventListener("scroll" , handlescroll) ; 
        return ()=> window.removeEventListener("scroll" , handlescroll)
    },[])
    return (
    <nav id="#home" className={ `bg-${navbackGround} transition-all duration-300  shadow-md fixed top-0 left-0 right-0 z-50`}>
        <div className="  container px-5 md:px-10 mx-auto flex justify-between py-2   text-white items-center  ">
        <img className="w-[54px]" src= {Logo}></img>
        {/* dektop nav */}
        <ul className="hidden md:flex space-x-7 ">
            <li className=" hover:text-neutral-500 transition-colors"><a href="#home">Home</a></li>
            <li className=" hover:text-neutral-500 transition-colors "><a href="#about">About</a></li>
            <li className=" hover:text-neutral-500 transition-colors"><a href="#services">Services</a></li>
            <li className=" hover:text-neutral-500 transition-colors"><a href="#contact">Contact</a></li>
        </ul>
        <button className="hidden md:block bg-white text-black rounded-lg cursor-pointer hover:bg-neutral-100 py-2 px-3"><a href="#services">Join Now</a></button>

        {/* mobile nav */}
        <button className=" md:hidden" onClick={handleMenu}> <FiMenu className="text-2xl" /></button>
    </div>
    <div className={` bg-neutral-900/70 text-white ${mobileMenu ? " max-h-96 " : " pointer-events-none max-h-0" } overflow-hidden flex transition-all duration-300   flex-col `}>
            <ul className=" text-center  md:hidden  ">
                <li className="mt-4 hover:text-neutral-500 transition-colors"><a href="#home">Home</a></li>
                <li className="mt-4 hover:text-neutral-500 transition-colors "><a href="#about">About</a></li>
                <li className="mt-4 hover:text-neutral-500 transition-colors"><a href="#services">Services</a></li>
                <li className="mt-4 hover:text-neutral-500 transition-colors"><a href="#contact">Contact</a></li>
            </ul>
            <button  className="mt-4 block md:hidden bg-white text-black rounded-lg cursor-pointer hover:bg-neutral-100 py-2 px-3"><a href="#services">Join Now</a></button>
    </div>
    </nav>
  )
}
