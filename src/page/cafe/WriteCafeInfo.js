import React, {useState} from "react";
import styled from "styled-components";
import { YellowLogoKo } from "../../assets/logo"
import AddCafeInfo from "../../components/cafe/AddCafeInfo"

function WriteCafeInfo(){
  return(
    <Wrap>

      <div className="titleInput">
          <input type="text" placeholder="제목을 입력하세요"></input>
      </div>

      <hr/>

      <div className="imageDiv">
        <img src={YellowLogoKo} alt="../../assets/logo/yellowLogoKo.png" />
      </div>

      <div className="cafeWrap">
        <AddCafeInfo/>
      </div>

      <div className="textAreaDiv">
        <textarea placeholder="내용을 입력해주세요"></textarea>
      </div>

      <button>등록하기</button>

      
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
margin: 1rem 0 1rem 0 ;

hr{
  width: 50%;
}

.titleInput{
  input{
    font-size: 1rem;
    text-align: center;
    border: none;
    outline: none;
  }
}

.imageDiv{
  display: flex;
  justify-content:center;

  img{
    width: 50%;
  }
}

.cafeWrap{
  width: 100%;
}

.textAreaDiv{
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0 0 0;

  textarea{
    width: 50%;
    height: 20vh;
  }
}

button{
  width: 20%;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 2rem 0 0 0;
  border-radius: 30px;
  border: none;
  color: white;
  background: rosybrown;
}

`;
