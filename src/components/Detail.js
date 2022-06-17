import React, { useState } from 'react';

import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePostRQ, likeaddPostRQ} from "../redux/modules/post";
import {readCommentRQ, addCommentRQ} from "../redux/modules/comment";

import styled from "styled-components";
import TextField from '@mui/material/TextField';
import {SiCoffeescript} from 'react-icons/si'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';



function Detail (props) {
    const param = useParams();
    const post_Index = param.index;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const [likeCnt, setLike] = useState(postContent[post_Index].likeCnt);

    const comment_ref = React.useRef();

    React.useEffect(() =>{
    
        dispatch(readCommentRQ(postContent[post_Index].index));
    }, [])



  

    const postContent = useSelector((state)=> state.post.list)
    const postComment = useSelector((state)=> state.comment.list)

    console.log(postComment);

    
    return ( 
<>
        <Wrap>
            <TitleBox> 
                <TitleTextBox><SiCoffeescript color="rosybrown" size="20"/> {postContent[post_Index].title}</TitleTextBox>      
                  {sessionStorage.getItem("username") == postContent[post_Index].username ?
                    <PostInfoBox>
                        <AutoFixHighIcon  sx={{ fontSize: 40, color: "white" }}  style={{ marginLeft:'100px'}}
                            onClick={()=> navigate("/modifyPost/"+post_Index)}>
                            수정</AutoFixHighIcon>
                        <DeleteSweepIcon sx={{ fontSize: 40, color: "white"  }} style={{ marginLeft:'20px'}} onClick={ () =>{ 
                            dispatch(deletePostRQ(postContent[post_Index].id));
                            navigate("/")}} >
                            삭제</DeleteSweepIcon>
                    </PostInfoBox>
                    : ""
                    }
            </TitleBox>
            <div>
                <span style={{color:'white', fontWeight : 'bold' }}>{postContent[post_Index].nickname}</span>
                <span style={{color:'white', fontWeight : 'bold' , marginLeft: '500px' }}>{postContent[post_Index].date }</span>
            </div>
            
            <div>
                <ContentsTextArea>{postContent[post_Index].contents}</ContentsTextArea>
       
                <button onClick={()=>{
                    !(sessionStorage?.getItem("username")) ? 
                    alert("비회원은 좋아요를 할 수 없어요 😢")
                    : dispatch(likeaddPostRQ(postContent[post_Index].id));
                }}> 좋아요</button> <span>{postContent[post_Index].likeCnt}</span>
        
            </div>
            
         
            <CommentBox>
                {!(sessionStorage?.getItem("username")) ?
                 <>                
                 <span>비회원</span>
                 <TextField disabled sx={{width: 350}} variant="standard" id="margin-none" 
                    style={{width:"500px", marginLeft:"10px"}}
                    label="비회원은 댓글을 달 수 없어요 😢 " />
                 </>

                :  
                <>                
                <span>{sessionStorage?.getItem("nickname")}</span>
                <TextField  sx={{width: 350}} label="" variant="standard" placeholder="댓글을 입력하세요 :)" 
                    style={{width:"500px", marginLeft:"10px"}}
                    inputRef={comment_ref} id="margin-none"/>
                </>
} 
                <button onClick={()=>{
                    dispatch(addCommentRQ({
                        nickname : sessionStorage.getItem("nickname"),
                        contents : comment_ref.current.value,
                        post_id : postContent[post_Index].id          
                    }))
                }}  >입력버튼</button>
            </CommentBox>
        </Wrap>


</>   
  );

}

const Wrap = styled.div `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

background-color: rosybrown;
border-radius: 10px;
width: 80%;
min-width: 760px; 
max-width: 800px;

margin-top : 10px;
`;


const TitleBox = styled.div`
display: flex;
align-items: center;
`;

const TitleTextBox = styled.h3`
padding: 10px;
background-color: white;
border-radius: 10px;
width: 500px;
text-align: center;`;


const PostInfoBox = styled.div`
`;

const ContentsTextArea = styled.div`
background-color: white;
width: 750px;
height: 400px;
margin: 20px;
padding: 5px;
border-radius: 10px;
text-align: center;
`;

const CommentBox = styled.div`
display: flex;
align-items: flex-end;
margin: 10px;
background-color: white;
width: 760px;
border-radius: 10px;
`;





export default Detail;