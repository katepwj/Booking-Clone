import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import axios from 'axios'

const Login = (props) => {
  const dispatch = useDispatch()
  const {  loading, error } = useSelector((state) => state.authReducer)

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" })
    try {
      // LOGIN SUCCESS
      const res = await axios.post('http://localhost:8800/auth/login', userInfo)
      // console.log(res)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
      localStorage.setItem("user", JSON.stringify(userInfo))
      props.history.push("/")
    } catch (err) {
      // LOGIN FAIL
      dispatch({ type: "LOGIN_FAILUER", payload: err.response.data })
    }
  }

  const handleChange = (e) => {
    setUserInfo((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))

  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="lContainer"  >
        <div  >
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={e => handleChange(e)}
            className="lInput"
          />
        </div>
        <div  >

          <input
            // type="text"
            type="password"
            placeholder="password"
            name="password"

            onChange={e => handleChange(e)}
            className="lInput"
          />
        </div>
        <div  >
          <input
            type="submit"
            value="Login"
            className="lButton"
            disabled={loading}
          />
        </div>
        {error && <span className="wrongMsg">{error.msg}</span>}

      </form>
    </div>
  )
}

export default withRouter(Login)
