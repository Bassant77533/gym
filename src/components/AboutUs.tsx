import Card from "../common/Card"
import Heading from "../common/Heading"
import { CgGym } from "react-icons/cg";
import image1 from "../assets/Rectangle 30.png"
import image2 from "../assets/Rectangle 31.png"
import image3 from "../assets/Rectangle 32.png"
import { BiBlanket } from "react-icons/bi";
import { PiStar } from "react-icons/pi";

const AboutUs = () => {
return (
    <div className="" id="about">
        <div className="px-5 md:px-10 container mx-auto py-32">
            <Heading title="Why Choose Us" subtitle="Exercise is defined as any physical activity that makes your muscles work and requires your body to burn calories."/>
            <div className="  mt-[60px] md:flex md:gap-12">
                <div className= " grid md:grid-cols-2 justify-items-center gap-14">
                    <div className="md:col-span-2"><Card Icon={<CgGym/>} head="Improved Physical Health"  desc="Regular exercise can lead to enhanced cardiovascular health, stronger muscles and bones, improved flexibility, and increased endurance."/></div>
                    <Card Icon={<PiStar/>} head="Enhanced Mental Health"  desc="Exercise releases endorphins, often referred to as the 'feel-good' hormones, which can elevate mood and reduce feelings of stress,"/>
                    <Card Icon={<BiBlanket/>} head="Increased Energy Levels" desc="Regular physical activity improves blood circulation and oxygen delivery to the body, resulting in increased energy levels and reduced fatigue"/>
                    
                </div>
            <div className= " hidden items-stretch md:grid  md:grid-cols-2 grid-rows-2 gap-1">
                <img src={image2} className=" " />
                <img src={image1} className="md:row-span-2 " />
                <img src={image3} className="  " />
            </div>
            </div>
        </div>
    </div>
)
}

export default AboutUs
