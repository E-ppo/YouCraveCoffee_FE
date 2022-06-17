import React from 'react';
import {  Routes,Route } from "react-router-dom";
import {readPostRQ} from "./redux/modules/post"
import {readCommentRQ} from "./redux/modules/comment"


import Signup from "./components/Signup";
import Login from "./components/Login";
import Detail from "./components/Detail";
import MainPage from './components/MainPage';
import WritePost from './components/WritePost';
import Search from './components/Search';

import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import ModifyPost from './components/ModifyPost';

import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import { BsPersonPlusFill } from 'react-icons/bs';
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() =>{
    
    dispatch(readPostRQ());

  }, [])

  return (


    <div className="App" style={{display:'flex', flexFlow : 'column', alignItems : 'center'}} >

      <HeaderMenuBox>
        <BannerUnderLine>
            <HomeIcon sx={{ color: 'rosybrown' }} fontSize="large" 
              onClick={()=>{ window.location.replace("/"); }}/>
              <div style={{ marginRight:'10px' }}>
              {sessionStorage.getItem("username") ? 
               <BiLogOutCircle size="32" color="rosybrown" onClick={()=>{ 
                  sessionStorage.clear();
                  alert("로그아웃 되었습니다");
                  window.location.replace("/")
                }}/>
                :
                <><BiLogInCircle size="32" color="rosybrown" style={{ marginRight:'15px'}}
                onClick={()=>{ navigate("/login");  }}/>
            
                <BsPersonPlusFill size="32" color="rosybrown"
                  onClick={()=>{ navigate("/signup"); }}/></>
              }
              

              </div>
            </BannerUnderLine>
      </HeaderMenuBox>
      
      <Routes>
        <Route path="/" element = {<MainPage/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/signup" element = {<Signup/>}></Route>
        <Route path="/writepost" element = {<WritePost/>}></Route>
        <Route path="/detail/:index" element = {<Detail/>}></Route>
        <Route path="/modifyPost/:index" element = {<ModifyPost/>}></Route>
        <Route path="/searchpost/:word" element = {<Search/>}></Route>
        {/* <Route path="/auth?:" element = {<Search/>}></Route> */}
      </Routes>

    </div>
  );
}


const HeaderMenuBox  = styled.div`
display: flex;
height: 50px;
width: 80%;
width:1000px;
min-width: 500px;
border-radius: 10px;
align-items: center;
justify-content: center;
`;

const BannerUnderLine = styled.div`
display: flex;
border-bottom: 4px double rosybrown;
padding: 4px;
min-width: 300px;
width:80%;
max-width:1000px;
align-items: center;
justify-content: space-between;
`;

const BtnStyle = styled.button`
margin-left: 10px;
`;



export default App;
