import Heading from "../common/Heading"
import traniee1 from "../assets/traniee1.png"
import traniee2 from "../assets/traniee2.png"
import traniee3 from "../assets/traniee3.png"
import traniee4 from "../assets/traniee4.png"
import traniee5 from "../assets/traniee5.png"
import traniee6 from "../assets/traniee6.png"
const Trainers = () => {
return (
    <div>
        <div className="px-5 md:px-30 container mx-auto py-24  ">
            <Heading title="Meet Our Trainers" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"/>

        <div className="grid grid-cols-5 mt-14 grid-rows-2 gap-6 [&>img]:transition-transform [&>img]:duration-300 [&>img]:ease-in-out [&>img:hover]:scale-105
        [&>img:hover]:[box-shadow:0px_2px_5px_rgba(1,1,1,0.5)]">
            <img src={traniee1} className="w-full rounded-2xl h-full object-cover" alt="" />
            <img src={traniee2} className="w-full rounded-2xl h-full col-span-3 object-cover" alt="" />
            <img src={traniee3} className="w-full rounded-2xl h-full object-cover" alt="" />
            <img src={traniee4} className="w-full rounded-2xl h-full object-cover col-span-2" alt="" />
            <img src={traniee5} className="w-full rounded-2xl h-full object-cover" alt="" />
            <img src={traniee6} className="w-full rounded-2xl h-full object-cover col-span-2" alt="" />
        </div>

        </div>
    </div>
)
}

export default Trainers
