import React from 'react'

export default function ReducerForm() {
    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };

    function reducer(state, action) {
        return {
            ...state,
            [action.type]: action.payload
        };
    }
    return (
        <div>
            
        </div>
    )
}
