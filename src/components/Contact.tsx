 import contact from "../assets/Frame 34.png"
const Contact = () => {
  return (
     <div id="contact" className=' flex justify-center items-center text-center py-40 object-cover bg-no-repeat' style={{backgroundImage : `url(${contact})`}}>
        <div className='text-white '>
            <p className='text-2xl font-medium'>Call Us Now</p>
            <p className='text-3xl font-bold mt-7'>+94 77 788 1537</p>
        </div>
     </div>
  )
}

export default Contact
