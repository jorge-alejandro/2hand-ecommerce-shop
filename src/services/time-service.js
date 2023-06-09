module.exports = {
  /**
   * Devuelve un timestamp X cantidad de minutos en el futuro
   */
  getTimestampMinutesFromNow(minutes) {
    return Date.now() + minutes * 60 * 1000;
  },
};
