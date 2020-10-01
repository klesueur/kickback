import React from 'react'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/authReducer'
import Deals from './Deals'

function Dashboard(props) {
    console.log(props.user)
    return (
        <div>
            <h1> Dashboard </h1>
            <h1> Hello, {props.user && props.user.first}</h1>
    <h2>Your total spiff kickback: ${props.user && props.user.spiff}</h2>
            {/* <button onClick={ () => {props.history.push('/')} }> Auth Button </button> */}
            <button onClick={ () => {
                props.logoutUser()
                props.history.push('/')
                }}> Logout </button>

            <div>
                <Deals />
            </div>
        </div>
    )
}


const mapStateToProps = (store) => store.authReducer 
export default connect(mapStateToProps, {logoutUser})(Dashboard)