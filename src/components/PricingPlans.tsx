import PricingCard from "../common/PricingCard"


const desc = {
    beginner : ["Lorem ipsum dolor sit amet, " ,"Lorem ipsum dolor sit amet, " ,"Lorem ipsum dolor sit amet, ","Lorem ipsum dolor sit amet, "]
    ,premium : ["Lorem ipsum dolor sit amet, " ,"Lorem ipsum dolor sit amet, ","Lorem ipsum dolor sit amet, ","Lorem ipsum dolor sit amet, ","Lorem ipsum dolor sit amet, "]
}
const PricingPlans = () => {
return (
    <div className="" id="services">
        <div className="container mx-auto px-5 md:px-10 py-10 ">
            <div className="flex justify-between items-center">
                <p className="text-2xl text-[#9E9E9E]"> Pricing Plan</p>
                <div className="font-semibold bg-[#FFFFFF] [box-shadow:0_0_6px_rgba(0,0,0,0.15)] text-[#424242] rounded-2xl p-3 ">Monthly
                <button className="text-[#EEEEEE] bg-[#212121] rounded-xl px-5 py-2 ms-3">Yearly</button></div>
            </div> 
                <p className="text-5xl font-bold text-[#424242] mb-20">Join Today</p>
                <div className="grid md:grid-cols-3 gap-12">
                    <PricingCard type="Beginner Plan" price={2000} desc={desc.beginner}/>
                    <PricingCard type="Premium  Plan" price={5000} theme="dark" desc={desc.premium}/>
                    <PricingCard type="Premium  Plan" price={3000} desc={desc.premium}/>
                </div>
        </div>
    </div>
)
}

export default PricingPlans
