const UserSelect = (props) => {
  return (
    <div>
      <button onClick={e => props.toggleCurrentUserId()}>Change User</button>
    </div>
  )
}

export default UserSelect;
