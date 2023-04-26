const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./db/connection");

const connectDB = require("./db/connection");
const port = process.env.PORT || 3000;
const app = express();

connectDB();

app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Expose-Headers", "x-access-token,x-refresh-token");
//   next();
// });

app.use(bodyParser.json());

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/users", require("./routes/user.route"));
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

// http://localhost:3000/api/users
