import express from "express";
import bodyParser from "body-parser";
import userModel from "../database/models/user-model.js";

const Router = express();

let jsonParser = bodyParser.json()

Router.get('/user', (req, res) => {
    userModel.findAll().then((response) => {
        res.send(response);
    });
});

Router.post('/user', jsonParser, (req, res) => {
    let data = req.body;
    userModel.create(data);
});

Router.delete('/user', jsonParser, (req,res) => {
    let name = req.body;
    userModel.destroy({
        where: {
            firstname: name
        }
    }).then(r => res.send(r)).catch(err => console.log(err));
});

export default Router;


