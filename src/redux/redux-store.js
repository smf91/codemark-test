import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'
import searchReducer from './search-reducer'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    search: searchReducer,
    form : formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store
export default store