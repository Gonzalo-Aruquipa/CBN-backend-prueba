const express = require("express");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const morgan = require("morgan")

const db = require("./db")

try {
  db.authenticate();
  db.sync();
  console.log("conection db successfully");
} catch (error) {
  console.log(error);
}



const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

