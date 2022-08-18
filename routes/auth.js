import express from 'express';
const router = express.Router()
import { register,login } from '../controllers/auth.js'


router.get("/", (req, res) => {
  res.send("authRouter!")
})


// CREATE NEW USER; REGISTER
router.post("/register", register)

// LOGIN
router.post("/login",login)

// DELETE


// GET


// GET ALL


export default router