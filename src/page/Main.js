import React from "react";

import styled from "styled-components";
import MainBanner from '../assets/mainBanner.png';
import PostList from "../components/mainPage/PostList";
import Ranking from "../components/mainPage/Ranking";
import SearchMenu from "../components/mainPage/Search/SearchMenu";




function Main() {
  return(
    <Wrap>
        <div className="imgDiv">
          <img src={MainBanner} alt="non" />
        </div>
        <Ranking/>
        <SearchMenu/>
        <PostList/>

    </Wrap>


  )



}

const Wrap = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

.imgDiv{
  max-width: 1200px;
  width: 100%;

  img{
    width: 100%;
    max-height: 220px;
    padding: 0.5rem 0 0 0;
    border-radius: 10px;
  }
}



`;

export default Main;