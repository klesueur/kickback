import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {setDeals} from '../../ducks/dealsReducer'
import {setUser} from '../../ducks/authReducer'

function Deals(props) {

    const [leaseId, setLeaseId] = useState('')
    const [custFirst, setCustFirst] = useState('')
    const [custLast, setCustLast] = useState('')
    const [purchaseTotal, setPurchaseTotal] = useState('')
    const [month, setMonth] = useState([
        {
        label: 'month...',
        value: ''
        },
      { label: "January", value: "January" },
      { label: "February", value: "February" },
      { label: "March", value: "March" },
      { label: "April", value: "April" },
      { label: "May", value: "May" },
      { label: "June", value: "June" },
      { label: "July", value: "July" },
      { label: "August", value: "August" },
      { label: "September", value: "September" },
      { label: "October", value: "October" },
      { label: "November", value: "November" },
      { label: "December", value: "December" },
    ])

    useEffect( () => {
        axios.get('/api/deals').then((res) => {props.setDeals(res.data)})
    }, [])


// console.log('Deals props', props)
    return(
        <div className='dashboard-deals'>
            <div className='deals-display'>
                <h1>Your Deals</h1>
                { props.dealsReducer.deals.map( (deal) => {
                    
                    return <p className='each-deal'> 
                    {deal.lease_id} 
                    {deal.customer_first}
                    {deal.customer_last}
                    ${deal.purchase_total} </p>
                }) }
            </div>

            <div className='deals-form'>
                
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
                </div>
                
                
                <div>
                    <input placeholder='Purchase Total'
                        value={purchaseTotal}
                        onChange={(e) => {setPurchaseTotal(e.target.value)}} />
                    
                    <select value={month}
                            onChange={(e) => {setMonth(e.target.value)}}>
                        {month.map(month => (
                        <option
                            key={month.value}
                            value={month.value}>
                            {month.label}
                        </option>
                    ))}
                    </select>

                    <div className='add-deal-button'>
                        <button onClick={ () => {
                    
                        // ADD INPUT FIELD BELOW ONCE CREATED
                            axios.post('/api/deals', {lease_id: leaseId, customer_first: custFirst, customer_last: custLast, purchase_total: purchaseTotal, }).then(
                            (res) => {
                            props.setDeals(res.data)
                            axios.get('/auth/user').then((res) => {
                            props.setUser(res.data)
                            })
                            }
                            ).catch((err) => {console.log(err)})
                            }}> Add New Deal 
                        </button>
                    </div>

                </div>



            </div>

        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps, {setDeals, setUser})(Deals)