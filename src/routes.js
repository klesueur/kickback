import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import MerchShop from './Components/MerchShop/MerchShop'


export default (
    <Switch>

        <Route exact path='/' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/merchstore' component={MerchShop} />
        
    </Switch>
)