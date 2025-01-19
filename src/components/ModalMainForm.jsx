import React from 'react'

import { CgClose } from 'react-icons/cg'

const ModalMainForm = ({isModelOpen , setIsModelOpen , children}) => {
    if(!isModelOpen) return
    
  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50'>
        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md' >
            <button className='absolute top-4 right-4 text-gray-300 text-3xl' title='close' onClick={()=> setIsModelOpen(false)} > <CgClose /> </button>
            {children}
        </div>
    </div>
  )
}

export default ModalMainForm