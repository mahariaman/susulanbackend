const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))

const {ListCategoriesRoutes,ListMoviesRoutes,ConnectMoviesCategoriesRoutes}=require('./Routes')
// const {ListCategoriesRoutes,ListMoviesRoutes,ConnectMoviesCategoriesRoutes} = require('./Routes')

app.use('/categories',ListCategoriesRoutes)
app.use('/movies',ListMoviesRoutes)
app.use('/movcat',ConnectMoviesCategoriesRoutes)

app.listen(5000,()=>console.log('api aktif port 5000'))