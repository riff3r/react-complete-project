import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserLists from './components/Users/UserLists';

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

      <UserLists users={newUser} />
    </div>
  );
}

export default App;
