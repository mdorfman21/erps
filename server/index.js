const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/database");
const skuRoutes = require("./routes/");

app.use(cors());

// Connect to the database
db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Error connecting to database:", err));
app.use(express.json());

app.use("/sku", skuRoutes);

app.get("/", (req, res) => {
  res.send("Hello from our server!");
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
