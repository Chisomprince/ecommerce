import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer'


const INITIAL_STATE={}

const store = createStore(rootReducer,INITIAL_STATE,composeWithDevTools()) 
export default store