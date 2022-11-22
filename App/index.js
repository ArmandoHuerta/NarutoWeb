const express = require("express");
var cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("frontend"));

app.post("/api", function (req, res) {
  console.log(req.body);

  const { username, clanName } = req.body;

  const clanes = {
    Uchiha:
      "El Clan Uchiha (´うちは一族´, Uchiha Ichizoku) también conocido como Clan Uchiha del Sharingan (Sharingan no Uchiha Ichizoku) fue considerado uno de los dos clanes más poderosos del mundo shinobi, junto con el Clan Senju, durante la Era de Guerra entre Clanes.",
    Uzumaki:
      "El Clan Uzumaki (´うずまき一族´, Uzumaki Ichizoku) fue un prominente clan de Uzushiogakure. Eran parientes lejanos del Clan Senju y por lo tanto ambos clanes estaban en buenos términos, una alianza que se extendía a sus aldeas ocultas - Konohagakure y Uzushiogakure.Algo muy peculiar en ellos es que la mayoria del clan poseen gran cantidad de shakra y en su mayoria son pelirojos.",
    Hyuga:
      "El clan Hyūga (´日向一族´ Hyūga Ichizoku) es un clan del manga y anime Naruto, residente en la Aldea Oculta de Konoha. Hyūga (日向) significa hacia el Sol. Posee una técnica de línea sucesoria denominada Byakugan, que les otorga una visión completa a su alrededor, y la capacidad para ver los movimiento del chakra.",
  };
  let clanDescripcion = "";
  if (clanName == "Uchiha") clanDescripcion = clanes.Uchiha;
  if (clanName == "Uzumaki") clanDescripcion = clanes.Uzumaki;
  if (clanName == "Hyuga") clanDescripcion = clanes.Hyuga;

  res
    .cookie("username", username)
    .cookie("clanSeleccionado", clanName)
    .cookie("clanDescripcion", clanDescripcion)
    .redirect("/tablero.html");
});

app.listen(6369);
