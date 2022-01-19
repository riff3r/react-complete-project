import { useState, Fragment } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [enteredUser, setEnteredUser] = useState({ username: '', age: '' });
  const [error, setError] = useState();

  const addUserHandler = event => {
    event.preventDefault();

    if (!enteredUser.username.trim().length || !enteredUser.age.trim().length) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age',
      });
      return;
    }

    if (enteredUser.age < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age',
      });
      return;
    }

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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}

      <Card className={classes.input}>
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

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
