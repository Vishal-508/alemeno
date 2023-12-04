import * as types from "./action"

const initialState={
    courses:[],
    isLoading:false,
    isError:false,

}

const reducer=(oldState=initialState,action)=>{
    const{type,payload}=action;
    switch(type){
        case types.GET_COURSE_REQUEST:
            return {
                ...oldState,
                isLoading:true
            }
            case types.GET_COURSE_SUCCESS:
            return {
                ...oldState,
                isLoading:false,
                courses:payload,
                isError:false
            }
            case types.GET_COURSE_FAILURE:
            return {
                ...oldState,
                isLoading:false,
                isError:true
            }
            default:
                return oldState
    }
}

export {reducer}