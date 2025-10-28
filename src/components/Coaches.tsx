import coach1 from "../assets/coach1.png"
import coach2 from "../assets/coach2.png"
const Coaches = () => {
return (
    <div>
        <div className=" flex-wrap-reverse   md:flex-nowrap text-center md:text-start  flex gap-20   px-5 md:px-10 container mx-auto py-20 items-center">
            <div className="w-full md:flex md:w-1/2 min-w-0 shrink   items-center ">
                <img src={coach2} className="  w-full md:w-1/2"/>
                <img src={coach1} className="  w-full md:w-1/2"/>
            </div>
            <div className="w-full md:w-1/2 min-w-0  ">
                <p className="text-[#9E9E9E] text-2xl">Are you looking for a Mentor?</p>
                <p className="text-[#424242] text-5xl font-bold mb-6 mt-4">Coaches</p>
                <p className="text-[#9E9E9E] text-[20px]" >stronger version of yourself. We are dedicated to empowering you on this transformative journey with our state-of-the-art facilities, regardless of your fitness level or goals.</p>
                <button className="text-sm mt-12 text-white px-6 py-3 bg-[#424242] rounded-lg hover:bg-[#525151] cursor-pointer transition-all">Explore  More</button>
            </div>
        </div>
    </div>
)
}

export default Coaches
