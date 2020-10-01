import React, {useState} from 'react'
import { connect } from 'react-redux'
import {setDeals} from '../../ducks/dealsReducer'
import axios from 'axios'

function Deals(props) {

    const [leaseId, setLeaseId] = useState('')
    const [custFirst, setCustFirst] = useState('')
    const [custLast, setCustLast] = useState('')
    const [purchaseTotal, setPurchaseTotal] = useState('')


    return(
        <div>
            <div>
                list
            </div>

            <div>
                <input placeholder='Lease ID'
                value={leaseId} 
                onChange={(e) => {setLeaseId(e.target.value)}} />
                <input placeholder="Customer's First Name" 
                value={custFirst} 
                onChange={(e) => {setCustFirst(e.target.value)}}
                 />
                <input placeholder="Customer's Last Name"
                value={custLast}
                onChange={(e) => {setCustLast(e.target.value)}} />
                <input placeholder='Purchase Total'
                value={purchaseTotal}
                onChange={(e) => {setPurchaseTotal(e.target.value)}} />
                {/* MONTH DROPDOWN HERE */}
                <button onClick={ () => {
                    // ADD INPUT FIELD BELOW ONCE CREATED
                    axios.post('/api/deals', {lease_id: leaseId, customer_first: custFirst, customer_last: custLast, purchase_total: purchaseTotal}).then(
                        (res) => {
                            props.setDeals(res.data)
                        }
                    ).catch((err) => {console.log(err)})
                }}> Add New Deal </button>
            </div>

        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps, {setDeals})(Deals)