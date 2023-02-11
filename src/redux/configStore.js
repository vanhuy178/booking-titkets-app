import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { carouselReducer } from './reducers/carouselReducer';
const rootReducer = combineReducers({
    carouselStore: carouselReducer
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store