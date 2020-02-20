import React from 'react';

function UserCard (props) {
  const { user } = props;
  return (
    <div>
      <img src={user.profilePicture} alt="user picture"/>
      <div>{`${user.firstName} ${user.lastName}`}</div>
    </div>
  );
}

export default UserCard;

