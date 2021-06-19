import React, { useState } from "react";

import "./App.css";

import DashboardForm from "./Dashboard/DashboardForm";
import UserList from "./UserList/UserList";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  const submitted = (info) => {
    setUserInfo((users) => {
      return [{info, id: userInfo.length}, ...users];
    })
  }

  return (
    <div>
      <DashboardForm submit={submitted}/>
      <UserList users={userInfo}/>
    </div>
  );
}

export default App;
