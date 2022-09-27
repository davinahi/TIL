import React, {useState} from 'react';
import styled from 'styled-components';

const InputForm = ({onAddNameInfo, onAddAgeInfo}) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const changeUserHandler = e => {
    setEnteredName(e.target.value);
  }

  const changeAgeHandler = e => {
    setEnteredAge(e.target.value);
  }

  const submitHandler = event => {
    event.preventDefault();
    onAddNameInfo(enteredName);
    onAddAgeInfo(enteredAge)
    setEnteredName('');
    setEnteredAge('');
    console.log(enteredName, enteredAge)
  }

    return(
        <Form className="user-form" onSubmit={submitHandler}>
        <Div>
          <label htmlFor='user-name' className="user-name">Username</label>
          <Input id='user-name' onChange={changeUserHandler} value={enteredName}/>
        </Div>
        <Div>
          <label htmlFor='user-age' className="user-age">Age (Years)</label>
          <Input id='user-age' onChange={changeAgeHandler} value={enteredAge}/>
        </Div>
        <Button type="submit">Add User</Button>
      </Form>
    )
}

const Form = styled.form`
    position: absolute;
    top:10px;
    left:80px;
    width:300px;
    margin:20px;
`
const Input = styled.input`
    display:block;
    border: 1px solid lightgray;
    border-radius: 3px;
    width: 100%;
    height: 25px;
    margin-top: 5px;
    margin-bottom: 10px;
`
const Button = styled.button`
    border: none;
    background: lightgreen;
    width:80px;
    height:30px;
    &:hover{
      background: green;
    }
    // z-index:999;
`
const Div = styled.div`
    text-align: left;
`

export default InputForm;