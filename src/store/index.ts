import {combineReducers, configureStore} from "@reduxjs/toolkit"
import productReducer from './reducers/productSlice'
import subGroupsReducer from './reducers/subGroupSlice'
import formReducer from './reducers/formSlice'

const rootReducer = combineReducers({
    productReducer,
    subGroupsReducer,
    formReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']