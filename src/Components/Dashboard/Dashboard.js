import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/authReducer'
import Deals from './Deals'
import Header from '../Header'


function Dashboard(props) {
    console.log('dashboard props.user', props.user)

        // const [spiff, setSpiff] = useState(0)
        // useEffect(() => {
        //     setSpiff(props.user.spiff)
        // }, [props.user.spiff])

        


    return (
        <div>
            
            <Header />

            <h1> Dashboard </h1>

            
            <div>
               <h2>Your total spiff kickback:</h2> 
               <div>
                   
                   ${props.user && props.user.spiff}
               </div>
            </div>
            

            <div>
                <Deals />
            </div>
        </div>
    )
}


const mapStateToProps = (store) => store.authReducer 
export default connect(mapStateToProps, {logoutUser})(Dashboard)