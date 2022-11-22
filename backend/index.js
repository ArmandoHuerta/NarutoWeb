const express = require("express");
var cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post("/api", function (req, res) {
  const { clanName } = req.body;
  console.log("Cookies: ", JSON.stringify(req.cookies));
  console.log("CLAN: " + clanName);

  res.send("Hello Yeyo V1 ");
});

app.listen(6369);
