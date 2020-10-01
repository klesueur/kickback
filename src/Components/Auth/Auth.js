import React, {useState} from 'react'
import {connect} from 'react-redux'
import {setUser, logoutUser} from '../../ducks/authReducer'
import Login from './Login'
import Register from './Register'



function Auth(props) {
    const [isRegistered, setIsRegistered] = useState(false)

// console.log(props)
    return (
        <div>
            <h1> AUTH </h1>
            
    {/* {props.user ? <h1>Hello, {props.user.first}</h1> : <h2> Please login </h2>} 
            <button onClick={ () => {props.history.push('/Dashboard')} }> Dashboard </button>
            <button onClick={ () => {
                props.setUser({email: 'someemail@mail.com', first: 'Fernando'})
                props.history.push('/Dashboard')
                }}> Login </button>
            <button onClick={ () => {props.logoutUser()}}> Logout </button> */}

            {isRegistered ? <Register /> : <Login setIsRegistered={setIsRegistered} />}
        </div>
    )
}

const mapStateToProps = (store) => store.authReducer 
export default connect(mapStateToProps, {setUser, logoutUser})(Auth)