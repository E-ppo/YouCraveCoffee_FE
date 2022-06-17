import axios from "axios";

const READPOST = 'miniproject/READPOST'
const WRITEPOST = 'miniproject/WRITEPOST'
const MODIFYPOST = 'miniproject/MODIFYPOST'
const DELETEPOST = 'miniproject/DELETEPOST'

const SEARCHPOST = 'miniproject/SEARCHPOST'


const initialState = { 
    list: []
}

// ------------------------ 액션 --------------------

export function readAction(getResponseList){
    return {type : READPOST, getResponseList}
}

export function writeAction(upDatePostList){
    return {type : WRITEPOST, upDatePostList}
}

export function modifyAction(modifyPostList){
    return {type : MODIFYPOST, modifyPostList}
}

export function deleteAction(post_id){
    return {type : DELETEPOST, post_id}
}


// ------------------------ 미들웨어 ----------------

export const writePostRQ = (addPostRequstList) =>{
    console.log(addPostRequstList);
    return function(dispacth){
        axios.post("http://api.amorossoprc.shop:8081/api/posts", addPostRequstList, 
        { headers: { 'Authorization':  `Bearer ${sessionStorage.getItem("Authorization")}` }}
        )
        .then(response => {
            dispacth(writeAction(response.data))
          }).catch(error=>{
            
          })
     }
}


// ---------미들웨어 리드 

export const readPostRQ = ()=>{
    return async function (dispacth){
     axios.get("http://api.amorossoprc.shop:8081/api/posts").then(response => {
        console.log(response.data);

        dispacth(readAction(response.data));
      }).catch(error =>{
        // alert(error)
      })    
    }
}


export const rankPostRQ=()=>{
    return function(dispacth){
        console.log("여기까지진입?");
        axios.get("http://api.amorossoprc.shop:8081/api/ranks").then(response => {
               console.log(response.data);
    
            dispacth(readAction(response.data));
          }).catch(error =>{
            // alert(error)
          })    
        
    }
}


export const searchPostRQ=(serachWord)=>{
    return function(dispacth){
        axios.get(`http://api.amorossoprc.shop:8081/api/posts?category=&search=${serachWord}`).then(response => {
            console.log()

            if(response.data.length==0){
                alert("게시물이 없습니다.");
                window.location.replace("/")
            }else{
                dispacth(readAction(response.data));
            }

          }).catch(error =>{
          })    
    }
}



// /-------------미들웨어 리드 

export const modifyPostRQ = (modifyPostRequstList) =>{
    return function(dispacth){
        const modiInfo={
            title : modifyPostRequstList.title,
            contents : modifyPostRequstList.contents,
            img : modifyPostRequstList.img,
            category : modifyPostRequstList.category
        }
        axios.put(`http://api.amorossoprc.shop:8081/api/posts/${modifyPostRequstList.id}`, modiInfo,
        { headers: { 'Authorization':  `Bearer ${sessionStorage.getItem("Authorization")}` }}
        ).then(response => {

        });

    }
}

export const deletePostRQ = (deletePostId) =>{
    return function(dispacth, getState){
        console.log(deletePostId);
        axios.delete(`http://api.amorossoprc.shop:8081/api/posts/${deletePostId}`,
        { headers: { 'Authorization':  `Bearer ${sessionStorage.getItem("Authorization")}` }}
        ).then(response => {
            const update_post_list = getState().post.list;
            const post_id = update_post_list.findIndex((word)=>{
                return word.id === deletePostId;
            })
            dispacth(deleteAction(post_id))
        }).catch(error =>{

      })    

    }
}


export const likeaddPostRQ=(post_id)=>{
    return function(dispacth){
    axios.post(`http://api.amorossoprc.shop:8081/api/posts/${post_id}/like`,
    { username: sessionStorage.getItem("username")},
    { headers: { 'Authorization':  `Bearer ${sessionStorage.getItem("Authorization")}` }}
    ).then(response => {
        console.log(response);
        // dispacth(writeAction(addPostRequstList))
        }).catch(error=>{
        
    })
    }
}


// ------------------------ 리듀서 ------------------

export default function reducer(state = initialState, action = {}) {
    switch(action.type){
       case "miniproject/READPOST" : {
            return {list : action.getResponseList}
        }

        case "miniproject/WRITEPOST" : {
            const update_postList = [...state.list, action.upDatePostList]
            return { list : update_postList};
        }

        case 'miniproject/MODIFYPOST' : {
            console.log("테수투테수투");
        }

        case 'miniproject/DELETEPOST' : {
            const new_write_list = state.list.filter((el, idx) => {
                return parseInt(action.post_id) !== idx;
            })
            return { list: new_write_list }
        }

        default:
            return state;
    }
}