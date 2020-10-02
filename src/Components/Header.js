import React from 'react'
import './Header.css'
import {connect} from 'react-redux'
import {setUser, logoutUser} from '../ducks/authReducer'
import {withRouter} from 'react-router-dom'


function Header(props) {

    return (
        <div className='header'>
            header
            
            <div>
                <button onClick={() => {props.history.push('/dashboard')}}> Dashboard </button>
                <button onClick={() => {props.history.push('/merchstore')}}> Merch Store </button>
            </div>

            <div>
                <h1> Hello, {props.user && props.user.first}</h1>
                <button onClick={ () => {
                    props.logoutUser() 
                    props.history.push('/')
                  }}> Logout </button>
            </div>

        </div>
    )
}


const mapStateToProps = (store) => store.authReducer
export default connect(mapStateToProps, {setUser, logoutUser})(withRouter(Header))