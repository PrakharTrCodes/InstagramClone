import SearchData from "../../assets/Data/UserData";

const initialState = {
    Data : SearchData,
    isSignedIn : false,
    dp : "https://pps.whatsapp.net/v/t61.24694-24/222745879_949257135778260_6739302449485593153_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVwM66qpFiB655jyphFQCUhAlodWOd4aMW2ynsitic-zoQ&oe=627CDE1F"
}

const UsersListReducer = (state = initialState, action) => {
    console.log('The state is',state)
    const { type, payload } = action;
    console.log("payload", payload)
    switch (type) {
        case "SIGNEDIN_OUT" : 
            {console.log('The state is in case SignedOut', state)
            return {...state, isSignedIn: payload} }
        case "LIKE_UNLIKE":
            return {...state,...payload}
        case "SET_DP" :
            return {...state, dp : payload}
        default:
            return { ...state };
    }
}

export default UsersListReducer;