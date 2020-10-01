import { createStore, combineReducers, applyMiddleware } from 'redux' 
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from './authReducer' 
import dealsReducer from './dealsReducer'

const rootReducer = combineReducers({
    authReducer, dealsReducer
})

export default createStore(
    rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware))
)