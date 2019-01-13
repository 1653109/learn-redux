import * as actionTypes from '../actions';

const initState = {
    results: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })
            }
        case actionTypes.DELETE_RESULT:
            const results = state.results.filter((result) => result.id !== action.id);
            return {
                ...state,
                results
            }
        default:
            break;
    }

    return state;
};

export default reducer;