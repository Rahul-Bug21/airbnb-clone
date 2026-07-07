//Core modules
const path=require('path')

//External modules
const express=require('express')
const storeRouter=express.Router()




const storeController=require("../controllers/storeController")
storeRouter.get("/",storeController.getIndex)
storeRouter.get("/homes",storeController.getHome)

storeRouter.get("/bookings",storeController.getBookings)
storeRouter.get("/favourites",storeController.getFavouriteList)


module.exports=storeRouter