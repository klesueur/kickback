import { render } from '@testing-library/react'
import React from 'react'
import AllMerch from './AllMerch'

function MerchItem(props) {


    render()

        return (

            <div className='item-description'>

                <img src={props.data.img} 
                width='190' height='175' />
                <p>{props.data.name}</p>
                <p>${props.data.price}</p>

            </div>
        )
    
}


export default MerchItem