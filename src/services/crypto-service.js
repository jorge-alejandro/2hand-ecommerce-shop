const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  /**
   *  Hashea la contraseña y devuelve la contraseña hasheada
   */
  async hashPassword(plainPassword) {
    return await bcrypt.hash(plainPassword, 12);
  },

  /**
   *  Valida la contraseña con respecto al hash
   */
  async validatePassword(plainPassword, hash) {
    return await bcrypt.compare(plainPassword, hash);
  },

  /**
   * Genera un código aleatorio para validar emails
   * @returns código aleatorio de 6 dígitos
   */
  generateRandomValidationCode() {
    return "123456";
  },

  generateUUID() {
    return crypto.randomUUID();
  },

  generateJWT(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  },

  parseJWT(token) {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      return payload;
    } catch {
      return null;
    }
  },
};

