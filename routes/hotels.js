import express from 'express';
const router = express.Router()
import {createHotel,deleteHotel,updateHotel,getHotel,getAllHotel,countByType,countByCity} from '../controllers/hotel.js'




// CREATE
router.post("/", createHotel)

// UPDATE
router.put("/find/:id", updateHotel)

// DELETE
router.delete("/find/:id",deleteHotel)

// GET
router.get("/find/:id", getHotel)

// GET ALL
router.get("/", getAllHotel)


router.get("/countByCity", countByCity)

router.get("/countByType", countByType)



export default router



// router.get("/", (req, res) => {
//   res.send("hotelsRouter!")
// })



// router.get("/", async (req, res,next) => {
//   console.log(req.params.id)
//   try {
//     const hotels = await Hotel.find()
//     res.status(200).json(hotels)
//   } catch (err) {
//     next(err)
//   }
// })
