
import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const changeUsername = e => {
    setEnteredUsername(e.target.value);
  };

  const changeAge = e => {
    setEnteredAge(e.target.value);
  };

  const AddUserInfo = e => {
    e.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) return;
    if(enteredAge < 1) return;
    props.onAddUserList(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserInfo}>
        <label htmlFor='username'>User</label>
        <input id='username' type='text' onChange={changeUsername} value={enteredUsername}/>
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' onChange={changeAge} value={enteredAge}/>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>

  )
}

export default AddUser;