/**
Day 103 – SQL with Node

Topic: pg / mysql2
Task:
Connect Node to SQL
 */

const express = require("express");
const mysql = require("mysql2");

const app = express();

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "212323",
    database: "db"
});

db.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("MySQL Connected");
});

// API
app.get("/", (req, res) => {
    res.send("Node + MySQL Connected");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

/*Common Errors
Error 1
ER_ACCESS_DENIED_ERROR

Fix:
Wrong username/password.    */

/**
Viva Questions
Q1. Package for MySQL in Node?
mysql2
Q2. Package for PostgreSQL?
pg
Q3. Connection method?
createConnection()
Q4. Default MySQL port?
3306
Q5. Day 103 project type?
Backend + SQL Database
 */