const { GETALL, GETONE } = require("./database");

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
      name: req.params.id,
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
