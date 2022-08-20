import React, { useState } from "react";
import styled from "styled-components";
import { userApi } from "../../api/userApi";

const SignUp = () =>{

  const [id, setId] =useState();
  const [idState, setIdState] = useState("영 소/대문자, 숫자조합 3~12자로 설정해주세요");
  const [pw, setPw] = useState();
  const [pwCheck, setPwCheck] = useState();
  const [pwState, setPwState] = useState("영문/숫자/특문 모두 포함, 8자리이상 설정해주세요");
  const [nickName, setNickName] = useState();
  const [nickState, setNickState] = useState("한/영 2~12자로 설정해주세요");

  const onChangeID = (e) =>{
    const idRegex = /^[a-z0-9_-]{3,12}$/;
    const id = e.target.value;
    // console.log() && 
    if(id.length < 3 ){
      setIdState("영 소/대문자, 숫자조합 3~12자로 설정해주세요")
    }else if(!idRegex.test(id)){
      setIdState("아이디 형식이 올바르지 않아요")
    }else {
      setIdState("사용 가능합니다. ")
      setId(id);
    }
  }
  
  const onChangePW = (e) =>{
    const pwRegex = /(?=.*\d)(?=.*?[#?!@$%^&*-])(?=.*[a-zA-ZS]).{8,20}/;
    const pw = e.target.value
    if (pw.length < 8) {
      setPwState("영문/숫자/특문 모두 포함, 8자리이상 설정해주세요")
    } else if (!pwRegex.test(pw)) {
      setPwState("비밀번호 형식이 올바르지 않아요");
    } else {
      setPwState("사용 가능합니다. ");
      setPw(pw);
    }
  }

  const onChangePwChecker = (e) =>{
    const pwchecker = e.target.value;
    if(pwchecker === pw){
      setPwState("비밀번호가 일치합니다")
      setPwCheck(pwchecker)
    }else(
      setPwState("비밀번호가 불일치해요")
    )
  }

  const onChangeNickname = (e) =>{
    const nameRegex = /^[a-zA-Zㄱ-힣0-9-_.]{2,12}$/;
    const nick = e.target.value;

    if(nick.length < 2){
      setNickState("한/영 2~12자로 설정해주세요")
    }else if(!nameRegex){
      setNickState("닉네임 형식에 맞지않아요")
    }else{
      setNickState("사용 가능합니다. ")
      setNickName(nick)
    }

  }

  const signUP = () =>{
    const data = {
      username: id,
      nickname: nickName,
      password: pw,
      passwordCheck: pwCheck
    }
    userApi.sighUp(data);
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
      </InputWrap>

      <InputWrap>
        <div>
          <LavelBox>
            <label>비밀번호 확인</label>
          </LavelBox>
          <InputBox>
            <input
              type="password"
              onChange={onChangePwChecker}></input>
          </InputBox>
        </div>
        <Warning><span>{pwState}</span></Warning>
      </InputWrap>

      <hr />

      <InputWrap>
        <div>
          <LavelBox>
            <label>닉네임</label>
          </LavelBox>
          <InputBox>
            <input 
              type="text"
              onChange={onChangeNickname}></input>
          </InputBox>
        </div>

        <Warning><span>{nickState}</span></Warning>
      </InputWrap>

    <LoginFooter onClick={()=>{signUP()}}>
      회원가입
    </LoginFooter>

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

const LoginFooter = styled.div`
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
