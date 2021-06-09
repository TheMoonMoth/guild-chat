import './styles.css';

const ChatMessage = ({ messageInfo, currentUserId }) => {
  const messageClassName = messageInfo.clientId === currentUserId ? 'sent' : 'received';
  return (
    <p className={messageClassName}>{messageInfo.message}</p>
  )
}

export default ChatMessage;
