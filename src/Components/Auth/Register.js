import React, {useState} from 'react'
import { connect } from 'react-redux'
import {setUser} from '../../ducks/authReducer'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Register(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [company, setCompany] = useState('')
    const history = useHistory()

    return (
        <div>
            <h1> register </h1>
            <div>
                <input placeholder={'First Name'} value={first} 
                onChange={(e) => {setFirst(e.target.value)}} />
                <input placeholder={'Last Name'} value={last} 
                onChange={(e) => {setLast(e.target.value)}} />
                <input placeholder={'Company'} value={company} 
                onChange={(e) => {setCompany(e.target.value)}} />
            </div>
            <div>
                <input placeholder={'Email'} value={email} 
                onChange={(e) => {setEmail(e.target.value)}} />
                <input placeholder={'Password'} type='password' value={password} 
                onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <div>
                <button onClick={ () => {
                    axios.post('/auth/register', { email, first, last, company, password }).then((res) => {
                        props.setUser(res.data)
                        history.push('/Dashboard')                   
                    }).catch((err) => {console.log(err)})
                    //toast in ref code in past project

                } }> submit! </button>
                {/* //toast about email already being taken */}
                
            </div>
        </div>
    )
}


export default connect(null, {setUser})(Register)