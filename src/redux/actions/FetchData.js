/**
 * actions =>  functions that create types ands payloads
 * types => get passed to reduce and checked with switch statement
 * payload => is what get passed in (like props) 
 * payload => can be used to set state in reducer
 */


const axios = require('axios');
const fetchShopsRequest = () => {
    return {
        type: 'FETCH_SHOPS_REQUEST'
    }
}

const fetchShopsSuccess = shops => {
    return {
        type: 'FETCH_SHOP_SUCCESS',
        payload: shops
    }
}

const fetchShopsFailure = error => {
    return {
        type: 'FETCH_SHOP_FAILURE',
        payload: error
    }
}
const fetchShops = () => {
    return function (dispatch) {
        dispatch(fetchShopsRequest())
        axios
            .get('/data/output.json')
            .then(response => {
                dispatch(fetchShopsSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchShopsFailure(error.message))
            })
    }
}
export default fetchShops;