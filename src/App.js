import React from 'react'
import './App.css'
import './reset.css'
import {connect} from 'react-redux'
import {setUser} from './ducks/authReducer'
import routes from './routes'
// import Dashboard from './Components/Dashboard/Dashboard'
// import Auth from './Components/Auth/Auth'

function App(props) {
  return (
    <div className="App">
      
      {routes}

    </div>
  );
}


const mapStateToProps = (store) => store.authReducer
export default connect(mapStateToProps, {setUser})(App)
