/**
Day 104 – Joins in Node

Task:
Fetch joined data
 */

const express = require("express");
const mysql = require("mysql2");

const app = express();

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

// JOIN API
app.get("/students", (req, res) => {
    const query = `
        SELECT students.name, courses.course_name
        FROM students
        INNER JOIN courses
        ON students.course_id = courses.id
    `;

    db.query(query, (err, result) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(result);
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});