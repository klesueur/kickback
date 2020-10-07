// import React, { useEffect, useState } from 'react'
import React from 'react'
import './Dashboard.css'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/authReducer'
import Deals from './Deals'
import Header from '../Header'
import Graph from './Graph'



function Dashboard(props) {
    console.log('dashboard props.user', props.user)

    return (
        <div>
            
            <Header />

            <div className='dashboard'>
                <div className='dashboard-left'>
            
                    <div className='spiff-display'>
                        <p className='spiff-message'> total spiff kickback: </p>
                        <p className='spiff-total'> ${props.user && props.user.spiff} </p>
                    </div>
                    
                    <div className='countdown-display'>
                        22 days left
                    </div>

                    <div className='chartjs-display'>
                        <Graph />
                    </div>

                </div>
                        
                <div>
                    <Deals />
                </div>  

            </div>
        </div>
    )
}


const mapStateToProps = (store) => store.authReducer 
export default connect(mapStateToProps, {logoutUser})(Dashboard)