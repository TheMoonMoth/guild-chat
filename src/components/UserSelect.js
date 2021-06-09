import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const UserSelect = (props) => {
  const userListRef = props.firestore.collection('sample-users');
  const query = userListRef.orderBy('id').limit(4);
  const [users] = useCollectionData(query, {idField: 'id'});

  return (
    <div>
      {users?.map(usr => <p>{usr.name}</p>)}
    </div>
  )
}

export default UserSelect;
