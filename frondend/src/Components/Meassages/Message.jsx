import React from 'react'

function Message() {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rouded-full'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&s" alt="" />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500`}>Hi whats up</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:34</div>
        </div>
    )
}

export default Message