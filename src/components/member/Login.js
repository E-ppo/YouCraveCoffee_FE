import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Wrap>
      <div className="idInputDiv">
        <div>아이디</div>
        <div>
          <input></input>
        </div>
      </div>

      <div className="passwordInputDiv">
        <div>비밀번호</div>
        <div>
          <input></input>
        </div>
      </div>


      <button>로그인</button>

      <div>

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

  .idInputDiv{
    display: flex;
  }
  
  .passwordInputDiv{
    display: flex;
  }
`;