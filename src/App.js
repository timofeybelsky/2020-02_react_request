import React     from 'react';
import './App.css';
import UsersList from './components/UsersList';
import UserCard from './components/UserCard'

const testUser = {
  firstName: 'Timofey',
  lastName: 'Belsky',
  email: 'timofey_belsky@frescode.io',
  profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWZgA0_cjl2E8dGrefQsLhzaQoH_WnTxe0c6BWL-YFCTwHzrBM',
};

function App () {
  return (
    <UserCard user={testUser}/>
  );
}

export default App;
