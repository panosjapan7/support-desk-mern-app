const express = require("express"); // Bring in express
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express(); // Initialize express

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Suport Desk API"
    });
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})