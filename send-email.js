const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '*********91050',
    pass: '********f522',
  },
});

async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Support" <support@support.email>',
    to: 'customer@gmail.com',
    subject: 'Support delivered.',
    text: 'You have beein supported',
    html: '<b>You have been supported</b>',
  });

  console.log('Message sent: %s', info.messageId);
}

main().catch(console.error);
