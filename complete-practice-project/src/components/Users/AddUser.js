import { useState } from 'react';

const AddUser = props => {
  const [enteredUser, setEnteredUser] = useState({ username: '', age: '' });

  const addUserHandler = event => {
    event.preventDefault();
    if (!enteredUser.username.trim().length || !enteredUser.age.trim().length)
      return;

    if (enteredUser.age < 1) return;

    props.onAddUser(enteredUser);

    setEnteredUser({ username: '', age: '' });
  };

  const usernameChangeHandler = event => {
    setEnteredUser(prevUser => {
      return { ...prevUser, username: event.target.value };
    });
  };

  const ageChangeHandler = event => {
    setEnteredUser(prevAge => {
      return { ...prevAge, age: event.target.value };
    });
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input
        onChange={usernameChangeHandler}
        value={enteredUser.username}
        type="text"
        id="username"
      />

      <label htmlFor="age">Age (Years)</label>
      <input
        onChange={ageChangeHandler}
        value={enteredUser.age}
        type="number"
        id="age"
      />

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
