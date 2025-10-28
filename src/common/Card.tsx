import type React from "react"

 
type Tcardpops =  {
    Icon : React.ReactNode ; 
    head : string ; 
    desc : string ; 
}
const Card = ({Icon , head , desc } : Tcardpops ) => {
    return (
    <div className="flex gap-6 max-w-[365px]" >
        <div className="bg-[#424242] rounded-full text-white p-1 w-6 h-6 flex items-center justify-center">
        {Icon}
        </div>
        <div>
            <h3 className="text-[#424242] text-2xl font-medium mb-3">{head}</h3>
            <p className="text-[#9E9E9E] text-lg">{desc} </p>
        </div>
    </div>
    )
}

export default Card
