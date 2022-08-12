import React from "react";
import styled from "styled-components";

const SignUp = () =>{
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

    <hr/>

    <div className="divStyle">
      <div className="textArea">
        <label>비밀번호</label>
        </div>
      <div className="inputArea">
        <input></input>
      </div>
    </div>

    <div className="divStyle">
      <div className="textArea">
        <label>비밀번호 확인</label>
        </div>
      <div className="inputArea">
        <input></input>
      </div>
    </div>

    <hr/>

    <div className="divStyle">
      <div className="textArea">
        <label>닉네임</label>
        </div>
      <div className="inputArea">
        <input></input>
      </div>
    </div>


    <div className="logInButtonDiv">
      회원가입
    </div>

   

  </Wrap>
  )
}
export default SignUp


const Wrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

  hr{
    border: 0.5px solid lightgray;
    width: 80%;
    border : 0px;
    border-top: 1px dashed #663399;
    
  }

  .divStyle{
    width: 100%;
    display: flex;
    padding: 0.5rem 0 0.5rem 0;

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
    width: 100%;
    
    background: rosybrown;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;

    
  }


`;