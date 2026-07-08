
const Favourite = require('../models/favourite');
const Home = require('../models/home')



exports.getIndex = (req, res, next) => {

    Home.fetchAll((registeredHomes) => {
        res.render("store/index", {
            registeredHomes: registeredHomes,
            pageTitle: 'airbnb Home'
        });
    })
}
exports.getHome = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render("store/home-list", {
            registeredHomes: registeredHomes,
            pageTitle: 'Homes-List'
        });
    })
}
exports.getBookings = (req, res, next) => {
    res.render("store/bookings", {

        pageTitle: 'My Bookings'
    });

}
exports.getFavouriteList = (req, res, next) => {
    Favourite.getFavourites(favourites =>{
        Home.fetchAll((registeredHomes) => {
           const favouriteHomes =  registeredHomes.filter(home =>favourites.includes(home.id));
        res.render("store/favourite-list", {
            favouriteHomes: favouriteHomes,
            pageTitle: 'My Favourites'
        });
    })

    })
    

}
exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId;
   
    Home.findById(homeId, home => {
        if (!home) {
            console.log("Home not found");
            res.redirect("/homes");
        }
        else {
            res.render("store/home-details", {
                pageTitle: 'Home-Details',
                home:home
            })
        }
    })
}
exports.postAddToFavourites =(req,res,next)=>{
   
    Favourite.addToFavourite(req.body.id,error=>{
        if(error){
            console.log("Error while marking Favourite",error)
        }
         res.redirect("/favourites")
    })
   
}
