import React, {useState} from 'react'
import { connect } from 'react-redux'
import {setUser} from '../../ducks/authReducer'

function Register(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [company, setCompany] = useState('')

    return (
        <div>
            <h1> register </h1>
            <div>
                <input value={first} onChange={(e) => {setFirst(e.target.value)}} />
                <input value={last} onChange={(e) => {setLast(e.target.value)}} />
                <input value={company} onChange={(e) => {setCompany(e.target.value)}} />
            </div>
            <div>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <div>
                <button> submit! </button>
                
            </div>
        </div>
    )
}


export default connect(null, {setUser})(Register)