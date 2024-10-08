const cors = require("cors");
const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const dbPath = path.join(__dirname, "yourmood.db");

let db = null;

const initializeAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        });

        await db.run(`CREATE TABLE IF NOT EXISTS symptom ( 
            symptons TEXT, 
            problem TEXT,
            medicines TEXT,
            doctor TEXT,
            contact TEXT
        )`);

        app.listen(3001, () => {
            console.log("Server running at http://localhost:3001");
        });
    } catch (e) {
        console.log(`Db error: ${e.message}`);
        process.exit(1);
    }
};

// Fetching Data
app.post('/', async (req, res) => {
    const { symptons } = req.body; // Match the name here

    console.log('Received symptom:', symptons); // Log the received symptom

    try {
        const query = `SELECT * FROM symptom WHERE symptons = ?`;
        const data = await db.all(query, [symptons]);
        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Failed to fetch data' });
    }
});

initializeAndServer();
