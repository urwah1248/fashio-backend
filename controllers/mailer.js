const nodemailer = require('nodemailer');

const sendOrderEmail = async (orderData) => {
    try {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });
  
      // Compose email details
      const mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>',
        to: 'urwahpatel@gmail.com',
        subject: 'New Order Received',
        text: `An order has been received by ${orderData.name}.`,
        html: `<p>An order has been received.</p><pre>${JSON.stringify(orderData, null, 2)}</pre>`,
      };
  
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

module.exports = sendOrderEmail