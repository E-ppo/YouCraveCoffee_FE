import { createStore, combineReducers, applyMiddleware} from "redux"; 
import user from "./modules/user";  // 리듀서 들고오기! 써야하니깐~
import post from "./modules/post";
import comment from "./modules/comment";

import thunk from "redux-thunk"


const middlewares = [thunk]; 
const rootReducer = combineReducers({ user, post, comment }); 
const enhancer = applyMiddleware(...middlewares); 

const store = createStore(rootReducer, enhancer); 


export default store; 
