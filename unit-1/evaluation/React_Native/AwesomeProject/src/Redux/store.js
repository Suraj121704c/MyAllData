import { configureStore } from "@reduxjs/toolkit";
const { default: thunk } = require("redux-thunk");

// User Define Import File 
import { authReducer } from "./Reducers/AuthReducer";

export const store = configureStore({
    reducer : {
        auth : authReducer
    },
    middleware : [thunk],
})
