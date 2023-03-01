const express = require("express");
const cors = require("cors");
const router = require("./api/routes/userRoutes");
const db = require("./api/helper/dbConnection");

const app = express();
db();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(4000, () => {
  console.log("Server is running");
});
