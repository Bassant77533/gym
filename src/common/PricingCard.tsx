import { FaCircleCheck } from "react-icons/fa6";


type TpricingCard={
    theme ?: "dark" | "light" ; 
    type : string ; 
    price : number  ; 
    desc : string []  ;
    
}
const PricingCard = ({theme = "light" , type , price ,  desc}:TpricingCard) => {
  return (
    <div className={` ${theme === "light" ?" bg-[#FFFFFF] text-[#424242]" : "bg-[#111111]  text-[#FFFFFF]"} px-5 py-7  
        [box-shadow:0_8px_24px_rgba(58,53,65,0.2)] hover[box-shadow:0_8px_24px_rgba(58,53,65,0.4)]  hover:scale-103 cursor-pointer transition-all duration-300  rounded-2xl `}>
        <p className="text-[16px] font-medium  mb-2">{type}</p>
        <p className="text-[40px]   font-bold mb-4 ">Rs.{price} <span className="text-lg font-semibold">/ Month</span></p>
        <p className="text-sm   mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
        <ul className=" text-[16px]">
            {desc.map((item , index)=>{
                return  <li key={index} className="flex items-center gap-1 mb-2"><FaCircleCheck /><span></span>{item} </li>
            })}
        </ul>
        <button className={`${theme === "light" ?  "bg-[#111111]  text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#111111]" }  
        rounded-2xl w-full py-4 text-center block mt-28 ` }>Choose Plan</button>
    </div>
  )
}

export default PricingCard
