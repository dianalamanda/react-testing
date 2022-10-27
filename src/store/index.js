import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS":
            let data = action.payload ? action.payload : []
            return {users: data};
    
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store