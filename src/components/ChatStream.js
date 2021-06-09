import React from 'react';
import './styles.css'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import ChatMessage from './ChatMessage'

const ChatStream = (props) => {
  const chatMessageRef = props.firestore.collection('chat-messages');
  const query = chatMessageRef.orderBy('sentAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'userId'})

  return (
    <div className="chatStream">
      {messages?.map(message => (
        <ChatMessage
          messageInfo={message}
          key={message.userId}
          currentUserId={props.currentUserId}
        />
      ))}
    </div>
  )
}

export default ChatStream;
