import React, { useState } from "react";

import styled from "styled-components";
import InvalidInput from "./InvalidInput";

const Dashboard = styled.form`
border-radius: 10px;
background-color: ${props => props.notification ? '#aaa' : 'white'};
text-align: left;
width: 40%;
& label {
  font-weight: bold;
  font-size: 20px;
}
& input {
  display: block;
  width: 94%;
  border: gray solid 1px;
}

& button {
  background: #711573;
  color: white;
  padding: 5px;
  border: none;
  padding: 5px 15px 5px 15px;
}

* {
text-align: left;
  margin: 10px;
  background-color: transparent;
}
`;


const DashboardForm = (props) => {
    const [notificationOn, setNotificationOn] = useState(false);
    const [nick, setNick] = useState('');
    const [age, setAge] = useState('');




    const changeNickHandler = event => {
        setNick(event.target.value);
    }
    const changeAgeHandler = event => {
        setAge(event.target.value);
    }
    const closeNotification = () => {
        setNotificationOn(false);
    }
    const submitted = (event) => {
        event.preventDefault();
        if(nick.trim().length === 0 || age.length === 0 || age < 0) {
            setNotificationOn(true);
        }
        else {
          props.submit({nick: nick, age: age});
          setNick('');
          setAge('');
        }
    }


  return (
      <div>
    <Dashboard notification={notificationOn} onSubmit={submitted}>
      <label>Username</label>
      <input type="text" value={nick} onChange={changeNickHandler} />
      <label>Age (Years)</label>
      <input type="number" value={age} onChange={changeAgeHandler} />
      <button type="submit">Add User</button>
    </Dashboard>
    {notificationOn && <InvalidInput close={closeNotification} nick={nick} age={age} />}
    </div>
  );
};

export default DashboardForm;
