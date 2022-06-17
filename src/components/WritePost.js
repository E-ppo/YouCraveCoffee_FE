import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl'; 
import NativeSelect from '@mui/material/NativeSelect';
import Input from '@mui/material/Input';

import { writePostRQ } from "../redux/modules/post";

import styled from "styled-components";

function WritePost(){
    const [postCategory, setCategory] = useState(true);
    const [imgFile, setImgFile] = useState("abc");
    const title_ref = React.useRef();
    const contents_ref = React.useRef();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ariaLabel = { 'aria-label': 'description' };

    // 카테고리 셀렉트 이벤트 핸들러
    const handleChange = event => { setCategory(event.target.value);};

    // 업로드 이미지
    const uploadIMG = async (e) => { fileImagePreview(e.target.files[0]);}

    // 인코딩 부분
    const fileImagePreview = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImgFile(reader.result);
                resolve();
                // console.log("여기는 업로드 이미지", imgFile);
        };});};

    const postActing = ()=>{

        console.log(postCategory, title_ref.current.value, contents_ref.current.value, imgFile);
        dispatch(writePostRQ({
            category: postCategory,
            title : title_ref.current.value,
            contents : contents_ref.current.value,
            img : imgFile
        }));
        

    }

    return (
        <div style={{display :'flex', alignItems:'center', flexDirection:'column'}}>
            <h1>게시판 등록 :)</h1>
            
            <div style={{display:"flex"}}>                 
                <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                    <InputLabel variant="standard" htmlFor="uncontrolled-native"> CATEGORY </InputLabel>
                    <NativeSelect defaultValue={postCategory} onChange={handleChange}>
                        <option value={true}>RECIPE</option>
                        <option value={false}>CAFE</option>
                    </NativeSelect>
                </FormControl>

                <div style={{display:'flex', alignItems:'flex-end', padding:'12px' }}>
                    <Input inputRef={title_ref} sx={{ m: 1, minWidth: 400 }} placeholder="제목을 입력해주세요 :)" inputProps={ariaLabel} /></div>
                </div>
            
            <div style={{display:'flex', flexDirection : 'column'}}>
                {/* <Img src={imgFile}/><br/> */}
                <input type="file" onChange={uploadIMG} /> <br/>

                    <label style={{textAlign:'center'}} >🌼 내용을 적어주세요 🌼</label><br/>
                    <textarea ref={contents_ref} className="form-control" id="exampleFormControlTextarea1"
                        style={{ width: '500px', height: '200px', resize: 'none' }}></textarea>
            </div>

            <div>
                <button>목록으로</button>
                <button onClick={()=>{
                    postActing();
                    alert("등록이 완료되었습니다 :) ");
                    window.location.replace("/");
                }}>등록</button>
            </div>



        </div>
    )
}

const Img = styled.img`
margin: 20px 0px;
max-width : 300px;
max-height : 300px;
margin: auto;
`;

export default WritePost;