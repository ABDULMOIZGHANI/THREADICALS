import React, {useState } from 'react'

const ChangeAddress = ({ setAddress, setIsModelOpen}) => {
    
    const [newAddress, setNewAddress] = useState("");
    
  return (
      <div>
        <h2 className='font-bold mb-4 text-xl'>Change Address</h2>
        <input className='border p-2 w-full mb-4'  type="text" onChange={(e)=> setNewAddress(e.target.value)}   placeholder='Enter New Address here...' />
        <div className='flex justify-end '>
        <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2' onClick={()=> setIsModelOpen(false)} >Cancel</button>
        <button className='bg-blue-500 text-white py-2 px-4 rounded mr-2' onClick={()=>setAddress(newAddress) || setIsModelOpen(false) } >Save Address</button>
        </div>
    </div>
  )
}

export default ChangeAddress