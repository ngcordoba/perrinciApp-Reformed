import { createStore, combineReducers } from 'redux'

import WalkersReducer from './reducers/walkers.reducer'
import WalksReducer from './reducers/walks.reducer'

const RootReducer = combineReducers({
    walkers: WalkersReducer,
    walks: WalksReducer
})

export default createStore(RootReducer)