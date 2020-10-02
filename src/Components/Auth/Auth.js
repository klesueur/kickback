import React, {useState} from 'react'
import './Auth.css'
import {connect} from 'react-redux'
import {setUser, logoutUser} from '../../ducks/authReducer'
import Login from './Login'
import Register from './Register'




function Auth(props) {
    const [isRegistered, setIsRegistered] = useState(false)

// console.log(props)
    return (
        <div>
            <div className='auth-view'>
                <div className='login-box'>
                    {isRegistered ? <Register /> : <Login setIsRegistered={setIsRegistered} />}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => store.authReducer 
export default connect(mapStateToProps, {setUser, logoutUser})(Auth)