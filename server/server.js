const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoCon = require('./mongoConnect/mongoCon.js');

//cnfiguration of dotenv
dotenv.config();

//connecting to mongodb database
mongoCon();

//importing routes
const user = require('./routes/userRoutes.js')

//using multiple routes
app.use("/api/user", user);

//health api
app.get('/health', (req, res)=>{
    res.json({
        status: 'active',
        message: "server is running"
    })
})


const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is running on the server ${port}`)
})