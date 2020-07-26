// Core Dependencies
import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'

// Reducers
import dataLayer from './dataLayer'


// Merge and expose them
export default combineReducers({
    dataLayer,
    // form: formReducer,
})
