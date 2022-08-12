import React from "react";
import styled from "styled-components";

import { YellowLogoKo } from "../../assets/logo"

const PostList = () =>{
  return (
    <Wrap>
      <div className="list">
        <div className="categoryIcon"></div>
        <div className="card">
          <div 
            className="imageBox">
            <img src={YellowLogoKo} alt="../../assets/logo/yellowLogoKo.png" />
          </div>

          <div
            style={{
              fontSize: "1.5rem",
              padding: "1rem 0 0 0"
            }}>
            <span>Title</span>
          </div>

          <div style={{
            padding: "0.5rem 0 0 0",
            height: "100%"
          }}>
            <span>ContentsContentsContents...</span>
          </div>

          <div className="cardfooter">
            <div>❤️  0</div>
            <div>0000.00.00</div>
          </div>
        </div>
      </div>


      <div className="list">
        <div className="categoryIcon"></div>
        <div className="card">
          <div className="imageBox">
            <img src={YellowLogoKo} alt="../../assets/logo/yellowLogoKo.png" />
          </div>

          <div
            style={{
              fontSize: "1.5rem",
              padding: "1rem 0 0 0"
            }}>
            <span>Title</span>
          </div>

          <div style={{
            padding: "0.5rem 0 0 0",
            height: "100%"
          }}>
            <span>ContentsContentsContents...</span>
          </div>

          <div className="cardfooter">
            <div>❤️  0</div>
            <div>0000.00.00</div>
          </div>
        </div>
      </div>


      <div className="list">
        <div className="categoryIcon"></div>
        <div className="card">
          <div className="imageBox">
            <img src={YellowLogoKo} alt="../../assets/logo/yellowLogoKo.png" />
          </div>

          <div
            style={{
              fontSize: "1.5rem",
              padding: "1rem 0 0 0"
            }}>
            <span>Title</span>
          </div>

          <div style={{
            padding: "0.5rem 0 0 0",
            height: "100%"
          }}>
            <span>ContentsContentsContents...</span>
          </div>

          <div className="cardfooter">
            <div>❤️  0</div>
            <div>0000.00.00</div>
          </div>
        </div>
      </div>

    </Wrap>
  )

}
export default PostList

const Wrap = styled.div`
margin: 1rem 0 0 0;
max-width: 1200px;
width: 100%;
display: flex;
justify-content: center;

.list{
  display: flex;
  justify-content: space-between;

  width: 100%;

  .categoryIcon{
    width: 80px;
    height: 80px;
    background: rosybrown;
    border-radius: 50%;
    position: absolute;
  }

  .card{
    display: flex;
    flex-direction: column;
    min-width: 20%;
    width: 100%;
    max-height: 350px;
    border-radius: 20px;
    border: 1px solid lightgray;
    margin: 5%;
    align-items: center;

    .imageBox{
      display: flex;
      justify-content: center;
      margin: 3% 0 0 0;

      img{
        width: 50%;
      }
    }
  
    .cardfooter{
      width: 100%;
      padding: 1rem;
      justify-content: space-around;
      display: flex;

      div{
        display: flex;
        align-items: center;
      }
    }
  }
}

`;