import React from 'react';

const UserSelect = ({ users }) => {
  console.warn('slime users', users);
  return (
    <div>
      {users?.map(usr => <p>{usr.name}</p>)}
    </div>
  )
}

export default UserSelect;
