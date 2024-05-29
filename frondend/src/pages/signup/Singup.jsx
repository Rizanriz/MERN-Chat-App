import React from 'react'
import GenderCheckbox from './Gender'

function Singup() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>SingUp
          <span className='text-blue-500'> Chit Chat</span></h1>
          <form>
            <div>
              <label className='labrl p-2'>
                <span className='text-base label-text'>Full name</span>
              </label>
              <input type="text" placeholder='John wick' className='w-full input input-bordered h-10'/>
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>User name</span>
              </label>
              <input type="text" placeholder='John' className='w-full input input-bordered h-10'/>
            </div>

            <div>
            <label className='label p-2'>
              <span className='teaxt-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='teaxt-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10'/>
          </div>

          <GenderCheckbox/>

          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' >
            Already have an account</a>

            <div>
            <button className='btn btn-block btn-sm mt-2'>Sign up</button>
          </div>

          </form>
      </div>
    </div>

  )
}

export default Singup