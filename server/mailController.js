const nodemailer = require('nodemailer')
require('dotenv').config();

module.exports = {
  mail: (req, res) => {
    const db = req.app.get('db')
        const { email, first, last, company } = req.body

     //creating reusable transporter object using default SMTP transport
     let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 3050,
        auth: {
            user: `${process.env.REACT_APP_GMAIL_ACCOUNT}`,
            pass: `${process.env.REACT_APP_GMAIL_PASSWORD}`
        },
        TLS: {
            rejectUnauthorized: false
        }
    })

    let HelperOptions = {
        from: '"Kickback" <kara.lesueur@gmail.com>',
        to: `${process.env.REACT_APP_GMAIL_SEND_TO}`,
        subject: 'Kick Registration',
        html:
            `<div> Name: ${first} ${last} <br/> Company: ${company} <br/> Email: ${email} </div>`
    }

    //send mail with defined transport object
    transporter.sendMail(HelperOptions, (error, info) => {
        if(error) {
            return console.log('this is an error', error)
        }
        return res.status(200).send('All set to start earning kickback!')
    })

  }
}