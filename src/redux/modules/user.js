import { selectClasses } from "@mui/material";
import axios from "axios";
import { Cookies } from "react-cookie";

const ISLOGIN = 'miniproject/ISLOGIN'
const SIGNUP = 'miniproject/SIGNUP'


const initialState = { 
    list: [{
           isLogin : "비회원",
           userId : "비회원"
        }]
}

// ------------------------ 액션 --------------------


export function signupAction(){
    return {type : SIGNUP, initialState }
}

export function isLoginAction(username){
    console.log(username);
    return {type : ISLOGIN}
}

// ------------------------ 미들웨어 ----------------



export const signupRQ = (receiveUserInfo) =>{
    return async function (dispacth) {
        console.log(receiveUserInfo);
          axios.post("http://api.amorossoprc.shop:8081/user/signup", 
            receiveUserInfo).then(response => {
            console.log(response);
          }).catch(error => {
          })
        }
    }


export const loginRQ = (receiveUserInfo) =>{
    return async function (dispacth, navigate) {       
        axios.post('/user/login', receiveUserInfo).then(response=>{
            const { accessToken } = response.data;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            sessionStorage.setItem("Authorization", accessToken);
            sessionStorage.setItem("username", response.data.username);
            sessionStorage.setItem("nickname", response.data.nickname);
            alert(sessionStorage.getItem("nickname")+"님 어서오세요 :)");
            window.location.replace("/")
            
        }).catch(error =>{

        });
    }
}

export const isLogin = ()=>{
    return function (dispacth){
        if(sessionStorage.getItem("username")){
            dispacth(isLoginAction({ isLogin : true, userId : sessionStorage.getItem("username")}));
        }else  dispacth(isLoginAction({ isLogin : false, userId : sessionStorage.getItem("비회원")}));
    }
}


// ------------------------ 리듀서 ------------------

export default function reducer(state = initialState, action = {}) {
    switch (action.type) { 
        case "miniproject/SIGNUP":{
            return {list : initialState};
        }

        case "miniproject/LOGIN":{
            return {list : initialState};
        }

        default:
            return state;
        }
    }
    