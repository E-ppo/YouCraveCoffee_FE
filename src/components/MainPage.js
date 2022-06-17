import React, { useState } from 'react';

import styled from "styled-components";
import { rankPostRQ, searchPostRQ } from "../redux/modules/post";
import {readCommentRQ} from "../redux/modules/comment";

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'; 
import NativeSelect from '@mui/material/NativeSelect';


import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { BiCoffeeTogo } from 'react-icons/bi';
import {TiPlus} from  'react-icons/ti';
import {MdOutlineManageSearch} from 'react-icons/md'




function MainPage(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchRef = React.useRef();
    const allPostList = useSelector((state) => state.post.list);

    const [postCategory, setCategory] = useState("TOTAL");

    const handleChange = event => {
        setCategory(event.target.value);
    };

    const search = () =>{
        if(!(searchRef.current.value)){
            alert("검색어를 입력해주세요 :) ")
        }else{
            dispatch(searchPostRQ(searchRef.current.value));
        }
        
    } 
    
    
    const write = () =>{
        if(!(sessionStorage.getItem("username"))){
            alert("로그인이 필요합니다. :) ")
            navigate("/login");
        }else { navigate("/writepost"); }
    }
    
 
    
    return (
        <>  
            <MainBanner>
                <img style={{width:'80%', maxWidth:'1000px', minWidth:'760px', minHeight:'150px'}} 
                alt="banner"
                src="https://velog.velcdn.com/images/eppo/post/8c1b1476-18af-435e-8288-ae6609c93939/image.jpg" />
            </MainBanner>

            <MiddleMenuWrap>
                <span style={{marginRight : '10px'}}>게시판</span>           
                <TextField  label="" variant="standard" placeholder="검색어를 입력하세요 :)" inputRef={searchRef} 
                 sx={{width: 350}} id="margin-none"/>
                <MdOutlineManageSearch  size="35" color='rosybrown'
                    onClick={search} style={{marginLeft:'10px'}} >검색</MdOutlineManageSearch>
            </MiddleMenuWrap>

            <SelectPostArea>
       
                <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                    <SelecBox>
                        <NativeSelect defaultValue={postCategory} onChange={handleChange}>
                            <option value={"TOTAL"}>TOTAL</option>
                            <option value={true}>RECIPE</option>
                            <option value={false}>CAFE</option>
                        </NativeSelect>
                    </SelecBox>
                </FormControl>
                
                <div>
                <button>내가 쓴 글</button>
                <button onClick={()=>{
                    dispatch(rankPostRQ());
                }}>랭 크</button>
                </div>

                <div style={{display:'flex', alignItems : 'center', marginLeft:'50%'}}
                     onClick={write}>
                <span style={{color : 'white'}}>글쓰기</span>     
                <BiCoffeeTogo size ="40" color='white'   />
                <TiPlus color='white'  ></TiPlus>
                </div>

            </SelectPostArea>


            <CategoryTitle>
                <table style={{width:'1000px'}}>
                <thead><tr><th></th></tr></thead>
                <tbody>
                    <tr>
                        <th style={{width:'200px'}}>CATEGORY</th>
                        <th style={{width:'400px'}}>TITLE</th>
                        <th style={{width:'150px'}}>WRITER</th>
                        <th>DATE</th>
                    </tr>
                </tbody>
                </table> 
            </CategoryTitle>


            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            {allPostList.map((list, index) =>
            <>
              { String(list.category) === String(postCategory) ?
              <table style={{width:'850px',textAlign:'center' }}>
                <thead><tr><th></th></tr></thead><tbody>
                        <td style={{width:'200px'}}>{list.category ? "RECIPE" : "CAFE"}</td>
                        <td style={{width:'400px'}} onClick={()=> {
                            readCommentRQ(allPostList[index].id)
                            navigate("/detail/"+ index)
                        }}>{list.title}</td>
                        <td style={{width:'150px'}}>{list.nickname}</td>
                        <td>{list.date}</td>
                        </tbody></table>
               
               :""}
               {postCategory === "TOTAL" ? 
                    <table style={{width:'850px', textAlign:'center'}}><thead><tr><th></th></tr></thead><tbody>
                        <td style={{width:'200px'}}>{list.category ? "RECIPE" : "CAFE"}</td>
                        <td style={{width:'400px'}} onClick={()=> {
                            readCommentRQ(allPostList[index].id)
                            navigate("/detail/"+ index)
                        }}>{list.title}</td>
                        <td style={{width:'150px'}}>{list.nickname}</td>
                        <td>{list.date}</td>
                    </tbody></table> : ""
                }
            </>
            )}
                </div>

        </>
    )
}

const MainBanner = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width:1000px;
width : %;
margin-top: 5px;
`;

const MiddleMenuWrap = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
width:1000px;
min-width:600px;
padding-top: 15px;

`;

const CategoryTitle = styled.div`
display: flex;
justify-content: center;
border-bottom: 3px double rosybrown;
margin-bottom: 5px;
max-width:850px;
width:80%;
`;



const SelectPostArea = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;

background-color: rosybrown;
border-radius: 10px;
width: 80%;
max-width: 850px;
min-width: 600px;

margin: 20px;
`;

const SelecBox = styled.div`
width: 100px;
background-color: white;
padding: 5px;
margin-left: 10px;
border-radius: 5px;
`;






export default MainPage;