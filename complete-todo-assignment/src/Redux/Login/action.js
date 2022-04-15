import axios from "axios"

export const LOGIN_LOADING="LOGIN_LOADING"
export const LOGIN_SUCCESS="LOGIN_SUCCESS"
export const LOGIN_FAILURE="LOGIN_FAILURE"
export const LOGOUT="LOGOUT"



export const USER_FETCH="USER_FETCH"

export const fetching=(payload)=>({ payload,type:USER_FETCH})



export const loginloading=()=>({ type:LOGIN_LOADING})
export const loginsuccess=(payload)=>({type:LOGIN_SUCCESS,payload})
export const loginfailure=()=>({type:LOGIN_FAILURE})
export const logout=()=>({type:LOGOUT})


export const login=(userData)=>(dispatch)=>{
    dispatch(loginloading());
    axios
      .post("https://masai-api-mocker.herokuapp.com/auth/login", userData)
      .then((res) => {
       
        dispatch(
          loginsuccess({ username: userData.username, token: res.data.token })
        );

      })
      .catch((err) => {
        dispatch(loginfailure());
      });

}

export const getData=({config,username})=>(dispatch)=>{
    axios
      .get(`https://masai-api-mocker.herokuapp.com/user/${username}`, config)
      .then((res) => {
    //  console.log(res.data)
        dispatch(fetching(res.data)
        );})
      }



