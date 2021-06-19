import React from "react";

import styled from "styled-components";

const Notification = styled.div`
    & {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.4);
  }
  & div {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    width: 40%;
    height: 200px;
  }
& div div {
    position: relative;
    top: 0;
    width: 100%;
    border-radius: 10px;
    border-bottom: 10px solid white;
    background: purple;
    color: white;
    height: 50px;
  }
  & h1, p {
    text-align: left;
    margin-left: 10px;
  }
  & div button {
    background: #711573;
    color: white;
    padding: 5px;
    border: none;
    padding: 5px 15px 5px 15px;
    position: relative;
    left: 40%;
    top: 90px;
  }
  div * {
    background: transparent;
  }
`;

const InvalidInput = (props) => {

let message = '';
    if (props.nick.trim().length === 0 || props.age.trim().length === 0) {
    message = <p>Please enter a valid name and age (non-empty values)</p>;
    }
    else { 
        message = <p>age should be higher than 0</p>;
    }
    return (
    <Notification onClick={props.close}>
      <div>
        <div>
          <h1>Invalid input</h1>
        </div>
        {message}
        <button onClick={props.close}>Okay</button>
      </div>
    </Notification>
  );
};

export default InvalidInput;
