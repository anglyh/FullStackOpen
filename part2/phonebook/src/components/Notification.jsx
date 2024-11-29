
const Notification = ({ message, messageColor }) => {
  if (!message) return null;
  const color = messageColor ? 'success' : 'error';

  return (
    <div className={`messageBox ${color}`}>
      {message}
    </div>
  )
}

export default Notification;