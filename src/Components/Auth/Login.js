import React, {useState} from 'react'
import { connect } from 'react-redux'
import {setUser} from '../../ducks/authReducer'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <h1> kickback </h1>
            <div>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <div>
                <button> login </button>
                <button onClick={ () => {props.setIsRegistered(true)}}> register </button>
            </div>
        </div>
    )
}


export default connect(null, {setUser})(Login)