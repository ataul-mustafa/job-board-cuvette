const mongoose = require('mongoose');


const mongoCon = () => {
    const options = {
        useUnifiedTopology: true,
    };
    mongoose.connect(process.env.MONGO_URI, options).then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`)
    })
}

module.exports = mongoCon;