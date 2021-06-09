import React, { useState } from 'react';
import './styles.css'

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
    <form onSubmit={postChatMessage} className="chatForm">
      <input
        className="chatInput"
        value={formValue}
        onChange={e => setFormValue(e.target.value)}
        placeholder="Enter chat message here..."
      />
      <button
        className="chatSubmit"
        type="submit"
        disabled={!formValue}
      >
        Send
      </button>
    </form>
  )
}

export default ChatForm;
