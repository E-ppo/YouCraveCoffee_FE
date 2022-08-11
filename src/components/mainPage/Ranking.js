import React from "react";

import styled from "styled-components";
import {BestRanking} from "../../assets/img"
import { LeftArrow, RightArrow }  from "../../assets/icon"; 

const Ranking = () => {
  return (
    <Wrap>
      <div className="rakingDiv">
        <div className="rankingBanner">
          <img src={BestRanking} alt="non" />
        </div>
        <div className="contentsArea">
          <LeftArrow/>
            <div className="contentsBox"></div>
            <div className="contentsBox"></div>
            <div className="contentsBox"></div>
          <RightArrow/>
        </div>

      </div>
    </Wrap>
  )
}

const Wrap = styled.div`
width: 100%;
display: flex;
justify-content: center;

.rakingDiv{
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: lightgray;
   .rankingBanner{
    width: 20%;
    img{
      display: flex;
      align-items: center;
      width: 100%;
    }
  }

  .contentsArea{
    width: 80%;
    display: flex;
    align-items: center;
  
    .contentsBox{
      background: white;
      width: 50%;
      padding: 8rem 2rem 0 0;
      margin: 0 1rem 0 0;
      border-radius: 10px;

    }
  }
  

}
`;


export default Ranking