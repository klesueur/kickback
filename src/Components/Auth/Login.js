import React, {useState} from 'react'
import { connect } from 'react-redux'
import {setUser} from '../../ducks/authReducer'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    return (
        <div>
            <h1> kickback </h1>
            <div>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <div>
                <button onClick={ () => {
                    axios.post('/auth/login', {email, password}).
                    then((res) => {
                        props.setUser(res.data)
                        history.push('/dashboard')
                    })

                } }> login </button>
                <button onClick={ () => {props.setIsRegistered(true)}}> register </button>
            </div>
        </div>
    )
}


export default connect(null, {setUser})(Login)