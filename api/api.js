require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((e) => console.error("Couldn't connect to mongoDB. Reason: ", e));
const db = mongoose.connection;
db.on("error", (e) => console.error("Connection Error: ", e));
db.once("open", () => console.log("Database: Connection established"));

app.use(express.json);
const insultsRouter = require("./routes/insults");
app.use("/insults", insultsRouter);

app.get("/", (req, res) => {
  res.send("This is home!");
});

app.listen(process.env.PORT);
