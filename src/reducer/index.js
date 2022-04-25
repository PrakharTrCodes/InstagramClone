import { combineReducers } from "redux";
import UsersListReducer from '../routes/screens/reducer';
import { authReducer } from "../routes/screens/signUp/authReducer";

const rootReducer = combineReducers({
    UsersListReducer, authReducer
});

export default rootReducer;