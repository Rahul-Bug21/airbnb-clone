const path=require('path')
const express=require('express')
const app=express();

const storeRouter=require("./routes/storeRouter")
const {hostRouter}=require("./routes/hostRouter")
const rootDir=require('./utils/pathUtils')

//for ejs::The app.set('view engine', 'ejs') configuration command tells an Express.js server to use EJS (Embedded JavaScript) as its template engine for rendering dynamic HTML pages
app.set('view engine','ejs')
app.set('views','views')

//Granting acces to public folder
app.use(express.static(path.join(rootDir,'public')));

app.use((req,res,next)=>{
    console.log(req.url,req.method)
    next()
})
app.use(express.urlencoded());

app.use((req, res, next) => {
    res.locals.currentPage = req.path;
    next();
});

app.use(storeRouter) //handle user,s query 
app.use("/host",hostRouter)//handle Host,s query

// app.use((req,res,next)=>{
//     // res.sendFile(path.join(__dirname,'views','404.html'))
//     res.sendFile(path.join(rootDir,'views','404.html'))
// })
const errorController = require("./controllers/error")
app.use(errorController.pageNotFound)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
}); 