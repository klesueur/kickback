import { createStore, combineReducers, applyMiddleware } from 'redux' 
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from './authReducer' 

const rootReducer = combineReducers({
    authReducer
})

export default createStore(
    rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware))
)