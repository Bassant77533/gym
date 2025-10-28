import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci"
import Logo from "../assets/Logo.png"
const Footer = () => {

  return (
    <div className="bg-black">
        <div className="pt-10 container mx-auto px-5 md:px-10 ">
        <div className="grid md:grid-cols-5 gap-3 items-center ">
            <div className="">
                <img src={Logo} alt="" className="w-20 h-20"  />
                <p className="text-white text-lg mt-9">© 2025 by Chamith Fitness Gyms</p>
                <p className="text-white text-[16px] mt-6">chamithfitness@gmail.com</p>
                <ul className="flex gap-3 text-2xl text-white mt-6 [&>li:hover]:text-red-500 transition-colors">
                    <li><CiTwitter/></li>
                    <li><CiFacebook/></li>
                    <li><CiInstagram/></li>
                </ul>
            </div>
            <div>
                <p className="font-medium text-white text-lg mb-6">Quick Links</p>
                <ul className="text-[16px] flex flex-col gap-3 text-white a:hover [&>li>a:hover]:text-red-500 transition-colors">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div>
                <p className="font-medium text-white text-lg mb-6">Branches</p>
                <ul className="text-[16px] flex flex-col gap-3 text-white [&>li>a:hover]:text-red-500 transition-colors ">
                    <li><a href="">Galle</a></li>
                    <li><a href="">Kurunduwaththa</a></li>
                    <li><a href="">Kottawa</a></li>
                    <li><a href="">Mathara</a></li>
                </ul>
            </div>
            <div>
                <p className="font-medium text-white text-lg mb-6 ">Lorem ipsum.</p>
                <ul className="text-[16px] flex flex-col gap-3 text-white [&>li>a:hover]:text-red-500 transition-colors">
                    <li><a href="">Lorem</a></li>
                    <li><a href="">Lorem</a></li>
                    <li><a href="">Lorem</a></li>
                    <li><a href="">Lorem</a></li>
                </ul>
            </div>
            <div>
                <p className="font-medium text-white text-lg mb-6">Lorem ipsum.</p>
                <ul className="text-[16px] flex flex-col gap-3 text-white [&>li>a:hover]:text-red-500 transition-colors">
                    <li><a href="">Lorem</a></li>
                    <li><a href="">Lorem</a></li>
                    <li><a href="">Lorem</a></li>
                    <li><a href="">Lorem</a></li>
                </ul>
            </div>
            
        </div>
        <p className="text-center py-4 text-white">© 2025 by Chamith Fitness Gyms. All rights reserved. Powered and secured by Orionwave-Team</p>
    </div>
    </div>
  )
}

export default Footer
