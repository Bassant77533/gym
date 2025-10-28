import home from "../assets/Home.jpg"
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

export const Hero = () => {
    return (
        <div id="home" className="bg-black text-white flex justify-between bg-cover " style={{backgroundImage : `url(${home})`}}>
            <div className="flex items-center px-5 md:px-10 container mx-auto bg-center h-screen  "  >
                <div className="max-w-lg">
                    <h1 className="text-7xl font-bold">Live You Best Life</h1>
                    <p className="mt-6 text-xl text-[#BDBDBD]">At Power World Gyms, we believe that fitness is not just a destination; it's a journey towards a healthier</p>
                    <button className=" mt-15 bg-white text-black rounded-lg cursor-pointer hover:bg-neutral-100 py-2 px-5">Get started</button>
                    <ul className="mt-5 flex gap-3 text-2xl ">
                        <li><CiTwitter/></li>
                        <li><CiFacebook/></li>
                        <li><CiInstagram/></li>
                    </ul>
                </div>
            </div>
            <div id="triangle-bottomright" className="hidden md:block self-end"> </div>
        </div>
    )
}
