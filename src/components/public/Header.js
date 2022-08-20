import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {TextLogo} from "../../assets/logo"
import BasicModal from "./BasicModal"
import {Login, SignUp} from "../member"

const Header =()=>{
  const [modalOpen, setModalOpen] = useState(false);
  const [modalState, setModalState] = useState();
  const [modalName, setModalName] = useState("");
  const openModal = () => { setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); };

  const [windowWidth, setWindowWidth] = useState();
  const handleResize = () =>{
    setWindowWidth(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize);
    return()=>{
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return(
    <>
      <Wrap>
        <div className="headerManu">
          <div className="logoArea">
            <img src={TextLogo} />
          </div>
          { windowWidth < 550 ? 
          ""
          :       
            <div className="blank">
              Eppo님 어서오세요 
            </div>
          }
   
          <div className="buttonArea">
            <button
              onClick={() => {
                openModal();
                setModalName("LogIn");
                setModalState(<Login />);
              }}>로그인</button>

            <button
              onClick={() => {
                openModal();
                setModalName("SignUp");
                setModalState(<SignUp />);
              }}>회원가입</button>
          </div>
        </div>
      </Wrap>

      <BasicModal 
        open={modalOpen}
        close={closeModal}
        header={modalName}>
          {modalState}
      </BasicModal>
      
    </>
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
      height: 95%;
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
