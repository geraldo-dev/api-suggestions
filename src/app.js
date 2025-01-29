const express = require("express");
const cors = require('cors');
const routes = require("./routes");

async function  start () {
        
    const app = express();
    
    app.use(express.json());
    app.use(cors());
    app.use('/suggestion', routes);

    app.listen(3000, (err)=>{
        if(err) console.log(err);

        console.log('http://localhost:3000');
    });
}


start();