import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { carouselReducer } from './reducers/carouselReducer';
import { manageCenimaReducer } from './reducers/ManagingCenimaReducer';
import { ManagingMovieReducer } from './reducers/ManagingMoviesReducer';
const rootReducer = combineReducers({
    carouselStore: carouselReducer,
    managingMoviesStore: ManagingMovieReducer,
    managingCenimaStore: manageCenimaReducer
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;