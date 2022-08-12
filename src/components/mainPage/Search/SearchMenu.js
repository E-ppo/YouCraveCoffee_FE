import React from "react";
import styled from "styled-components";
import Category from "./Category";
import InputBox from "./InputBox";

const SearchMenu = () => {
  return (
    <Wrap>
      <div className="searchWrap">
        <div className="categoryDiv"><Category /></div>
        <div className="inputDiv"><InputBox /></div>
        <div className="buttonDiv">
          <button>내가 쓴 글</button>
          <button>글쓰기</button>
        </div>
      </div>
    </Wrap>
  )

}
export default SearchMenu;

const Wrap = styled.div`
width: 100%;
display: flex;
  justify-content: center;

.searchWrap{
  max-width: 1200px;
  width: 100%;
  margin: 1rem 0 1rem 0;
  display: flex;
  justify-content: center;

  .categoryDiv{
    display: flex;
    justify-content: center;
    width: 25%;
  }

  .inputDiv{
    width: 50%;
  }
  
  .buttonDiv{
    display: flex;
    justify-content: space-evenly;
    width: 25%;
  } 

}

`;
