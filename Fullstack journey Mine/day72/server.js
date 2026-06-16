/**
Day 72 – Mini Project: Quotes API

Task:
GET all quotes
POST new quote
DELETE quote
 */

const express = require("express");

const app = express();

app.use(express.json());

// In-memory quotes data
let quotes = [
  {
    id: 1,
    text: "Success is the sum of small efforts repeated daily."
  },
  {
    id: 2,
    text: "Believe you can and you're halfway there."
  }
];

// GET all quotes
app.get("/quotes", (req, res) => {
  res.json(quotes);
});

// POST new quote
app.post("/quotes", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      message: "Quote text is required"
    });
  }

  const newQuote = {
    id: quotes.length ? quotes[quotes.length - 1].id + 1 : 1,
    text
  };

  quotes.push(newQuote);

  res.status(201).json({
    message: "Quote Added",
    quote: newQuote
  });
});

// DELETE quote
app.delete("/quotes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const quoteExists = quotes.find(q => q.id === id);

  if (!quoteExists) {
    return res.status(404).json({
      message: "Quote Not Found"
    });
  }

  quotes = quotes.filter(q => q.id !== id);

  res.json({
    message: "Quote Deleted"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});