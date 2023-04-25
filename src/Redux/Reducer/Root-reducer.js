import {combineReducers} from "redux"
import { LikeReducer } from "./Like-reducer"
import { ComentReducer } from "./Comments-reducer"
export const rootReducer=combineReducers({
    LikeReducer,
    ComentReducer
})