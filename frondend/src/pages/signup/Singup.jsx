import React, { useState } from 'react'
import GenderCheckbox from './Gender'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'

function Singup() {

  const [input,setInputs] = useState({
    fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  })

  const {loading,signup} = useSignUp()

  const handleCheckboxChange = (gender)=>{
      setInputs({...input,gender})
  } 
   
  const handleSubmit = async(e)=>{
    e.preventDefault()
    await signup(input)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>SingUp
          <span className='text-blue-500'> Chit Chat</span></h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='labrl p-2'>
                <span className='text-base label-text'>Full name</span>
              </label>
              <input value={input.fullname} onChange={(e)=>setInputs({...input,fullname:e.target.value})} type="text" placeholder='John wick' className='w-full input input-bordered h-10'/>
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>User name</span>
              </label>
              <input value={input.username} onChange={(e)=>setInputs({...input,username:e.target.value})} type="text" placeholder='John' className='w-full input input-bordered h-10'/>
            </div>

            <div>
            <label className='label p-2'>
              <span className='teaxt-base label-text'>Password</span>
            </label>
            <input value={input.password} onChange={(e)=>setInputs({...input,password:e.target.value})} type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='teaxt-base label-text'>Confirm Password</span>
            </label>
            <input value={input.confirmPassword} onChange={(e)=>setInputs({...input,confirmPassword:e.target.value})} type="password" placeholder='Confirm password' className='w-full input input-bordered h-10'/>
          </div>

          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={input.gender}/>

          <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' >
            Already have an account</Link>

            <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign up"}</button>
          </div>

          </form>
      </div>
    </div>

  )
}

export default Singup