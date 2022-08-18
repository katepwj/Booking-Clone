// const express=require("express")
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'

import bodyParser from 'body-parser'
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
// app.use(express.json())
app.use(cookieParser())
app.use(cors())


dotenv.config()


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongoDB")
  } catch (error) {
    // console.log(11, error);
    throw error
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!")
})



app.use("/auth", authRoute)
app.use("/hotels", hotelsRoute)
app.use("/rooms", roomsRoute)
app.use("/users", usersRoute)


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMsg = err.msg || "sth went wrong"
  // console.log(11,err)
  // console.log(22,err.stack)
  // console.log(33,err.reason)
console.log(11)
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    msg: errorMsg,
    stack: err.stack
  })

})




// mongoose.connection.on("connected",()=>{
//   console.log("mongoDB connected!")
// })



app.get("/", (req, res) => {
  res.send("hello kate")
})













app.listen(8800, () => {
  connect()
  console.log("connected to 8800")
})






// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:8800/test');
// }


// try {
  //   await mongoose.connect(process.env.MONGO);
  //   console.log("done")
  // } catch (error) {
  //   console.log(11,error);
  //   throw new Error
  // }
