import Hotel from '../models/Hotel.js'


export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body)
  // console.log(newHotel)
  try {
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
  } catch (err) {
    next(err)
  }
}

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedHotel)
  } catch (err) {
    next(err)
  }
}

export const deleteHotel = async (req, res, next) => {
  // console.log(req.query.id)
  try {
    await Hotel.findByIdAndDelete(
      req.params.id,
    )
    res.status(200).json("hotel has been delelted")
  } catch (err) {
    // console.log(err)
    // res.status(500).json(err)
    next(err)
  }
}


export const getHotel = async (req, res, next) => {
  // console.log(req.params.id)

  try {
    const hotel = await Hotel.findById(
      req.params.id,
    )
    res.status(200).json(hotel)

  } catch (err) {
    next(err)
  }
}


export const getAllHotel = async (req, res, next) => {
  console.log(req.query)
  const { min, max, limit, ...others } = req.query
  let hotels
  try {
    if (!req.query.city) {
      hotels = await Hotel.find().limit(limit)
      // console.log(22,hotels)
    }
    else {
      hotels = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min || 1, $lt: max || 99999 }
      }).limit(limit)

    }
    res.status(200).json(hotels)

  } catch (err) {
    next(err)
  }
}

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",")
  try {
    const list = await Promise.all(cities.map(item => Hotel.countDocuments({ city: item })))
    res.json(list)
  } catch (err) {
    next(err)
  }
}


export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" })

    const apartmentCount = await Hotel.countDocuments({ type: "apartment" })

    const resortCount = await Hotel.countDocuments({ type: "resort" })

    const villasCount = await Hotel.countDocuments({ type: "villas" })

    const cabinsCount = await Hotel.countDocuments({ type: "cabins" })

    res.status(200).json([
      { type: "hotel", count: hotelCount, img: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" },
      { type: "apartment", count: apartmentCount, img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" },
      { type: "resort", count: resortCount, img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" },
      { type: "villas", count: villasCount, img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" },
      { type: "cabins", count: cabinsCount, img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" },
    ])

  } catch (err) {
    next(err)
  }
}
