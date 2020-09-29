require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const controller = require('./controller') //will hold all 3 endpoints: authControllers, dealsController, merchController
const verifyUser = require('./middlewares/verifyUser') //middleware for later?

const app = express()
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

app.use(express.json())
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { massAge: 1000 * 60 * 60 * 24 * 365 },
    })
)


//#auth endpoints below


//#deals endpoints below


massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }, 
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log("DB is connected, yo!")
    app.listen(SERVER_PORT, () => 
    console.log(`LISTENING ON PORT ${SERVER_PORT}!!!`))
})
