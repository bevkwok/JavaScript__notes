import React, { useReducer } from 'react';

// can make some variables

const ACTIONS = { // all caps because it's a global nonchanging variable
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

const ReducerCount = props => {
    
    //useReducer function takes 2 parameter
    //first parameter is reducer(a function we perform on our state to get new state)
    //second parameter is the initial state
    //initial state is an object because state is more complex when we use useReducer


    //defined our reducer here
    //reducer takes 2 things. current state and action
    //the action will be passed into the dispatch function
    //reducer takes current state, perform action, return new state
    function reducer(state, action){  // state changes according to these action
        switch(action.type) {
            case ACTIONS.INCREMENT: // was case 'increment'
                return { count: state.count + 1 }
            case ACTIONS.DECREMENT: // was case 'decrement'
                return { count: state.count - 1 }
            default:
                return state
        }
    }

    //if the initial state have only one value - count
    //ok to set to [count, dispatch]
    //dispatch = a function we called to update our state
    const [state, dispatch] = useReducer(reducer, {count : 0});

    function increment(){
        //want to have different type of action
        //so have to pass in the type of action
        dispatch({ type: ACTIONS.INCREMENT});
    }

    function decrement(){
        dispatch({ type: ACTIONS.DECREMENT});
    }

    return (
        <>
        <button onClick={decrement}> - </button>
        <span>{state.count}</span>
        <button onClick={increment}> + </button>
        </>
    )
}

export default ReducerCount;