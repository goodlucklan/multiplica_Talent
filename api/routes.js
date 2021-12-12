const { GETALL, GETONE, INSERT_MDB } = require("./database");

exports.Colores = async (req, res) => {
  try {
    const obtenerColores = await GETALL("Colors", "AllColors", {});
    res.status(200).json({
      codRes: "00",
      respuesta: obtenerColores,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      codRes: "99",
      mensaje: "No se encontro resultado",
    });
  }
};

exports.UnColor = async (req, res) => {
  try {
    console.log("req", req.params.id);
    const body = {
      id: parseInt(req.params.id),
    };
    const obtenerUnColor = await GETONE("Colors", "AllColors", body);
    res.status(200).json({
      codRes: "00",
      respuesta: obtenerUnColor,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      codRes: "99",
      mensaje: "No se encontro resultado",
    });
  }
};

exports.InsertColor = async (req, res) => {
  try {
    console.log("req", req.body);
    const insert = req.body;
    const InsertarColor = await INSERT_MDB("Colors", insert, "AllColors");
    console.log("INSERT", InsertarColor);
    res.status(200).json({
      codRes: "00",
      respuesta: InsertarColor,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      codRes: "99",
      mensaje: "No se encontro resultado",
    });
  }
};

exports.Login = async (req, res) => {
  try {
    console.log("body_Login", req.body);
    const user = {
      user: req.body.user,
    };
    const pass = {
      pass: req.body.pass,
    };
    const existeUser = await GETONE("Ecomoda", "User", user);
    res.status(200).json({
      codRes: "00",
      respuesta: existeUser,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      codRes: "99",
      mensaje: "No se encontro resultado",
    });
  }
};
