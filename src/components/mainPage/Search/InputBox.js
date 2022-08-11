import React,  { useState }  from "react";
import styled from "styled-components";

import {SearchIcon} from "../../../assets/icon"

const InputBox = () => {
  return (
    <Wrap>
      <div className="inputArea">
        <input type="text"/>
      </div>
      <div className="iconArea"> 
        <SearchIcon/>
      </div>
    </Wrap>
  )
}
export default InputBox

const Wrap = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;

border: 1px solid black;
border-radius: 30px;

.inputArea{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  input{
    display: flex;
    justify-content: center;
    width:95%;
    font-size: 1.5rem;
    border: none;

  }
}
.iconArea{
  width: 7%;
  display: flex;

  align-items: center;

}
`;