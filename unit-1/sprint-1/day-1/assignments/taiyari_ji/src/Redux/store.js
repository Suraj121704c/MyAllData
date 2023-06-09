import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer} from "./AuthReducer/reducer"
import {reducer as studentReducer} from "./StudentReducer/reducer"

const rootReducer = combineReducers({
    authReducer,
    studentReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
