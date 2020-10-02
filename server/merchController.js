const getAllProduct = async (db) => {
    const product = await db.get_merch()
    return product
}


module.exports = {

    getMerch: async (req, res) => {

        const db = req.app.get('db')
        const merch = await getAllProduct(db)
        res.status(200).send(merch)

    },

    addToCart: async (req, res) => {

        const db = req.app.get('db')
        const { id } = req.params
        const [product] = await db.get_product([id])

        req.session.cart = []
        req.session.cart.push(product)
        res.status(200).send(req.session.cart)
        
        //Ask about this function as well as below
        // const product = await getAllProduct(db)
        // res.status(200).send(product)

    },
    
    // getCart: async (req, res) => {



    // },

}