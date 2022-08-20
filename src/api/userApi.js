import { instance } from "../lib/axios";

export const userApi ={
  sighUp : async(data) => {
    console.log(data)
    await instance.post(`/user/signup`, data)
  },
  login: async(data) =>{
    console.log(data)
    await instance.post(`/user/login`, data)
  }
}