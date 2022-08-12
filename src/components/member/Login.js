import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Wrap>
      
      <div className="divStyle">
        <div className="textArea">
          <label>아이디</label>
        </div>
        <div className="inputArea">
          <input type="text"></input>
        </div>
      </div>

      <div className="divStyle">
        <div className="textArea">
          <label>비밀번호</label>
          </div>
        <div className="inputArea">
          <input></input>
        </div>
      </div>

      <div className="logInButtonDiv">
        로그인
      </div>

      <div className="socialLoginDiv">
        <div>카카오</div>
        <div>구글</div>
        <div>로그인</div>
      </div>

    </Wrap>
  )
}
export default Login

const Wrap = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 100%;

  .divStyle{
    width: 100%;
    display: flex;
    padding: 1rem 0 0 0;

    .textArea{
      display: flex;
      justify-content:  flex-end;
      align-items: center;
      width: 30%;
    }

    .inputArea{
      display: flex;
      justify-content: center;
      width: 70%;

      input{
        font-size: 1rem;
        border-radius: 30px;
        border: 1px solid lightgray;
        padding: 0.5rem;
      }
    }
  }

  .logInButtonDiv{
    margin: 2rem 0 0 0;
    padding: 0.5rem;
    width: 30%;
    
    background: rosybrown;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    color: white;
    font-weight: 700;

    
  }

  .socialLoginDiv{
    display: flex;
    margin: 1rem 0 1rem 0;
    width: 100%;
    justify-content: space-evenly;

    div{
      width: 60px;
      height: 60px;
      display: flex;
      color: white;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      background: rosybrown;
    }
  }

`;