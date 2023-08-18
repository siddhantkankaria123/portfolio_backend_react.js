const nodemailer = require("nodemailer");
const saveContactDetails = (req, res) => {
  const data = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  var mailoptions = {
    from: req.body.email,
    to: "siddhantkankaria122@gmail.com",
    subject: req.body.subject,
    text: `Name:${req.body.name}  \nMessage: ${req.body.message}`,
  };
  transporter.sendMail(mailoptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.render("thanks");
      console.log("email sent" + info.response);
    }
  });
  console.log(data);
  res.json(data);
};
module.exports = saveContactDetails;
