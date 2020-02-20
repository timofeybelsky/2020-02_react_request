import React from 'react';

function UserCard (props) {
  return JSON.stringify(props.user, null, 4);
}

export default UserCard;

