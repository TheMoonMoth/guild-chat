import './styles.css';

const ChatMessage = ({ messageInfo, currentUserId }) => {
  const messageClassName = messageInfo.clientId === currentUserId ? 'sent' : 'received';
  return (
    <p className={`messageContainer ${messageClassName}`}>{messageInfo.message}</p>
  )
}

export default ChatMessage;
