import './styles.css'

const UserSelect = (props) => {
  return (
    <div>
      <button className="userToggle" onClick={e => props.toggleCurrentUserId()}>Toggle User</button>
    </div>
  )
}

export default UserSelect;
