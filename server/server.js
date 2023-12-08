const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoCon = require('./mongoConnect/mongoCon.js');

dotenv.config();

mongoCon();

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