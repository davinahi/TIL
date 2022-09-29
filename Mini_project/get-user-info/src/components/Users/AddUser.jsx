
import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const changeUsername = e => {
    setEnteredUsername(e.target.value);
  };

  const changeAge = e => {
    setEnteredAge(e.target.value);
  };

  const AddUserInfo = e => {
    e.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title : 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      })
      return;
    } 
    if(enteredAge < 1){
      setError({
        title : 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      })
      return;
    };

    props.onAddUserList(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
      <Card className={classes.input}>
        <form onSubmit={AddUserInfo}>
          <label htmlFor='username'>User</label>
          <input id='username' type='text' onChange={changeUsername} value={enteredUsername}/>
          <label htmlFor='age'>Age</label>
          <input id='age' type='number' onChange={changeAge} value={enteredAge}/>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>

  )
}

export default AddUser;