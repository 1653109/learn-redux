import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initState = {
    results: []
};

const deleteResult = (state, action) => {
    const results = state.results.filter((result) => result.id !== action.id);
    return updateObject(state, { results });
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) });
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            break;
    }

    return state;
};

export default reducer;