const express = require("express");
const app = express();

require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const { Colores, UnColor } = require("./api/routes");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.set("port", process.env.PORT);

app.get("/colores", Colores);
app.get("/colores/:id", UnColor);
app.listen(app.get("port"), () => {
  console.log(`MS on http://localhost:${app.get("port")}`);
});
