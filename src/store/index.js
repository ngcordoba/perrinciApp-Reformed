import { createStore, combineReducers } from 'redux'

import WalkersReducer from './reducers/walkers_Availables.reducer'
import WalksReducer from './reducers/user_WalksFinished.reducer'
import Walker_WalksFinishedReducer from './reducers/walker_WalksFinished'
import Walker_Qualifications from './reducers/walker_Qualifications'

const RootReducer = combineReducers({
    walkers: WalkersReducer,
    walks: WalksReducer,
    walker_walksFinished: Walker_WalksFinishedReducer,
    walker_Qualifications: Walker_Qualifications
})

export default createStore(RootReducer)