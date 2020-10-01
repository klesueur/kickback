module.exports = (req, res, next) => {
    console.log(req.session)
    if (req.session.user) {
        next()
    } else {
        res.status(403).send('Please log in to perform this action')
        
    }
}