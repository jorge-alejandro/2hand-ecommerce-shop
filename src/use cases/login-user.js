const cryptoService = require("../services/crypto-service.js");
const dbService = require("../services/db-service.js");
const errorService = require("../services/error-service.js");

/**
 * entrada:
 *  - email: string
 *  - plainPassword: string
 *
 * salida:
 *  - token
 */
module.exports = async ({ email, plainPassword }) => {
  //obtengo el usuario que corresponda a ese email.
  const user = await dbService.getUserByEmailUNSAFE(email);
  //si no tengo un usuario, tiro un error ("las credenciales son invalidas")
  if (!user) {
    errorService.invalidCredentials();
  }
  //si el usuario no validó el email tiro error ("falta validar el email")
  if (!user.emailValidated) {
    errorService.emailNotValidated();
  }
  //valido la plainPassword contra el hash
  const valid = await cryptoService.validatePassword(
    plainPassword,
    user.password
  );
  //si no es válida, tiro un error ("las credenciales son invalidas")
  if (!valid) {
    errorService.invalidCredentials();
  }
  //-------- ESTOY SEGURO QUE ESTE USUARIO ES VÁLIDO -------------
  //GENERAR EL TOKEN (JWT)
  const token = cryptoService.generateJWT({
    id: user.id,
    email: user.email,
    name: user.name,
  });
  //DEVUELVO EL TOKEN
  return token;
};
