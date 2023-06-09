const mailjet = require("node-mailjet").apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

module.exports = {
  async sendEmail(to, toName, subject, message) {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAIL_SENDER_FROM,
            Name: process.env.MAIL_SENDER_NAME,
          },
          To: [
            {
              Email: to,
              Name: toName,
            },
          ],
          Subject: subject,
          HTMLPart: message,
        },
      ],
    });
  },

  async sendValidationEmail(user, validationCode) {
    await this.sendEmail(
      user.email,
      user.name,
      "Bienvenido a Troco - Código de validación",
      `<h1>Bienvenido a Troco</h1>
Querido ${user.name}, para poder utilizar todos los servicios de Troco debe validar su email con el siguiente código:
</br>
<pre>${validationCode}</pre>
</br>
Un saludo cordial, el equipo de Troco.
`
    );
  },
};
