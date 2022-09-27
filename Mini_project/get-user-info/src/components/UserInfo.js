import styled from "styled-components";

const UserInfo = ({onAddNameInfo, onAddAgeInfo}) => {
    return(
        <Div>
          <User className="user-info">Max (31 years old)</User>
        </Div>
    )
}

const Div = styled.div`
    position: absolute; 
    top: 150px;
    width:100%;
    margin-top:60px;
    text-align: center;
`

const User = styled.div`
    background: #FFB6C1;
    padding-top:12px;
    height: 35px;
    border-bottom: 1px solid pink;
    text-align:center;
`


export default UserInfo;