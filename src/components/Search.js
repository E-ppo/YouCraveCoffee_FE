import axios from "axios";

import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux';



function Search(props){
    const param = useParams();
    const navigate = useNavigate();
    const serachWord = param.word;
    const searchList = [];

    (function(serachWord){
        axios.get(`http://api.amorossoprc.shop:8081/api/posts?category=&search=${serachWord}`).then(response => {
            searchList = response.data;
          }).catch(error =>{
            alert(error)
          })   
    })(serachWord)



    console.log(searchList);

    return (
    <> 
    <h1>{serachWord} 검색결과 :) </h1>
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

    {searchList.map((list, index) =>
        {!(searchList) ?
            <h3>게시물이 없어요</h3> :
            <table style={{ width: '1000px', textAlign: 'center' }}>
                <thead><tr><th></th></tr></thead><tbody>
                    <td style={{ width: '200px' }}>{list.category ? "RECIPE" : "CAFE"}</td>
                    <td style={{ width: '400px' }} onClick={() =>
                        navigate("/detail/" + index)}>{list.title}</td>
                    <td style={{ width: '150px' }}>{list.nickname}</td>
                    <td>{list.date}</td>
                </tbody></table>
        }
    )}
    </>


    );
}

const CategoryTitle = styled.div`
display: flex;
justify-content: center;
border-bottom: 3px double rosybrown;
margin-bottom: 5px;
max-width:1000px;
width:80%;
`;


export default Search;