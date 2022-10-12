import express from "express";
import userModel from "../database/models/user-model.js";

const Router = express();

Router.get('/user', (req, res) => {
    userModel.findAll().then((response) => {
        res.send(response);
    });
});

export default Router;


