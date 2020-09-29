require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./authController') 
const dealsCtrl = require('./dealsController')
const merchCtrl = require('./merchController')
const verifyUser = require('./middlewares/verifyUser') 

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
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

//#deals endpoints below
app.get('/api/deals', verifyUser, dealsCtrl.getDeals)
app.post('/api/deals', verifyUser, dealsCtrl.addDeal)
app.put('/api/deals/:deal_id', verifyUser, dealsCtrl.editDeal)

//#merch endpoints below


massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }, 
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log("DB is connected, yo!")
    app.listen(SERVER_PORT, () => 
    console.log(`LISTENING ON PORT ${SERVER_PORT}!!!`))
})
