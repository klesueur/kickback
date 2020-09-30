const bcrypt = require('bcryptjs')

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

        res.status(200).send(req.session.user)
        
    },

    login: async (req, res) => {

        const db = req.app.get('db')
        const { email, password } = req.body
        const [existingUser] = await db.check_user([email])
        if (!existingUser) {
            return res.status(404).send('User not found. Please register.')
        }
        console.log(existingUser)
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

    getUser: (req, res) => {
        //Get user from session

        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(404).send('No session found')
        }
        
    }

}