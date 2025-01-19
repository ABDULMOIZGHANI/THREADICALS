import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Login = ({openSignUp}) => {
    const [showPassword , setShowPassword] = useState(false)

  return (
    <div>
        <h2 className='text-2xl font-bold mb-4' >Login</h2>
        <form>
            <div className='mb-4' >
                <label className='block text-gray-700'>Email</label>
                <input type="email" className='w-full px-3 py-2 border' placeholder='Enter Email' />
            </div>
            
            <div className='mb-4'>
                <label className='block text-gray-700'>Password</label>
                <div className='flex brder' >
                    <input type={showPassword ?"text": "password"} className='w-full px-3 py-2 ' placeholder='Enter Password'   />
                    <span className='flex items-center' onClick={()=> setShowPassword(!showPassword)} > <BsEye /> </span>

                </div>
            </div>
            <div className='mb-4 flex items-center justify-between'>
                <label className='inline-flex items-center cursor-pointer'>
                    <input type="checkbox" className='form-checkbox' />
                    <span className='ml-2 text-gray-700 hover:text-red-600' >Remember Me</span>
                </label>
                <Link className='text-red-800 hover:underline' >Forget Password?</Link>
            </div>
            <div className='mb-4'>
                <button type='submit' onClick={(e)=>e.preventDefault()}  className='w-full bg-red-600 text-white py-2' >Login</button>
            </div>
        </form>
        <div className='text-center' >
            <span className='text-gray-700' >Don't Have An Account? </span>
            <button className='text-red-800 hover:underline' onClick={openSignUp} >Sign Up</button>
        </div>
    </div>
  )
}

export default Login