
import { useEffect } from "react"

const initialState = {
  user: JSON.parse(localStorage.getItem("user"))|| null,
  loading: false,
  error: null
}

console.log("authReducer.js")


const authReducer = (state = initialState, action) => {

   switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null
      }
    case "LOGIN_SUCCESS":
 
      return {
        user: action.payload,
        loading: false,
        error: null
      }
    case "LOGIN_FAILUER":
  
      return {
        user: null,
        loading: false,
        error: action.payload
      }
    case "LOGIN_OUT":
      return initialState
    default:
      return initialState
  }

}


export default authReducer