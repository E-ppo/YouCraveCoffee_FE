import React, {useState} from "react";
import styled from "styled-components";
import { YellowLogoKo } from "../../assets/logo"
import AddCafeInfo from "./AddCafeInfo"

function WriteCafeInfo(){
  return(
    <Wrap>

      <TitleInput>
          <input type="text" placeholder="✏ 제목을 입력하세요"></input>
      </TitleInput>

      <hr/>

      <ImageDiv>
        <img src={YellowLogoKo} alt="../../assets/logo/yellowLogoKo.png" />
      </ImageDiv>

      <CafeInfoWrap>
        <AddCafeInfo/>
      </CafeInfoWrap>

      <div className="textAreaDiv">
        <textarea placeholder="내용을 입력해주세요"></textarea>
      </div>

      <WriteButton>등록하기</WriteButton>

      
    </Wrap>
  )

}
export default WriteCafeInfo;

const Wrap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

hr{
  width: 50%;
}
`;

const TitleInput = styled.div`
width: 100%;
  input{
    width:100%;
    font-size: 1.5rem;
    text-align: center;
    border: none;
    outline: none;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content:center;

  img{
    width: 50%;
  }
`;

const CafeInfoWrap = styled.div`
  width: 100%;

  .textAreaDiv{
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0 0 0;

  textarea{
    width: 100%;
    height: 20vh;
  }
}
`;

const WriteButton = styled.div`
display: flex;
justify-content: center;
  width: 20%;
  font-size: rem;
  padding: 1rem;
  margin: 2rem 0 0 0;
  border-radius: 30px;
  border: none;
  color: white;
  background: rosybrown;
`;