exports.getAddHome = (req, res, next) => {
    // res.sendFile(path.join(__dirname,'../','views','addHome.html'))
    res.render('host/addHome', { pageTitle: 'Add home to airbnb' })

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
const Home = require('../models/home')

// const registeredHomes=[] --  present in model part(as it is data)

exports.postAddhome = (req, res, next) => {

    const { houseName, price, location, rating, photoURL } = req.body
    const home = new Home(houseName, price, location, rating, photoURL)
    home.save();

    // registeredHomes.push(req.body)
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'))
}
// exports.registeredHomes=registeredHomes;


