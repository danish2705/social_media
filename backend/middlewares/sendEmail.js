const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  // Looking to send emails in production? Check out our Email API/SMTP product!
  var transporter = nodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "41320bd5880afc",
      pass: "9c2933c8dcf568",
    },
  });

  const mailOption = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    test: options.message,
  };
  await transporter.sendMail(mailOption);
};
