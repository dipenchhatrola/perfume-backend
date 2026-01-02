const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

// Import routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Body parser
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));

// Use routes - CORRECT WAY
app.use("/api/users", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/notification", notificationRoutes);

module.exports = app;