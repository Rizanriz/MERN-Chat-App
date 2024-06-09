import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';

function MessageInput() {

    const [message,setMessages] = useState("")
    const {loading,sendMessage} = useSendMessage()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!message) return
        await sendMessage(message)
        setMessages("")
    }
  
    return (
        <div className='relative'>
            <form className='px-4 my-3' onSubmit={handleSubmit}>
                <div className='w-full relative'>
                    <input
                        type='text'
                        className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white pr-10'
                        placeholder='Send a message'
                        value={message} 
                        onChange={(e) => setMessages(e.target.value)}
                    />
                    <button type='submit' className='absolute inset-y-0 right-0 flex items-center pr-3'>
                        {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default MessageInput;

