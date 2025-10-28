
type THeading = {
    title : string ; 
    subtitle : string ; 
}

const Heading = ({title , subtitle } :THeading ) => {
  return (
    <div className="text-center max-w-[704px] mx-auto">
        <h1 className="mb-4 text-5xl text-[#424242] font-bold ">{title}</h1>
        <p className="text-2xl text-[#9E9E9E] font-normal">{subtitle}</p>
    </div>
  )
}

export default Heading
