const redux = require('redux');
const createStore = redux.createStore;

const initState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initState, action) => {
    if (action.type === 'INC-COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if (action.type === 'ADD-COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }

    return state;
};

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})

// Dispatching Action
store.dispatch({type: 'INC-COUNTER'});
store.dispatch({type: 'ADD-COUNTER', value: 10});
