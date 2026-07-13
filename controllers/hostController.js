exports.getAddHome = (req, res, next) => {
    // res.sendFile(path.join(__dirname,'../','views','addHome.html'))
    res.render('host/edit-home', { pageTitle: 'Add home to airbnb',
        editing:false,//flag 
        
        
     })

}

exports.getEditHome = (req, res, next) => {
    const homeId=req.params.homeId;
    const editing=req.query.editing ==='true';
    
    Home.findById(homeId, home =>{
        if(!home){
            console.log('Home Not Found with given homeId.')
            res.redirect("/host/host-home-list");
        }
        else{console.log(homeId,editing,home)
             res.render('host/edit-home', { pageTitle: 'edit-home',
            editing: editing,
            home:home
            })
        }
    })
}

exports.getHostHome = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render("host/host-home-list", {
            registeredHomes: registeredHomes,
            pageTitle: 'Host-Home-list'
        });
    })
}

const path = require('path')
const rootDir = require('../utils/pathUtils')
const Home = require('../models/home');
const { error } = require('console');

// const registeredHomes=[] --  present in model part(as it is data)

exports.postAddhome = (req, res, next) => {

    const { houseName, price, location, rating, photoURL } = req.body
    const home = new Home(houseName, price, location, rating, photoURL)
    home.save();

    // registeredHomes.push(req.body)
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.ejs'))
}
exports.postEditHome = (req, res, next) => {

    const {id,houseName, price, location, rating, photoURL } = req.body
    const home = new Home( houseName, price, location, rating, photoURL)
    home.id=id;
    home.save();
   
   res.redirect("/host/host-home-list");
}

exports.postDeleteHome = (req, res, next) => {
    const homeId = req.params.homeId
   Home.DeleteById(homeId,error=>{
    if(error){
        console.log('Error while deleting',error);
    }
    res.redirect("/host/host-home-list");
   })
  
}

