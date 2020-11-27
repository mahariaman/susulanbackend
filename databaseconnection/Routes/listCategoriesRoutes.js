const Router = require("express").Router();
const {manageCategories} = require("../controllers/");

Router.get('/categories/:id',manageCategories.getAllCategoriesbyID)
Router.post('/categories',manageCategories.AddCategories)
Router.put('/categories',manageCategories.EditCategories)
Router.delete('/categories',manageCategories.DeleteCategories)

module.exports=Router