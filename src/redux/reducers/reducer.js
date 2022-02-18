/**
 *  reducer => takes stuff from actions and is called in index.js 
 * in this case since there is an async call (with axios) middleware(thunk) is a 2nd param in created store
 */


const initialState = {
    loading: false,
    shops: [],
    error: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SHOPS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_SHOP_SUCCESS':
            return {
                loading: false,
                shops: action.payload,
                error: ''
            }
        case 'FETCH_SHOPS_FAILURE':
            return {
                loading: false,
                shops: [],
                error: action.payload
            }
        default: return {
            loading: false,
            ...state
        }
    }
}
export default reducer;