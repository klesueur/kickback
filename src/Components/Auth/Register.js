import React, {useState} from 'react'
import { connect } from 'react-redux'
import {setUser} from '../../ducks/authReducer'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify'

function Register(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [company, setCompany] = useState('')
    const history = useHistory()

    return (
        <div>
            

            <div className='register-content'>
            <p className='register'> register </p>
                <div>
                    <input className='register-first'
                    placeholder={'first name'} value={first} 
                    onChange={(e) => {setFirst(e.target.value)}} />
                    <input className='register-last'
                    placeholder={'last name'} value={last} 
                    onChange={(e) => {setLast(e.target.value)}} />
                </div>
                    
                
                <div>
                    <input className='register-email'
                    placeholder={'email'} value={email} 
                    onChange={(e) => {setEmail(e.target.value)}} />
                    <input className='register-company'
                    placeholder={'company'} value={company} 
                    onChange={(e) => {setCompany(e.target.value)}} />
                </div>

                <div>
                    <input className='register-password'
                    placeholder={'password'} type='password' value={password} 
                    onChange={(e) => {setPassword(e.target.value)}} />
                
                    {/* <div> */}
                        <button className='submit-button'
                        onClick={ () => {
                            axios.post('/auth/register', { email, first, last, company, password }).then((res) => {
                                props.setUser(res.data)
                                history.push('/Dashboard')                   
                            }).catch((err) => {console.log(err)})
                            //toast in ref code in past project

                        } }> s u b m i t </button>
                        {/* //toast about email already being taken */}

                        <button 
                        //button is broken
                        className='reg-register-button' 
                        onClick={ () => {props.setIsRegistered(false)}}>back to login</button>

                    {/* </div> */}
                </div>  
            </div>
        </div>
    )
}


export default connect(null, {setUser})(Register)