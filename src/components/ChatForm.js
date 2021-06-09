import React, { useState } from 'react';

const ChatForm = (props) => {
  const [formValue, setFormValue] = useState();

  const postChatMessage = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const chatMessageRef = props.firestore.collection('chat-messages');
    const { currentUserId } = props;

    await chatMessageRef.add({
      message: formValue,
      clientId: currentUserId,
      sentAt: Date.now(),
    });

    setFormValue('');
  }

  return (
    <form onSubmit={postChatMessage}>
      <input value={formValue} onChange={e => setFormValue(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  )
}

export default ChatForm;
