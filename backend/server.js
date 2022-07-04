const express = require("express"); // Bring in express
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express(); // Initialize express
const { errorHandler } = require("./middleware/errorMiddleware");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Suport Desk API"
    });
})

// Routes
app.use("/api/users/", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
