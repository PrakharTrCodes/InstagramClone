import SearchData from "../../assets/Data";

const initialState = {
    Data : SearchData,
    isSignedIn : false,
}

const UsersListReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log("payload", payload)
    switch (type) {
        case "SIGNEDIN_OUT" : 
            return {...state, isSignedIn: payload} 
        case "LIKE_UNLIKE":
            return {...state,...payload}
        default:
            return { ...state };
    }
}

export default UsersListReducer;