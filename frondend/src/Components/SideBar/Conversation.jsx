import React from 'react'

function Conversation() {
    return (
        < >
            <div className='flex gap-2 items-center hover:bg-sky-500 roundedp-2 py-1 cursor-pointer'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjO42nkg5RWeA6roUeQEf1TcSykrEBsMt3rw&s" alt="user-avatar" />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>John wick</p>
                        <span className='text-xl'>✨</span>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'/>
        </>
    )
}

export default Conversation