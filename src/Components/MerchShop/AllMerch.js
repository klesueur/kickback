import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import MerchItem from './MerchItem'



function AllMerch(props) {

    const [allMerch, setAllMerch] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () => {
        axios.get('/api/merch').then((res) => {
            axios.get('/api/cart').then((cartRes) => {
                setAllMerch(res.data)
                setCart(cartRes.data)
            })
        })
    }, [])

    const addToCart = (id) => {
        axios.post('/api/cart', {id}).then((res) => {
            setCart({
                cart: res.data
            })
        })
    }


    
    

    return (
        
        <div>
            mapped all merch
            {allMerch.map((merch) => {
                return <p>
                   <MerchItem key={merch.id} data={merch} />
                </p>
            })}
        </div>
    )
}


const mapStateToProps = (store) => store
export default connect(mapStateToProps)(AllMerch)