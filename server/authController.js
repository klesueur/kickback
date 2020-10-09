const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
require('dotenv').config()

module.exports = {

    register: async (req, res) => {

        const db = req.app.get('db')
        const { email, first, last, company, password } = req.body
        const [user] = await db.check_user([email])
        if (user) {
            return res.status(409).send('User already exists. Please login.')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.register_user([email, first, last, company, hash])
        req.session.user = newUser

        // Send confirmation email here? nodeMailer
        //creating reusable transporter object using default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: false,
            port: 587,
            auth: {
                // user: `${process.env.REACT_APP_GMAIL_ACCOUNT}`,
                // pass: `${process.env.REACT_APP_GMAIL_PASSWORD}`
                user: "austin.randall.47@gmail.com",
                pass: "niavrxjehepekjur"
            },
            
        })

        let HelperOptions = {
            from: '"Kickback" <kara.lesueur@gmail.com>',
            to: `${email}`,
            subject: 'Kickback Registration',
            html:
                `<div> Name: ${first} ${last} <br/> Company: ${company} <br/> Email: ${email} </div>`
        }

        //send mail with defined transport object
        transporter.sendMail(HelperOptions, (error, info) => {
            if(error) {
                return console.log('this is an error', error)
            }
            // return res.status(200).send('All set to start earning kickback!')
            console.log('mail sent')
        })

        res.status(200).send(req.session.user)
        
    },

    login: async (req, res) => {

        const db = req.app.get('db')
        const { email, password } = req.body
        const [existingUser] = await db.check_user([email])
        if (!existingUser) {
            return res.status(404).send('User not found. Please register.')
        }
        
        const isAuthenticated = bcrypt.compareSync(password, existingUser.password)
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect email or password')
        }
        delete existingUser.password

         //Put user on session
        req.session.user = existingUser
        res.status(200).send(req.session.user)

    },

    logout: (req, res) => {

        req.session.destroy()
        res.sendStatus(200)

    },

    getUser: async (req, res) => {
        //Get user from session
        const db = req.app.get('db')

        if (req.session.user) {
            const [user] = await db.check_user(req.session.user.email)
            req.session.user = user
            res.status(200).send(req.session.user)
        } else {
            res.status(404).send('No session found')
        }
        
    }

}