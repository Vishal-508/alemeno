import axios from "axios";
import * as types from"./action";

export const getCourse=()=>(dispatch)=>{
dispatch({type:types.GET_COURSE_REQUEST});
return axios.get("https://course-v2zx.onrender.com/api/course").then((r)=>{
    dispatch({type:types.GET_COURSE_SUCCESS,payload:r.data})
}).catch((e)=>{dispatch({type:types.GET_COURSE_FAILURE, payload:e})})
}