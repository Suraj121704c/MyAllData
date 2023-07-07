import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Reducers/AuthReducer";
const { default: thunk } = require("redux-thunk");
import { applyMiddleware } from "redux";

export const store = configureStore({
    reducer : {
        auth : authReducer
    },
    middleware : [thunk],
})
