import React, {useState} from 'react'
import './Auth.css'
import { connect } from 'react-redux'
import {setUser} from '../../ducks/authReducer'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    return (
        <div className='login-content'>
            <div> k i c k b a c k </div>
            <div className='login-inputs-buttons'>
                <div className='login-inputs'>
            
                    <input className='login-email-box' placeholder={' e m a i l '} value={email}
                    onChange={(e) => {setEmail(e.target.value)}} />

                    <input className='login-password-box' placeholder={' p a s s w o r d '} type='password' value={password}
                    onChange={(e) => {setPassword(e.target.value)}} />

                 </div>

                 <div className='login-buttons'>

                    <button className='login-button' onClick={ () => {
                    axios.post('/auth/login', {email, password}).then((res) => {
                    props.setUser(res.data)
                    history.push('/dashboard')
                    })
            
                    } }> l o g i n </button>

                    <button className='register-button' onClick={ () => {props.setIsRegistered(true)}}> r e g i s t e r </button>

                 </div>
            </div>
        </div>
    )
}


export default connect(null, {setUser})(Login)