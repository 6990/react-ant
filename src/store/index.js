import {configureStore} from '@reduxjs/toolkit'
import TabReducer from  './reducers/tab'
import notifacationReducer from './reducers/notifacation'

export default configureStore({
    reducer: {
        tab: TabReducer,
        notifacation: notifacationReducer
    }
})