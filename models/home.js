const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/pathUtils');
const { error } = require('console');

//Fake database
// const registeredHomes = [];

module.exports = class Home {
    constructor(houseName, price, location, rating, photoURL) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoURL = photoURL;
    }

    //To store data
    save() {
        Home.fetchAll((registeredHomes) => {
            registeredHomes.push(this)
            const homeDataPath = path.join(rootDir, 'data', 'home.json')
            fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
                console.log("File Writting concluded", error)
            })
        })

    }

    //To retrieve data
    static fetchAll(callback) {
        const homeDataPath = path.join(rootDir, 'data', 'home.json')
        fs.readFile(homeDataPath, (err, data) => {
            // console.log("File Read : ", err, data);
            callback(!err ? JSON.parse(data) : callback([]))

        })

    }
}