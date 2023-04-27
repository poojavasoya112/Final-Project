import { combineReducers } from "redux";
import UserReducer from "./User.reducer";
import ProductReducer from "./Product.reducer";

const Rootreducer = combineReducers({
    ProductReducer , UserReducer
})

export default Rootreducer