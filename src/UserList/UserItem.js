import React from 'react';

import styled from 'styled-components';

const UserInfoStyle = styled.div`
width: 90%;
height: 30px;
border: #aaa solid 1px;
vertical-align: middle;
margin-top: 9.9px;
`


const UserItem = (props) => {
    return (
        <UserInfoStyle><p>{props.user} ({props.age} years old)</p></UserInfoStyle>
    );
}

export default UserItem;