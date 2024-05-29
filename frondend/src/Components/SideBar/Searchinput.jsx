import React from 'react'
import { IoIosSearch } from "react-icons/io";

function Searchinput() {
  return (
    <div>
        <form className='flex items-center gap-2'>
            <input type="text" placeholder='Search..' className='input input-bordered rounded-full'/>
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <IoIosSearch className='w-6 h-6 outline-none' />  
            </button>
        </form>
    </div>
  )
}

export default Searchinput