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

storeRouter.get("/homes/:homeId",storeController.getHomeDetails)

storeRouter.post("/favourites",storeController.postAddToFavourites)
storeRouter.post("/favourites/delete/:homeId",storeController.postRemoveFromFavourites)

module.exports=storeRouter