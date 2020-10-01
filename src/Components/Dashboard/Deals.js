import React, {useState} from 'react'
import { connect } from 'react-redux'
import {} from '../../ducks/dealsReducer'

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
                {/* /* month drop */}
                <button>Add New Deal</button>
            </div>

        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState.dealsReducer
export default connect(mapStateToProps)(Deals)