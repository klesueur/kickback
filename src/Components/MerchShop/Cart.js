import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import MerchShop from './MerchShop'
import CartItem from './CartItem'

function Cart() {



    return (
        <div className='cart-view'>
            IMMA CART
        </div>
    )
}


const mapStateToProps = (store) => store
export default connect(mapStateToProps)(Cart)