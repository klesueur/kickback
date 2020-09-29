const getAllDeals = async (db) => {
    const deals = await db.get_deals()
    return deals
}

module.exports = {

    getDeals: async (req, res) => {

        const db = req.app.get('db')
        const deals = await getAllDeals(db)
        res.status(200).send(deals)

    }, 

    addDeal: async (req, res) => {
        
        const db = req.app.get('db')
        //Pull user id from session
        const { id } = req.session.user
        //Get all info from req.body
        //Ask about destructing below if this is the info that needs to be added 
        const { lease_id, customer_first, customer_last, purchase_total, month } = req.body
        //Save deal to db
        await db.add_deal([lease_id, customer_first, customer_last, purchase_total, month, rep_id])
        //Send array of deals
        const deals = await getAllDeals(db)
        res.status(200).send(posts)

    },

    editDeal: async (req, res) => {

        const db = req.app.get('db')
        //Get info from body
        const { purchase_total } = req.body
        //Get deal_id from params
        const { deal_id } = req.params
        //Save updated deal
        await db.edit_deal([purchase_total, deal_id])
        //Send array of posts
        const posts = await getAllPosts(db)
        res.status(200).send(posts)

    },

    deleteDeal: async (req, res) => {

        const db = req.app.get('db')
        //Get deal_id from params
        const { deal_id } = req.params
        //Delete deal
        await db.delete_deal([deal_id])
        //Send back updated array
        const deals = await getAllDeals(db)
        res.status(200).send(deals)

    }

}