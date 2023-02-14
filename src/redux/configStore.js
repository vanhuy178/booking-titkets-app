import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { carouselReducer } from './reducers/carouselReducer';
import { LoadingReducer } from './reducers/LoadingReducer';
import { ManagingBookingTicketsReducer } from './reducers/ManagingBookingtTicketsReducer';
import { manageCenimaReducer } from './reducers/ManagingCenimaReducer';
import { ManagingMovieReducer } from './reducers/ManagingMoviesReducer';
import { managingUserReducer } from './reducers/ManagingUserReducer';
const rootReducer = combineReducers({
    carouselStore: carouselReducer,
    managingMoviesStore: ManagingMovieReducer,
    managingCenimaStore: manageCenimaReducer,
    managingUserStore: managingUserReducer,
    managingBookingTicketsStore: ManagingBookingTicketsReducer,
    loadingReducerStore: LoadingReducer
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;