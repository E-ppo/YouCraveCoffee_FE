import React from "react";
// import React, { useState } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signupRQ } from "../redux/modules/user"
import TextField from '@mui/material/TextField';

function Signup(){
    const dispacth = useDispatch();

    const id_ref = React.useRef();
    const nick_ref = React.useRef();
    const pw_ref = React.useRef();
    const pwCheck_ref = React.useRef();

    const SignupDispacth = () =>{
        
        if(!(id_ref.current.value)||!(nick_ref.current.value)||!(pw_ref.current.value)||!(pwCheck_ref.current.value))
        { alert("정보를 입력해주세요"); return;}
        if(pw_ref.current.value!==pwCheck_ref.current.value){
            alert("비밀번호가 일치하지 않아요 😢 "); return;
        }

        dispacth(signupRQ({
            username : id_ref.current.value,
            password : pw_ref.current.value,
            passwordCheck : pwCheck_ref.current.value,
            nickname : nick_ref.current.value,
            admin : false
        }))

    }

    return (
        <Wrap>
            <h1>회원가입 :D</h1>

            <TextField inputRef={id_ref} sx={{ m: 1, width: '18ch' }} label="ID를 입력해주세요" variant="standard" />
            <TextField inputRef={nick_ref} sx={{ m: 1, width: '18ch' }} label="닉네임을 입력해주세요" variant="standard" />
            <TextField inputRef={pw_ref} type='password' sx={{ m: 1, width: '18ch' }} label="비밀번호를 입력해주세요" variant="standard" />
            <TextField inputRef={pwCheck_ref} type='password' sx={{ m: 1, width: '18ch' }} label="비밀번호를 확인해주세요" variant="standard" />

            <br/><br/>
            <button onClick={ ()=>{
                SignupDispacth();
                alert("회원가입이 완료되었습니다.");
                window.location.replace("/")              

            }}>회원가입 :)</button>
        </Wrap>
    )


}

const Wrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
`;

export default Signup;