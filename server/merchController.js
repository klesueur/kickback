const getAllProduct = async (db) => {
    const product = await db.get_merch()
    return product
}

const cart = { total: 0, items: [] }
let cartId = 0

const updateCartTotal = () => {
    const total = cart.items.reduce((acc, element) => {
      return acc + element.price * element.quantity
    }, 0)
  
    cart.total = total.toFixed(2)
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
    
    getCart: async (req, res) => {

        res.status(200).send(req.session.cart)

    },

    // changeQuantity: async (req, res) => {
    //     for changing quantity after adding to cart
    // },

    checkout: (req, res) => {
        cart.total = 0
        cart.items = []
        //NEED TO DEDUCT FROM SPIFF TOTAL, CODE HERE AND PULL UPDATE_SPIFF SOMEHOW
        res.status(200).send(req.session.cart)
    }

}