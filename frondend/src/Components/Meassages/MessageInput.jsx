import React from 'react';
import { BsSend } from 'react-icons/bs';

function MessageInput() {
  
    return (
        <div className='relative'>
            <form className='px-4 my-3'>
                <div className='w-full relative'>
                    <input
                        type='text'
                        className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white pr-10'
                        placeholder='Send a message'
                    />
                    <button type='submit' className='absolute inset-y-0 right-0 flex items-center pr-3'>
                        <BsSend />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default MessageInput;
