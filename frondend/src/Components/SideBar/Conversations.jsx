import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
import { getRandomEmojis } from '../../utils/emojis';

function Conversations() {
  const {loading,conversations}  = useGetConversation()
  console.log(conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {
        conversations.map((conversation,idx)=>(
          <Conversation key={conversation._id} 
          conversation={conversation}
          emoji={getRandomEmojis()}
          lastIdx={idx === conversation.length - 1 }
          />
        ))
      }
        {
          loading ? <span className='loading loading-spinner mx-auto'></span> : null
        }
    </div>
  )
}

export default Conversations