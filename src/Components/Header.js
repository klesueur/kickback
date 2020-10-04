import React from 'react'
import './Header.css'
import {connect} from 'react-redux'
import {setUser, logoutUser} from '../ducks/authReducer'
import {withRouter} from 'react-router-dom'


function Header(props) {

    return (
        <div className='header'>

            <div className='logo'>
                //logo here
            </div>
            
            <div className='header-content'>
                <div className='kickback-and-nav'>
                        <p className='dash-kickback'>kickback</p>
                    <div className='nav-buttons'>
                        <button className='dashboard-button'
                        onClick={() => {props.history.push('/dashboard')}}> Dashboard </button>
                        <button className='merchstore-button'
                        onClick={() => {props.history.push('/merchstore')}}> Merch Store </button>
                    </div>
                </div>
          
                <div className='greeting-and-logout'>
                    <p className='greeting'> Hello, {props.user && props.user.first}</p>
                    <button className='logout-button'
                        onClick={ () => { 
                        props.logoutUser()
                        props.history.push('/')
                    }}> Logout </button>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (store) => store.authReducer
export default connect(mapStateToProps, {setUser, logoutUser})(withRouter(Header))