import WriteCafeInfo from "../components/cafe/WriteCafeInfo";
import WriteRecipe from "../components/recipe/WriteRecipe";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";


function WritePost() {
  const [bodyState, setBodyState] = useState(<WriteRecipe/>);

  return (
    <Wrap>
      <HeaderWrap>

        <button onClick={()=>{setBodyState(<WriteRecipe/>)}}>
          레시피 작성하기
        </button>

        <button onClick={()=>{setBodyState(<WriteCafeInfo/>)}}>
          카페 자랑하기
        </button>
        </HeaderWrap>
        
        <WriteComponentBody>
          {bodyState}
        </WriteComponentBody>

    </Wrap>
  )

}
export default WritePost;

const Wrap = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 2rem;

    button{
      background-color: white;
      border: none;
      color: rosybrown;
      font-size: 1rem;
      font-weight: 500;

      margin: 0 2rem;
    }
`;

const WriteComponentBody = styled.div`
margin: 2rem;
`;
