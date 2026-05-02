require("dotenv").config();
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

  async sendRegistrationEmail(user, code) {
    await this.sendEmail(
      user.email,
      user.name,
      "Welcome to TROCO!",
      `<div style="margin: 0; padding: 0; background-color: antiquewhite;">
      <div style="width: 100%; padding: 30px 0; text-size-adjust: 100%;">
        <span style="color: transparent; visibility: hidden; display: none; opacity: 0; height: 0; width: 0; font-size: 0;"></span>
        <div style="text-align: center;">
          <div style="padding: 10px 40px;">
            <a href="http://localhost:5173/" target="_blank" style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #0099ff; text-decoration: none;">
              <img class="logo" width="160" src="https://i.postimg.cc/GtVN3yF7/Troco.png" alt="TROCO Logo">
            </a>
          </div>
          <div style="background-color: white; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); padding: 30px; border-radius: 15px; width: 600px; margin: 0 auto;">
            <table style="width: 100%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td style="padding: 20px 40px;">
                    <h1 style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 800; letter-spacing: -0.03em; margin: 0; font-size: 48px; line-height: 1.15em; color: #000;">Hey buddy, welcome to TROCO!</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 30px 0; text-align: center;">
                    <a href="#" target="_blank" style="display: inline-block; text-decoration: none;">
                      <img alt="TROCO Gif" src="https://i.postimg.cc/mgCgFwF3/1145e203-6d7d-4c3b-8935-f7356d00d3bb-rw-1200.gif" width="400" style="border-radius: 16px; width: 400px;">
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 40px 30px;">
                    <p style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6em; letter-spacing: -0.1px; margin: 0; text-align: left; color: #000;">
                    Dear ${user.username}, you’re just a few steps to become a Trocolo 🐻' and join the community of Trocolers! Follow these simple steps to complete the process:
                    </p>
                  </td>
                </tr>
                <!-- Code validation section -->
                <tr>
                  <td style="padding: 10px 40px;">
                    <table style="width: 100%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr>
                          <td style="width: 12%; padding: 0;">
                            <div style="width: 50px; height: 50px; display: block; background-color: transparent; margin: 10px 20px 10px 0; padding: 0; text-align: center; border-radius: 50px; border: 1px solid #e28210; color: #ffffff; font-weight: 700;">
                              <img src="https://i.postimg.cc/15L43KHS/1-E28210.png" width="26" height="26" style="padding: 12px;">
                            </div>
                          </td>
                          <td style="width: 80%; padding: 0;">
                            <p style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6em; letter-spacing: -0.1px; text-rendering: optimizeLegibility; margin: 0; text-align: left; color: #000;">
                              Copy this validation code: <strong>${code}</strong>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <!-- Log in section -->
                <tr>
                  <td style="padding: 10px 40px;">
                    <table style="width: 100%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr>
                          <td style="width: 12%; padding: 0;">
                            <div style="width: 50px; height: 50px; display: block; background-color: transparent; margin: 10px 20px 10px 0; padding: 0; text-align: center; border-radius: 50px; border: 1px solid #e28210; color: #ffffff; font-weight: 700;">
                              <img src="https://i.postimg.cc/SQPxgGH9/2-E28210.png" width="26" height="26" style="padding: 12px;">
                            </div>
                          </td>
                          <td style="width: 80%; padding: 0;">
                            <p style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6em; letter-spacing: -0.1px; text-rendering: optimizeLegibility; margin: 0; text-align: left; color: #000;">
                              <strong>Log in to your account</strong> using your newly created credentials and paste the code
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <!-- Complete profile section -->
                <tr>
                  <td style="padding: 10px 40px;">
                    <table style="width: 100%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr>
                          <td style="width: 12%; padding: 0;">
                            <div style="width: 50px; height: 50px; display: block; background-color: transparent; margin: 10px 20px 10px 0; padding: 0; text-align: center; border-radius: 50px; border: 1px solid #e28210; color: #ffffff; font-weight: 700;">
                              <img src="https://i.postimg.cc/8Cw1Mdhj/3-E28210.png" width="26" height="26" style="padding: 12px;">
                            </div>
                          </td>
                          <td style="width: 80%; padding: 0;">
                            <p style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6em; letter-spacing: -0.1px; text-rendering: optimizeLegibility; margin: 0; text-align: left; color: #000;">
                              <strong>Complete your profile</strong> and start uploading your stuff!
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <!-- Login button -->
                <tr>
                  <td style="padding: 50px 0 0px;">
                    <a href="http://localhost:5173/" target="_blank" class="button" style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; border-radius: 40px; display: inline-block; font-size: 18px; font-weight: 600; text-decoration: none; vertical-align: middle; line-height: 50px; text-size-adjust: none; text-align: center; width: 500px; border: 1px solid #e28210; background-color: #e28210; color: white;">
                      Login to TROCO
                    </a>
                  </td>
                </tr>
                <!-- Exchange Guide section -->
                <tr>
                  <td style="padding: 50px 40px 20px;">
                    <table style="width: 100%; border-collapse: collapse; background-color: antiquewhite; border-radius: 15px;" cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr>
                          <td style="padding: 10px 80px;">
                            <p style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 15px; line-height: 1.6em; letter-spacing: -0.1px; text-rendering: optimizeLegibility; margin: 0; text-align: center; color: #000;">
                              <strong>Feeling lost about currency exchange? </strong>
                              <br />Take a look on the <a href="http://localhost:5173/exchange_guide" target="_blank" style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e28210; text-decoration: none;"><strong>"Exchange Guide" </strong></a> and begin to exchange like a pro.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <!-- Footer section -->
              </tbody>
            </table>
          </div>
        </div>
        <tr>
            <td style="padding: 10px 40px;">
              <div style="padding: 10px 0 30px; text-align: center;">
                <p style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 20px; letter-spacing: -0.1px; color: #aaaaaa; text-rendering: optimizeLegibility; margin: 0;">
                  Trueque 123 Trocolin Street, 15055 Trocolo, Trocolandia.
                </p>
                <p style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 20px; letter-spacing: -0.1px; color: #aaaaaa; text-rendering: optimizeLegibility; margin: 0;">
                  <a href="#" style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e28210;">See web version</a> of this email or <a href="#" style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e28210;">unsubscribe</a>
                </p>
              </div>
            </td>
          </tr>
      </div>
    </div>`
    );
  },

  async sendOfferEmail(
    sellerUser,
    buyerUser,
    requestedItemsDetails,
    offeredItemsDetails
  ) {
    await this.sendEmail(
      sellerUser.email,
      sellerUser.name,
      "You have a new TROCO offer waiting for You",
      `<div style="margin: 0; padding: 0; background-color: antiquewhite;">
      <div style="width: 100%; padding: 30px 0; text-size-adjust: 100%;">
        <span style="color: transparent; visibility: hidden; display: none; opacity: 0; height: 0; width: 0; font-size: 0;"></span>
        <div style="text-align: center;">
          <div style="padding: 10px 40px 20px;">
            <a href="http://localhost:5173/" target="_blank" style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #0099ff; text-decoration: none;">
              <img class="logo" width="160" src="https://i.postimg.cc/GtVN3yF7/Troco.png" alt="TROCO Logo">
            </a>
          </div>
          <div style="background-color: white; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); padding: 30px; border-radius: 15px; width: 600px; margin: 0 auto;">
            <table style="width: 100%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td style="padding: 20px 40px;">
                    <h1 style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 800; letter-spacing: -0.03em; margin: 0; font-size: 48px; line-height: 1.15em; color: #000;">Great News!</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 30px 0; text-align: center;">
                    <a href="#" target="_blank" style="display: inline-block; text-decoration: none;">
                      <img alt="TROCO Gif" src="https://i.postimg.cc/Vktn8J5f/ezgif-com-video-to-gif.gif" width="600" style="border-radius: 16px; width: 520px;">
                    </a>
                  </td>
                </tr>
                <!-- Offer section -->
                <tr>
                  <td style="padding: 10px 40px 30px;">
                    <p style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6em; letter-spacing: -0.1px; margin: 0; text-align: left; color: #000;">
                        An amazing offer from <strong>${buyerUser.username}</strong> has been made for your TROCO product. Take your time to consider it, and <a href="http://localhost:5173/" target="_blank" style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e28210; text-decoration: none;">we're here</a> to help with any questions:<br>
                    </p>
                  </td>
                </tr>
                <tr>
                    <td style="padding: 10px 40px 30px;">
                      <p style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6em; letter-spacing: -0.1px; margin: 0; text-align: left; color: #000;">
                          REQUESTED ITEMS: <br><strong>${buyerUser.username}</strong><br><br>OFFERED ITEMS: <br><strong>${requestedItemsDetails}</strong><br>
                      </p>
                    </td>
                  </tr>
                <!-- Login button -->
                <tr>
                  <td style="padding: 20px 0 0px;">
                    <a href="http://localhost:5173/" target="_blank" class="button" style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; border-radius: 40px; display: inline-block; font-size: 18px; font-weight: 600; text-decoration: none; vertical-align: middle; line-height: 50px; text-size-adjust: none; text-align: center; width: 500px; border: 1px solid #e28210; background-color: #e28210; color: white;">
                      Review Offer
                    </a>
                  </td>
                </tr>
                <!-- Exchange Guide section -->
                <tr>
                  <td style="padding: 50px 40px 20px;">
                    <table style="width: 100%; border-collapse: collapse; background-color: antiquewhite; border-radius: 15px;" cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr>
                          <td style="padding: 10px 80px;">
                            <p style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 15px; line-height: 1.6em; letter-spacing: -0.1px; text-rendering: optimizeLegibility; margin: 0; text-align: center; color: #000;">
                              <strong>Feeling lost about currency exchange? </strong>
                              <br />Take a look on the <a href="http://localhost:5173/" target="_blank" style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e28210; text-decoration: none;"><strong>"Exchange Guide" </strong></a> and begin to exchange like a pro.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <!-- Footer section -->
              </tbody>
            </table>
          </div>
        </div>
        <tr>
            <td style="padding: 10px 40px;">
              <div style="padding: 10px 0 30px; text-align: center;">
                <p style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 20px; letter-spacing: -0.1px; color: #aaaaaa; text-rendering: optimizeLegibility; margin: 0;">
                  Trueque 123 Trocolin Street, 15055 Trocolo, Trocolandia.
                </p>
                <p style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 20px; letter-spacing: -0.1px; color: #aaaaaa; text-rendering: optimizeLegibility; margin: 0;">
                  <a href="#" style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e28210;">See web version</a> of this email or <a href="#" style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e28210;">unsubscribe</a>
                </p>
              </div>
            </td>
          </tr>
      </div>
    </div>`
    );
  },

  async sendRejectionEmail(rejectedUser, rejectordUser, dealId, comment) {
    await this.sendEmail(
      rejectedUser.email,
      rejectedUser.name,
      "TROCOFFER Rejected :(",
      `<div style="margin: 0; padding: 0; background-color: antiquewhite;">
      <div style="width: 100%; padding: 30px 0; text-size-adjust: 100%;">
          <span
              style="color: transparent; visibility: hidden; display: none; opacity: 0; height: 0; width: 0; font-size: 0;"></span>
          <div style="text-align: center;">
              <div style="padding: 10px 40px 20px;">
                  <a href="http://localhost:5173/" target="_blank"
                      style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #0099ff; text-decoration: none;">
                      <img class="logo" width="160" src="https://i.postimg.cc/GtVN3yF7/Troco.png" alt="TROCO Logo">
                  </a>
              </div>
              <div
                  style="background-color: white; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); padding: 30px; border-radius: 15px; width: 600px; margin: 0 auto;">
                  <table style="width: 100%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                      <tbody>
                          <tr>
                              <td style="padding: 20px 40px;">
                                  <h1
                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 800; letter-spacing: -0.03em; margin: 0; font-size: 48px; line-height: 1.15em; text-align: left; color: #000;">
                                      Sorry buddy ; ( </h1>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 10px 40px 10px;">
                                  <p
                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6em; letter-spacing: -0.1px; margin: 0; text-align: left; color: #000;">
                                      The deal has been rejected by ${rejectordUser.username}.
                                  </p>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 20px 0; text-align: center;">
                                  <a href="#" target="_blank" style="display: inline-block; text-decoration: none;">
                                      <img alt="TROCO Gif" src="https://i.postimg.cc/vHkGGvjY/1746.gif" width="600"
                                          style="border-radius: 16px; width: 520px;">
                                  </a>
                              </td>
                          </tr>
                          <!-- Rejection section -->
                          <tr>
                              <td style="padding: 10px 40px 20px;">
                                  <table
                                      style="width: 100%; border-collapse: collapse; background-color: antiquewhite; border-radius: 15px;"
                                      cellpadding="0" cellspacing="0">
                                      <tbody>
                                          <tr>
                                              <td style="padding: 10px 20px;">
                                                  <p
                                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 15px; line-height: 1.6em; letter-spacing: -0.1px; text-rendering: optimizeLegibility; margin: 0; text-align: left; color: #000;">
                                                      <strong>This is the rejection reason:</strong>
                                                  </p>
                                                  <p
                                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-style: italic; font-weight: 400; font-size: 13px; line-height: 1.6em; letter-spacing: -0.1px; text-rendering: optimizeLegibility; margin: 0; text-align: left; color: #000;">
                                                      ${comment}
                                                  </p>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
  
                          <tr>
                              <td style="padding: 30px 40px 10px;">
                                  <p
                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6em; letter-spacing: -0.1px; margin: 0; text-align: left; color: #000;">
                                      Don't let this stop you, keep sending offers to other TROCO users!
                                  </p>
                              </td>
                          </tr>
                          <!-- Go to TROCO button -->
                          <tr>
                              <td style="padding: 10px 0 20px;">
                                  <a href="http://localhost:5173/" target="_blank" class="button"
                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; border-radius: 40px; display: inline-block; font-size: 18px; font-weight: 600; text-decoration: none; vertical-align: middle; line-height: 50px; text-size-adjust: none; text-align: center; width: 500px; border: 1px solid #e28210; background-color: #e28210; color: white;">
                                      Go to TROCO >
                                  </a>
                              </td>
                          </tr>
                          <!-- Footer section -->
                      </tbody>
                  </table>
              </div>
          </div>
          <tr>
              <td style="padding: 10px 40px;">
                  <div style="padding: 10px 0 30px; text-align: center;">
                      <p
                          style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 20px; letter-spacing: -0.1px; color: #aaaaaa; text-rendering: optimizeLegibility; margin: 0;">
                          Trueque 123 Trocolin Street, 15055 Trocolo, Trocolandia.
                      </p>
                      <p
                          style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 20px; letter-spacing: -0.1px; color: #aaaaaa; text-rendering: optimizeLegibility; margin: 0;">
                          <a href="#"
                              style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e28210;">See
                              web version</a> of this email or <a href="#"
                              style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e28210;">unsubscribe</a>
                      </p>
                  </div>
              </td>
          </tr>
      </div>
  </div>`
    );
  },

  async sendAcceptanceEmail(buyerUser, sellerUser, dealId, exchangeConditions) {
    await this.sendEmail(
      buyerUser.email,
      sellerUser.name,
      "TROCOFFER Accepted!",
      `<div style="margin: 0; padding: 0; background-color: antiquewhite;">
      <div style="width: 100%; padding: 30px 0; text-size-adjust: 100%;">
          <span
              style="color: transparent; visibility: hidden; display: none; opacity: 0; height: 0; width: 0; font-size: 0;"></span>
          <div style="text-align: center;">
              <div style="padding: 10px 40px 20px;">
                  <a href="http://localhost:5173/" target="_blank"
                      style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #0099ff; text-decoration: none;">
                      <img class="logo" width="160" src="https://i.postimg.cc/GtVN3yF7/Troco.png" alt="TROCO Logo">
                  </a>
              </div>
              <div
                  style="background-color: white; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); padding: 30px; border-radius: 15px; width: 600px; margin: 0 auto;">
                  <table style="width: 100%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                      <tbody>
                          <tr>
                              <td style="padding: 20px 40px;">
                                  <h1
                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 800; letter-spacing: -0.03em; margin: 0; font-size: 48px; line-height: 1.15em; text-align: left; color: #000;">
                                      You rock!</h1>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 10px 40px 10px;">
                                  <p
                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6em; letter-spacing: -0.1px; margin: 0; text-align: left; color: #000;">
                                      Congratulations your deal has been accepted!
                                  </p>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 30px 0; text-align: center;">
                                  <a href="#" target="_blank" style="display: inline-block; text-decoration: none;">
                                      <img alt="TROCO Gif"
                                          src="https://i.postimg.cc/zB7ChcR2/ba14fd33613bead590f5aaaf99ca19db.gif"
                                          width="600" style="border-radius: 16px; width: 520px;">
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 10px 40px 20px;">
                                  <p
                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6em; letter-spacing: -0.1px; margin: 0; text-align: left; color: #000;">
                                      Your offer has been snapped up by ${sellerUser.username}. <br><br> Now it's time to
                                      move on to the final step. Take a look into the <strong>details to carry out the
                                          exchange:</strong>
                                  </p>
                              </td>
                          </tr>
                          <!-- Conditions section -->
                          <tr>
                              <td style="padding: 10px 40px 50px;">
                                  <table
                                      style="width: 100%; border-collapse: collapse; background-color: antiquewhite; border-radius: 15px;"
                                      cellpadding="0" cellspacing="0">
                                      <tbody>
                                          <tr>
                                              <td style="padding: 10px 20px;">
                                                  <p
                                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 15px; line-height: 1.6em; letter-spacing: -0.1px; text-rendering: optimizeLegibility; margin: 0; text-align: left; color: #000;">
                                                      ${exchangeConditions}
                                                  </p>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 10px 40px 30px;">
                                  <p
                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6em; letter-spacing: -0.1px; margin: 0; text-align: left; color: #000;">
                                      Remember that if you have any questions <a href="http://localhost:5173/"
                                          target="_blank"
                                          style="font-family:'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;color:#E28210;text-decoration:none">we're
                                          here</a> to help you.<br><br><br>The TROCO Team.<br>
                                  </p>
                              </td>
                          </tr>
                          <!-- Footer section -->
                      </tbody>
                  </table>
              </div>
          </div>
          <tr>
              <td style="padding: 10px 40px;">
                  <div style="padding: 10px 0 30px; text-align: center;">
                      <p
                          style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 20px; letter-spacing: -0.1px; color: #aaaaaa; text-rendering: optimizeLegibility; margin: 0;">
                          Trueque 123 Trocolin Street, 15055 Trocolo, Trocolandia.
                      </p>
                      <p
                          style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 20px; letter-spacing: -0.1px; color: #aaaaaa; text-rendering: optimizeLegibility; margin: 0;">
                          <a href="#"
                              style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e28210;">See
                              web version</a> of this email or <a href="#"
                              style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e28210;">unsubscribe</a>
                      </p>
                  </div>
              </td>
          </tr>
      </div>
  </div>`
    );
  },

  async sendDealRating(ratedUser, dealId, ratorUser, rate, comment) {
    await this.sendEmail(
      ratedUser.email,
      ratedUser.name,
      "A TROCOLO Has Rated One of Your Exchanges",
      `<div style="margin: 0; padding: 0; background-color: antiquewhite;">
      <div style="width: 100%; padding: 30px 0; text-size-adjust: 100%;">
          <span
              style="color: transparent; visibility: hidden; display: none; opacity: 0; height: 0; width: 0; font-size: 0;"></span>
          <div style="text-align: center;">
              <div style="padding: 10px 40px 20px;">
                  <a href="http://localhost:5173/" target="_blank"
                      style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #0099ff; text-decoration: none;">
                      <img class="logo" width="160" src="https://i.postimg.cc/GtVN3yF7/Troco.png" alt="TROCO Logo">
                  </a>
              </div>
              <div
                  style="background-color: white; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); padding: 30px; border-radius: 15px; width: 600px; margin: 0 auto;">
                  <table style="width: 100%; border-collapse: collapse;" cellpadding="0" cellspacing="0">
                      <tbody>
                          <tr>
                              <td style="padding: 20px 40px;">
                                  <h1
                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 800; letter-spacing: -0.03em; margin: 0; font-size: 48px; line-height: 1.15em; text-align: left; color: #000;">
                                      Hey dude,</h1>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 10px 40px 10px;">
                                  <p
                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6em; letter-spacing: -0.1px; margin: 0; text-align: left; color: #000;">
                                      We're thrilled to share the fantastic feedback you've received from ${ratorUser.username} about your recent exchange. 🌟
                                  </p>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 20px 0; text-align: center;">
                                  <a href="#" target="_blank" style="display: inline-block; text-decoration: none;">
                                      <img alt="TROCO Gif"
                                          src="https://i.postimg.cc/k4xwGkzR/grundig-cr550.gif"
                                          width="600" style="border-radius: 16px; width: 520px;">
                                  </a>
                              </td>
                          </tr>
                          <!-- Feedback section -->
                          <tr>
                              <td style="padding: 10px 40px 50px;">
                                  <table
                                      style="width: 100%; border-collapse: collapse; background-color: antiquewhite; border-radius: 15px;"
                                      cellpadding="0" cellspacing="0">
                                      <tbody>
                                          <tr>
                                              <td style="padding: 10px 20px;">
                                                  <p style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 15px; line-height: 1.6em; letter-spacing: -0.1px; text-rendering: optimizeLegibility; margin: 0; text-align: left; color: #000;">
                                                      <strong>User:</strong> ${ratedUser.username}'
                                                  </p><br>
                                                  <p style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 15px; line-height: 1.6em; letter-spacing: -0.1px; text-rendering: optimizeLegibility; margin: 0; text-align: left; color: #000;">
                                                      <strong>Rate:</strong>  ${rate}
                                                  </p><br>
                                                  <p style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 15px; line-height: 1.6em; letter-spacing: -0.1px; text-rendering: optimizeLegibility; margin: 0; text-align: left; color: #000;">
                                                      <strong>Comments:</strong>
                                                  </p>
                                                  <p style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; font-style: italic; font-weight: 400; font-size: 13px; line-height: 1.6em; letter-spacing: -0.1px; text-rendering: optimizeLegibility; margin: 0; text-align: left; color: #000;">
                                                  ${comment}
                                                  </p>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                          <!-- Go to TROCO button -->
                          <tr>
                              <td style="padding: 10px 0 20px;">
                                  <a href="http://localhost:5173/" target="_blank" class="button"
                                      style="font-family: 'Poppins', 'HelveticaNeue', Helvetica, Arial, sans-serif; border-radius: 40px; display: inline-block; font-size: 18px; font-weight: 600; text-decoration: none; vertical-align: middle; line-height: 50px; text-size-adjust: none; text-align: center; width: 500px; border: 1px solid #e28210; background-color: #e28210; color: white;">
                                      Go to TROCO >
                                  </a>
                              </td>
                          </tr>
                          <!-- Footer section -->
                      </tbody>
                  </table>
              </div>
          </div>
          <tr>
              <td style="padding: 10px 40px;">
                  <div style="padding: 10px 0 30px; text-align: center;">
                      <p
                          style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 20px; letter-spacing: -0.1px; color: #aaaaaa; text-rendering: optimizeLegibility; margin: 0;">
                          Trueque 123 Trocolin Street, 15055 Trocolo, Trocolandia.
                      </p>
                      <p
                          style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 20px; letter-spacing: -0.1px; color: #aaaaaa; text-rendering: optimizeLegibility; margin: 0;">
                          <a href="#"
                              style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e28210;">See
                              web version</a> of this email or <a href="#"
                              style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e28210;">unsubscribe</a>
                      </p>
                  </div>
              </td>
          </tr>
      </div>
  </div>`
    );
  },
};
