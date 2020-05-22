const express = require ('express')
const bodyparser = require('body-parser');
const morgan = require('morgan');

const multiparty = require('connect-multiparty');
const multipartyMiddleware = multiparty({uploadDir:'./images'});

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.post('/upload', multipartyMiddleware,(req, res) =>{
    console.log(req.files.upload);
})

app.get('/', (req, res) =>{
    res.status(200).json({
        message:"Testing our Server"
    })
})


app.listen(PORT, console.log(`Server has sucessfuly Started at: ${PORT}`));


