import React from 'react'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/authReducer'

function Dashboard(props) {
    
    return (
        <div>
            <h1> Dashboard </h1>
            <h1> Hello, {props.user && props.user.first}</h1>
            <button onClick={ () => {props.history.push('/')} }> Auth Button </button>
            <button onClick={ () => {
                props.logoutUser()
                props.history.push('/')
                }}> Logout </button>
        </div>
    )
}


const mapStateToProps = (store) => store.authReducer 
export default connect(mapStateToProps, {logoutUser})(Dashboard)