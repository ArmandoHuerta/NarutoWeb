const express = require("express");
var cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post("/api", function (req, res) {
  const { clanName } = req.body;

  const clanes = {
    Uchiha: "Description",
    Clan2: "Description2",
  };

  res.cookie("clanSeleccionado", clanName).redirect("/frontend/resultado");
});

app.listen(6369);
