import axios from "axios";

const READCOMMENT = 'miniproject/READCOMMENT'
const ADDCOMMENT = 'miniproject/ADDCOMMENT' 
const MODIFYCOMMENT = 'miniproject/ADDCOMMENT'
const DELETECOMMENT = 'miniproject/DELETECOMMENT'

const initialState = { 
    list: []
}

// ------------------------ 액션 --------------------

export function readcommentAction(getResponseList){
    return {type : READCOMMENT, getResponseList}
}

export function addcommentAction(getResponseList){
    console.log(getResponseList);
    return {type : ADDCOMMENT, getResponseList}
}

export function modicommentAction(getResponseList){
    console.log(getResponseList);
    return {type : MODIFYCOMMENT, getResponseList}
}




// ------------------------ 미들웨어 ----------------

export const readCommentRQ = (post_id) =>{
    return  function (dispacth){
        axios.get(`/api/post/${post_id}/comments`).then(response => {
            dispacth(readcommentAction(response.data));
        }).catch(error =>{

        })    
    }
}


export const addCommentRQ = (receiveCommentList) =>{
    return async function (dispacth){
        axios.post(`/api/post/${receiveCommentList.post_id}/comments`, {contents : receiveCommentList.contents}, 
        { headers: { 'Authorization':  `Bearer ${sessionStorage.getItem("Authorization")}` }}
        ).then(response => {
            dispacth(addcommentAction(receiveCommentList))
          }).catch(error=>{

        })

    }
}


export const modiCommentRQ = () =>{
    return async function (dispacth){
        
    }

}


// export const deleteCommentRQ = (deleteCommentId)=>{
//     return async function(dispacth){
//         axios.delete(`http://api.amorossoprc.shop:8081/api/post/{postid}/comments/{commentid}`,
//         { headers: { 'Authorization':  `Bearer ${sessionStorage.getItem("Authorization")}` }}
//         ).then(response => {
//             const update_post_list = getState().post.list;
//             const post_id = update_post_list.findIndex((word)=>{
//                 return word.id === deletePostId;
//             })
//             dispacth(deleteAction(post_id))
//         }).catch(error =>{
//             alert(error);
//       })    

//     }
// }
 
// ------------------------ 리듀서 ------------------

export default function reducer(state = initialState, action = {}) {
    switch(action.type){
       case 'miniproject/READCOMMENT' : {
            return {list : action.getResponseList}
        }

        case 'miniproject/ADDCOMMENT'  :{
            const update_commentList = [...state.list, action.getResponseList]
            return { list : update_commentList};
        }

        default:
            return state;
    }
}