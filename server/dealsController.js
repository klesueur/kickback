const getAllDeals = async (db, id) => {
    const deals = await db.get_deals(id)
    return deals
}

module.exports = {

    getDeals: async (req, res) => {

        const db = req.app.get('db')
        const { id } = req.session.user
        const deals = await getAllDeals(db, id)
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
        await db.add_deal([lease_id, customer_first, customer_last, purchase_total, month, id])
        await db.update_spiff(id, 15)
        //Send array of deals
        const deals = await db.get_deals(id)
        res.status(200).send(deals)

    },

    editDeal: async (req, res) => {

        const db = req.app.get('db')
        //Get info from body
        const { purchase_total } = req.body
        //Get deal_id from params
        const { deal_id } = req.params
        //Save updated deal
        await db.edit_deal([purchase_total, deal_id])
        //Send array of deals
        const deals = await getAllDeals(db)
        res.status(200).send(deals)

    },

    deleteDeal: async (req, res) => {

        const db = req.app.get('db')
        //Get deal_id from params
        const { deal_id } = req.params
        const { id } = req.session.user
        //Delete deal
        await db.delete_deal([deal_id])
        await db.update_spiff(id, -15)
        //Send back updated array
        const deals = await getAllDeals(db)
        res.status(200).send(deals)

    },

    getByMonth: async (req, res) => {

        const db = req.app.get('db')
        const { id } = req.session.user
        const { month } = req.query
        const deals = await db.get_by_month(id, month)
        res.status(200).send(deals)

    }

}