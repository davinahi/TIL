import React, {useState} from 'react';
import InputForm from '../src/components/InputForm';
import UserInfo from '../src/components/UserInfo';
import styled from 'styled-components';
// validation. age는 숫자만, 
function App() {
  const [userInfo, setUserInfo] = useState({
    username : "Max",
    userAge : 31
  }
);
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');

  // Get user name
  const addUserInfoHandler = enteredName => {
    console.log(enteredName)
    setUserInfo(prevInfo => {
      return{
        ...prevInfo,
        username: enteredName
      };
    });
  };

  // Get age name
  const addUserAgeHandler = enteredAge => {
    console.log(enteredAge)
    setUserInfo(prevInfo => {
      return{
        ...prevInfo,
        userAge: enteredAge
      };
    });
  };
  



  return (
    <Div className="App">
      <InputForm onAddNameInfo={addUserInfoHandler} onAddAgeInfo={addUserAgeHandler}/>
      <UserInfo />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  text-align: center;
  margin:40px auto;
  width:500px;
  height:400px;
  border-radius : 8px;
  background:pink;
`

export default App;
