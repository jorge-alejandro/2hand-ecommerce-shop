const cryptoService = require("../services/crypto-service.js");
const dbService = require("../services/db-service.js");
const emailService = require("../services/email-service.js");
const errorService = require("../services/error-service.js");
const timeService = require("../services/time-service.js");

/**
 * Recibe datos de registro de usuario y crea el usuario en la base de datos
 * Además, envía un código de validación por email.
 */
module.exports = async (userData) => {
  

  const maybeOldUser = await dbService.getUserByEmailUNSAFE(userData.email);
  if (maybeOldUser) {
    errorService.emailAlreadyRegistered();
  }

  //hashear la contraseña
  const hashedPassword = await cryptoService.hashPassword(userData.password);

  //generar código de validación
  const randomCode = cryptoService.generateRandomValidationCode();

  //generar el nuevo id de usuario
  const newUserId = cryptoService.generateUUID();

  //guardar el usuario en la db
  const user = {
    ...userData,
    id: newUserId,
    password: hashedPassword,
    emailValidated: false,
  };
  await dbService.saveUser(user);

  //guardar el código de validación
  const expirationTimestamp = timeService.getTimestampMinutesFromNow(5);
  const validationCode = {
    id: cryptoService.generateUUID(),
    userId: user.id,
    code: randomCode,
    expirationTimestamp,
  };
  await dbService.saveValidationCode(validationCode);

  //enviar el mail
  await emailService.sendValidationEmail(user, validationCode.code);
};
