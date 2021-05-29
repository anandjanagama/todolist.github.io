import mainReducer from './reducers/mainReducer';
import {createStore} from 'redux'

const Store= createStore(mainReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;