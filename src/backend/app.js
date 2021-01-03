const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', './src/pages');

app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.get('/', (req, res) => res.send('Home Route'));

const port = process.env.PORT || 8080;

mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.7ye32.mongodb.net/<dbname>?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`,(err)=>{if(err) throw err;console.log("DB Connected Successfully");})
    