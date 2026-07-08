const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/pathUtils');
const { error } = require('console');

const homeDataPath = path.join(rootDir, 'data', 'home.json')

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
        this.id=Math.random().toString();
        Home.fetchAll((registeredHomes) => {
            registeredHomes.push(this)
           
            fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
                console.log("File Writting concluded", error)
            })
        })

    }

    //To retrieve data
    static fetchAll(callback) {
        
        fs.readFile(homeDataPath, (err, data) => {
            // console.log("File Read : ", err, data);
            callback(!err ? JSON.parse(data) : callback([]))

        })

    }

    static findById(homeId,callback){
        this.fetchAll(homes =>{
            const homefound=homes.find(home =>home.id === homeId);callback(homefound);
        })
    }
}