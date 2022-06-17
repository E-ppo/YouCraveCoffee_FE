import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { loginRQ } from "../redux/modules/user"
//import { useCookies } from 'react-cookie'; 

import TextField from '@mui/material/TextField';


function Login(){

    //const [cookies, setCookie] = useCookies(['id']); 


    const id_ref = React.useRef();
    const pw_ref = React.useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

   
    const LoginDispacth = () =>{
        if(!(id_ref.current.value) || !(pw_ref.current.value)){
            alert("정보를 입력해주세요");
            return;
        }else{
            dispatch(loginRQ({
                username : id_ref.current.value,
                password : pw_ref.current.value
            }))
        }



    }

    return(

        <Wrap>
            <h1> 로그인 :D </h1>
        
        <TextField  inputRef={id_ref} sx={{ m: 1, width: '18ch' }} label="ID를 입력해주세요 :)" variant="standard" />
        <TextField  inputRef={pw_ref} type='password' sx={{ m: 1, width: '18ch' }} label="비밀번호를 입력해주세요 :)" variant="standard" />

        <button type="button" onClick={()=>{
            LoginDispacth();
        }}>로그인</button>



        <div style={{ marginTop : '20px', display:'flex'}}>
             <AiconBox style={{border: '1px solid gray'}}
             onClick={()=> window.open('http://auth.amorossoprc.shop:8081/oauth2/authorization/google?redirect_uri=http://amorossoprc.shop', '_blank')}> 
             <LoginAuthStyle src ="https://velog.velcdn.com/images/eppo/post/110f1b91-b505-4e38-88d1-b01782456b5e/image.png"/> 
                <span style={{paddingTop:'2px', margin:'auto' }}>구글 계정 로그인</span></AiconBox>


                <AiconBox style={{ backgroundColor:'#1EC800', color:'white'}}
                 onClick={()=> window.open('http://auth.amorossoprc.shop:8081/oauth2/authorization/naver?redirect_uri=http://amorossoprc.shop', '_blank')}> 
                    <LoginAuthStyle src ="https://velog.velcdn.com/images/eppo/post/1de1c4b0-42ce-4738-916a-d532d9b13189/image.png"/>
                    <span style={{paddingTop:'3px', margin:'auto'}}>네이버 계정 로그인</span>
                </AiconBox><br/>


                <AiconBox style={{ backgroundColor:'#FEE500' }}
                onClick={()=> window.open('http://auth.amorossoprc.shop:8081/oauth2/authorization/kakao?redirect_uri=http://amorossoprc.shop', '_blank')}>
                    <LoginAuthStyle style={{padding:'2px'}} src ="https://velog.velcdn.com/images/eppo/post/56548270-c0ce-486a-afdf-19c8753bc16b/image.png"/>
                    <span style={{paddingTop:'3px', margin:'auto', color:'##000000'}}>카카오 계정 로그인</span>
                </AiconBox>

        </div> 


    </Wrap>


    )
} 

const Wrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
`;

const LoginAuthStyle = styled.img`
width: 30px;
padding: 5px;
`;

const AiconBox = styled.div`
width: 170px;
border-radius: 5px;
display: flex;
margin-top: 5px;
margin-right : 10px;
align-items: center;
justify-content: flex-start;
`;


export default Login;