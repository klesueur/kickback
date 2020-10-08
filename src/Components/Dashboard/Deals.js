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
    const [selectedMonth, setSelectedMonth] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [deal_id, setDeal_id] = useState('')

    useEffect( () => {
        axios.get('/api/deals').then((res) => {props.setDeals(res.data)})
    }, [])

    const resetFields = () => {
        setSelectedMonth('')
        setPurchaseTotal('')
        setLeaseId('')
        setCustFirst('')
        setCustLast('')
    }


// console.log('Deals props', props)
    return(
        <div className='dashboard-deals'>
            <div className='deals-display'>
                <h2 className ='your-deals'>Your Deals</h2>
                { props.dealsReducer.deals.map( (deal) => {
                    
                    return <div className='each-deal' > 
                        <div className='each-deal-left-portion'>
                            <p>{deal.lease_id}</p> 
                            <p className='customer-name'>{deal.customer_first} {deal.customer_last}</p>
                        </div>
                        <div className='each-deal-right-portion'>
                            <p>${deal.purchase_total}</p>
                            <button className='deal-edit-button'
                                onClick={() => {
                                    setIsEditing(true)
                                    setSelectedMonth(deal.month)
                                    setPurchaseTotal(deal.purchase_total)
                                    setLeaseId(deal.lease_id)
                                    setCustFirst(deal.customer_first)
                                    setCustLast(deal.customer_last)
                                    setDeal_id(deal.deal_id)
                                }}>
                                
                                edit
                            </button>
                            <button
                                className='deal-delete-button'onClick={ () => {
                                    axios.delete(`/api/deals/${deal.deal_id}`).then((res) => {
                                        console.log('setDeals', res.data)
                                        props.setDeals(res.data)

                                        axios.get('/auth/user').then((results) => {
                                            props.setUser(results.data)
                                        })
                                    })
                                }} >
                                
                                delete    
                            </button>
                        </div>
                    </div>
                }) }
            </div>

            <div className='deals-form'>
                
                <div className='input-fields'>
                    <p className='add-new-deal'>add new deal:</p>
                    <div>
                        <input placeholder='Lease ID'
                            value={leaseId}
                            onChange={(e) => {setLeaseId(e.target.value)}} />
                        <input placeholder="First Name"
                            value={custFirst}
                            onChange={(e) => {setCustFirst(e.target.value)}}
                        />
                        <input placeholder="Last Name"
                            value={custLast}
                            onChange={(e) => {setCustLast(e.target.value)}} />
                    </div>
                    
                    
                    <div>
                        <input placeholder='Purchase Total'
                            value={purchaseTotal}
                            onChange={(e) => {setPurchaseTotal(e.target.value)}} />
                        
                        <select value={selectedMonth}
                            onChange={(e) => {setSelectedMonth(e.target.value)}}>

                            {month.map(month => (
                            <option
                                key={month.value}
                                value={month.value}>
                                {month.label}
                            </option>
                            ))}
                        </select>
                     </div>

                </div>

                <div >
                    {isEditing ? <button className='add-deal-button'
                        onClick={() => {
                            axios.put(`/api/deals/${deal_id}`, {lease_id: leaseId, customer_first: custFirst, customer_last: custLast, purchase_total: purchaseTotal, month: selectedMonth}).then((res) => {
                                props.setDeals(res.data)
                                axios.get('/auth/user').then((results) => {
                                    resetFields()
                                    setIsEditing(false)
                                props.setUser(results.data)}) }
                                ).catch((err) => {console.log(err)})
                        }}
                    >save</button> 
                    
                    
                    : 
                    
                    <button className='add-deal-button'
                     // ADD INPUT FIELD BELOW ONCE CREATED
                    onClick={ () => {
                        axios.post('/api/deals', {lease_id: leaseId, customer_first: custFirst, customer_last: custLast, purchase_total: purchaseTotal, month: selectedMonth}).then((res) => {
                        props.setDeals(res.data)
                        axios.get('/auth/user').then((results) => {
                            resetFields()
                        props.setUser(results.data)}) }
                        ).catch((err) => {console.log(err)})
                        }}> add 
                    </button>} 
                </div>

            </div>

        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps, {setDeals, setUser})(Deals)