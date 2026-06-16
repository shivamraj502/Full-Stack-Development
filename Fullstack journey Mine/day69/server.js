/**
Day 69 – Query Params & Body

Task:
Handle query params
Use express.json()
👉 Build:
API that accepts user data
 */

const express = require("express");

const app = express();

// Middleware to parse JSON body
app.use(express.json());

/* Query Parameters Example
   URL:
   http://localhost:3000/user?name=Shivam&age=20
*/
app.get("/user", (req, res) => {
  const { name, age } = req.query;

  res.json({
    message: "User data received from query params",
    name,
    age,
  });
});

/* POST API
   Accept JSON Data
*/
app.post("/register", (req, res) => {
  const { name, email } = req.body;

  res.json({
    success: true,
    message: "User Registered Successfully",
    user: {
      name,
      email,
    },
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});