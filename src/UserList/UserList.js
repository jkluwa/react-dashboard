import React from 'react';

import UserItem from './UserItem';
import styled from 'styled-components';

const List = styled.div`
background: white;
border-radius: 10px;
padding: 0.1px 0 10px 0;
margin-top: 10px;
`

const UserList = (props) => {

    let comment = null;
    if (props.users.length === 0) {
        comment = <List>No accounts to show.</List>;
    }
    else {
        comment = <List>{props.users.map(user => <UserItem user={user.info.nick} age={user.info.age} key={user.id} />)}</List>;
    }
    return (
        <div>{comment}</div>
        );

}

export default UserList;