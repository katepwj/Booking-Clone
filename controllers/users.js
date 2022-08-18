import User from "../models/User.js"

export const test=async (req, res, next) => {
  res.send("usersRouter!")
}



export const updateUser = async (req, res, next) => {
  try {

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
}


export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("user has been delted")
  } catch (err) {
    next(err)
  }
}


export const getUser = async (req, res, next) => {
   try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)

  } catch (err) {
    next(Error)
  }

}


export const getAllUser = async (req, res, next) => {
  try {
    const allUsers = await User.find()
    res.status(200).json(allUsers)
  } catch (err) {
    next(err)
  }
}