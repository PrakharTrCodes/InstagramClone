const initialParams = {
    email: '',
    password: '',
    dp : "https://image.shutterstock.com/z/stock-photo-ilmage-of-lord-ganesh-on-ganesh-chaturthi-at-a-ganesh-pandal-1438208468.jpg"
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