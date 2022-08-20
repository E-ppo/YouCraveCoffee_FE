import React, { useState } from "react";
import styled from "styled-components";
import {Google, Kakao, Naver} from "../../assets/icon"
import { userApi } from "../../api/userApi";

const Login = () => {

  const [id, setId] = useState();
  const [idState, setIdState] = useState("ID는 영 소/대문자, 숫자조합 3~12자입니다. ");
  const [pw, setPw] = useState();
  const [pwState, setPwState] = useState("PW는 영문/숫자/특문 모두 포함, 8자리이상입니다. ");

  const onChangeID = (e) => {
    const idRegex = /^[a-z0-9_-]{3,12}$/;
    const id = e.target.value;
    // console.log() && 
    if (id.length < 3) {
      setIdState("영 소/대문자, 숫자조합 3~12자로 설정해주세요")
    } else if (!idRegex.test(id)) {
      setIdState("아이디 형식이 올바르지 않아요")
    } else {
      setIdState("비밀번호를 입력해주세요")
      setId(id);
    }
  }

  const onChangePW = (e) => {
    const pwRegex = /(?=.*\d)(?=.*?[#?!@$%^&*-])(?=.*[a-zA-ZS]).{8,20}/;
    const pw = e.target.value
    if (pw.length < 8) {
      setPwState("영문/숫자/특문 모두 포함, 8자리이상 설정해주세요")
    } else if (!pwRegex.test(pw)) {
      setPwState("비밀번호 형식이 올바르지 않아요");
    } else {
      setPwState("로그인버튼을 눌러주세요")
      setPw(pw);
    }
  }

  const login = () =>{
    const data={
      username: id,
      password: pw  
    }
    userApi.login(data);

  }

  return (
    <Wrap>
      <InputWrap>
        <div>
          <LavelBox>
            <label>아이디</label>
          </LavelBox>
          <InputBox>
            <input
              type="text"
              onChange={onChangeID} />
          </InputBox>
        </div>
        <Warning><span>{idState}</span></Warning>
      </InputWrap>

      <hr />

      <InputWrap>
        <div>
          <LavelBox>
            <label>비밀번호</label>
          </LavelBox>
          <InputBox>
            <input
              type="password"
              onChange={onChangePW} />
          </InputBox>
        </div>
        <Warning><span>{pwState}</span></Warning>
      </InputWrap>

      <SocialLoginWrap>
          <div><Google/></div>
          <div><Kakao/></div>
          <div><Naver/></div>
      </SocialLoginWrap>

      <Footer onClick={()=>{login()}}>
        로그인
      </Footer>

    </Wrap>
  )
}
export default Login

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
`;

const InputWrap = styled.div`
  width: 100%;
  margin: 0 2rem ;
  div{
    display: flex;
    align-items: center;
  }

`;

const LavelBox = styled.div`
    display: flex;
    justify-content:  flex-end;
    align-items: center;
    width: 30%;
    height: 10px;    
    
    label{
      font-size: 1000;
    }
`;

const InputBox = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;
    height: 50px;

    input{
      text-align: center;
      font-size: 1rem;
      border-radius: 10px;
      outline: none;
      border: 1px solid lightgray;
      width: 60%;
      height: 25px;
    }
    `;

const SocialLoginWrap = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;

div{
  display: flex;
  align-items: center;
  justify-content: center;
  width:45px;
  height: 45px;
  border: 1px solid lightgray;
  border-radius: 50%;
  margin: 1rem 1rem 0 1rem ;
}

`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 0 0;
  width: 100%;
  height: 50px;
  background: rosybrown;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
`;

const Warning = styled.div`
display: flex;
justify-content: center;
div{
  width: 30%;
}
span{
  color: lightgray;
}
`;