import express from "express";
import database from "./database/index.js";
import router from "./routes/index.js";
import fs from "fs";

const app = express();
const port = 80;

app.use(router);

function start() {
    try {
        app.listen(port, () => {
            app.get('/', function (req, res) {
                fs.readFile('./index.html',{encoding: "utf-8"}, (err, response) => {
                    if (err) throw err;

                    res.send(response);
                });
            });
            database.authenticate().then(() => {
                console.log('db connected');
            });
        });
    } catch (error) {
        console.error(error);
    }
}

start()
