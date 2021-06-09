import React from 'react';

const ChatMessage = ({ messageInfo }) => {
  return (
    <p>{messageInfo.message}</p>
  )
}

export default ChatMessage;
