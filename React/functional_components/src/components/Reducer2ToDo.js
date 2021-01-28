import React from 'react';
import { ACTIONS } from './ReducerToDo';

export default function Reducer2ToDo({ todo, dispatch }){

    // if that todo is completed color would be light grey, complete = black
    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000'}}>{todo.name}</span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})}>Delete</button>
        </div>
    )
}