const express = require("express");
const app = express();

const {open} = require("sqlite");
const sqlite3 = require("sqlite3");

const cors = require("cors");

app.use(express.json());
app.use(cors());

const path = require("path");

const dbPath = path.join(__dirname, "yourmood.db");

let db = null;

const initializeAndServer = async() => {
    try{
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        });

        app.listen(3001, () => {
            console.log("http://localhost:3001");
        })
    } catch(e) {
        console.log(`Db error ${e.messege}`);
        process.exit(1);
    }
};

initializeAndServer();
