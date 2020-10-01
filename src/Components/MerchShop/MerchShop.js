import React from 'react'
import {Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from '../Header'

function MerchShop(props) {

    return (
        <div>
            <Header />
            MERCH SHOP
        </div>
    )
}


const mapStateToProps = (store) => store.dealsReducer
export default connect(mapStateToProps)(MerchShop)