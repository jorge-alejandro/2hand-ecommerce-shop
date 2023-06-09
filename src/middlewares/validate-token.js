const cryptoService = require("../services/crypto-service.js");

module.exports = (req, res, next) => {
  //Miro los headers y busco el token
  //HEADER: "Authorization"
  const token = req.headers.authorization;

  //Si existe el token, lo valido
  if (token) {
    const user = cryptoService.parseJWT(token);
    //Si es válido, cargo req.currentUser con esa información
    if (user) {
      req.currentUser = user;
    } else {
      req.currentUser = null;
    }
  } else {
    //Si no es válido o no hay token, cargo req.currentUser con null
    req.currentUser = null;
  }

  // ejecuto el siguiente middleware
  next();
};
