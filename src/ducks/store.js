import { createStore, combineReducers, applyMiddleware } from 'redux' 
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './authReducer' 

const rootReducer = combineReducers({
    authReducer
})

export default createStore(
    rootReducer, applyMiddleware(promiseMiddleware)
)