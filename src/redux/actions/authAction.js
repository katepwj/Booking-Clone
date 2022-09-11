export const logIn=(payload)=>{
  return{
    type:"LOGIN",
    payload
  }
}

export const logOut=()=>{
  return{
    type:"LOGIN_OUT",
  
  }
}

export const loginFailuer=(payload)=>{
  return{
    type:"LOGIN_FAILUER",
    payload
  }
}