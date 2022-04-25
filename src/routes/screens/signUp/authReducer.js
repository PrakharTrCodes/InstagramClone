const initialParams = {
    email: '',
    password: ''
}

export const authReducer = (state = initialParams, action) => {
    const {type , payload} = action
    switch (type) {
        case "Register":
            return { ...state, ...payload }
        default:
            return state;
    }
}