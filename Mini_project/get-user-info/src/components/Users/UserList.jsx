import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css';

const UserList = props => {
  return (
    <Card>
      <ul className={classes.users}>
       {props.users.map(user => 
         <li key={user.id}>
          {user.username} ({user.age} years old)
         </li>)}
      </ul>
    </Card>
  )
};

export default UserList;