import React from "react";
import styled from "styled-components";
import {YellowLogoEn} from "../assets/logo"

const Header =()=>{
  return(
    <Wrap>
      <div className="headerManu">      
        <div className="logoArea">
          <img src={YellowLogoEn}/>
        </div>
        <div className="blank">
          Eppo님 어서오세요 :D
        </div>
        <div className="buttonArea">
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
    </Wrap>
  ) 
} 
export default Header;

const Wrap = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: center;

.headerManu{
  max-width: 1200px;
  width: 100%;
  background: rosybrown;
  border-radius: 30px 5px 30px 5px;
  display: flex;

  .logoArea{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0 0 3rem;
    img{
      height: 80%;
    }
  }
  .blank{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: white;
  }
  .buttonArea{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}

`;
