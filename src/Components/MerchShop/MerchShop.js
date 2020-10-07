import React from 'react'
import './MerchShop.css'
import {Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from '../Header'
import AllMerch from './AllMerch'
import Cart from './Cart'

function MerchShop(props) {
    

    return (
        <div>
            <Header />

            <div className='merch-shop'>
                
                <AllMerch />
                {/* CART BELOW UNDER CONSTRUCTION! */}
                {/* <Cart /> */}
            </div>
            
        </div>
    )
}


const mapStateToProps = (store) => store.dealsReducer
export default connect(mapStateToProps)(MerchShop)