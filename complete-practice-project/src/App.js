import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [newUser, setNewUser] = useState([]);

  const userData = users => {
    console.log(users);

    setNewUser(prevState => {
      return [...prevState, users];
    });
  };

  console.log(newUser);

  return (
    <div>
      <AddUser onAddUser={userData} />

      <UserList users={newUser} />
    </div>
  );
}

export default App;
