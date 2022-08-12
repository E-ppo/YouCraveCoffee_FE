import React from "react";
import styled from "styled-components";
import PostCode from "../../components/public/PostCode";

const AddCafeInfo = () => {
  return (
    <Wrap>
      <div className="cafeInfo">
        <input type="text" placeholder="카페명을 입력하세요"></input>
        <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
        <hr />
        <div className="addressArea">
          <input type="text" placeholder="카페가 어디에있나요?" />
          {/* <PostCode/> */}
        </div>
      </div>
    </Wrap>
  )
}
export default AddCafeInfo

const Wrap = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 2rem 0 0 0;


.cafeInfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  gap: 10px;

  input{
    text-align: center;
    font-size: 1rem;
    border: none;
    outline: none;
  }

  span{
    width: 100%;
    display: flex;
    justify-content: center;

  }

  hr{
    width: 100%;
  }

  .addressArea{
    display: flex;
    justify-content: center;
    
    input{
      display: flex;
      text-align: center;
      font-size: 1rem;
      border: none;
      border-bottom: 1px solid lightgray;
    }
  }
}
`;