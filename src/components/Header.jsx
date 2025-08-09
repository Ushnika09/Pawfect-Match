import Hamberger from './Hamberger'

function Header() {

  
  return (
    <div className='shadow flex justify-between items-center'>
        <p className='text-2xl  font-semibold md:text-3xl md:font-bold text-[#00BFFF] mx-[2.5rem] p-[1rem] '>🐾 Pawfect Match</p>
        <Hamberger/>
    </div>
  )
}

export default Header