
//External modules
const express=require('express')
const hostRouter=express.Router();



const hostController=require("../controllers/hostController")

hostRouter.get("/add-home",hostController.getAddHome)

hostRouter.get("/host-home-list",hostController.getHostHome)

hostRouter.post("/add-home",hostController.postAddhome)

hostRouter.get("/edit-home/:homeId",hostController.getEditHome)

hostRouter.post("/edit-home",hostController.postEditHome)

hostRouter.post("/delete-home/:homeId",hostController.postDeleteHome)

exports.hostRouter=hostRouter;
