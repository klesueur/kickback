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

    getProduct: async (req, res) => {

        const db = req.app.get('db')
        const { id } = req.params
        await db.get_product([id])
        //Ask about this function as well as below
        const product = await getAllProduct(db)
        res.status(200).send(product)


    }

}