const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const empRouter = require('./routes/employee.js');
const proRouter = require('./routes/projects.js');
const tmRouter = require('./routes/team.js');
const Db = "mongodb+srv://sriman:sdevi1978@mern.b1fzide.mongodb.net/?retryWrites=true&w=majority";
const app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const cors = require('cors');

app.use(cors({ origin: true, credentials: true }));


mongoose.connect(Db)
    .then(console.log("Db connected :"));

app.use('/employee', empRouter);
app.use('/projects', proRouter);
app.use('/team', tmRouter);


    app.listen(3005, () => { console.log("Listen :") });