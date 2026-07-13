const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/pathUtils');
const { error } = require('console');

const favouriteDataPath = path.join(rootDir, 'data', 'favourite.json')

module.exports=class Favourite {
    static addToFavourite(homeId,callback){
    Favourite.getFavourites((favourites) => {
             
               if(favourites.includes(homeId.trim())){
               callback("Home is already marked Favourite.")
               }
                else{
                    favourites.push(homeId.trim());
                    fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback)
                }
            })

    }
    static getFavourites(callback){
        fs.readFile(favouriteDataPath,(err,data)=>{
            callback(!err ? JSON.parse(data) : [])
        })
    }

    static DeleteFavouriteById(delhomeId,callback){
           Favourite.getFavourites(homeIds=>{
            homeIds = homeIds.filter(homeId => delhomeId !==homeId ) 
            fs.writeFile(favouriteDataPath,JSON.stringify(homeIds),callback)
           })
        }
}