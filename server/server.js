const express =require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
require("dotenv").config();
const path = require('path');
const PORT = 5500;
const HOSTNAME = "localhost";
const cors=require("cors");
const route = require("./Route/index");

const corsOptions={
    origin: 'http://localhost:3000',
    methods: "GET,POST,PUT,DELETE, PATCH",
    credentials: true,
    optionSuccessStatus: 200,
    allowedHeaders: "X-Requested-With,content-type, x-token, Access-Control-Allow-Credentials"
}
const app = express();
app.use(express.json()); 
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public")) //css
app.set("views", "./src/views") //pages
app.set("view engine", "ejs") //choosing ejs template
app.use('/', route);
mongoose.set('strictQuery',false);

const MongoAtlas = process.env.MONGO_URL;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

mongoose.connect(MongoAtlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})   .then(res => {
        app.listen(PORT, HOSTNAME, () => {
            console.log(`Server is running at ${HOSTNAME}: ${PORT}`)
        });
    })
    .catch(err => console.log(err));