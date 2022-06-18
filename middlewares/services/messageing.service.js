const fs = require("fs"), ejs = require("ejs");
const {transporter} = require('../utils/mail.transport');
const {sendError, sendSuccess} = require('../helpers/responses/messaging.response');


const messagingService = (invoiceObject, dataObject, res) => {
  fs.readFile(`${__dirname}/template.ejs`, "utf-8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    let mailOptions = {
      from: `"${dataObject['sender']['email']}"`,
      to: dataObject['receiver']['email'],
      subject: dataObject['subject'],
      html: ejs.render(data, {invoiceObject: invoiceObject, dataObject: dataObject})
    }
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        const response = sendError();
        res.status(response.status).json({status: response.type, message: response.message});
      } else {
        console.log(info);
        const response = sendSuccess();
        res.status(response.status).json({status: response.type, message: response.message});
      }
    });
  })


}


module.exports = {messagingService}