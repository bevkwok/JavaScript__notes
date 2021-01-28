import React, { useReducer, useState } from 'react';
import Reducer2ToDo from './Reducer2ToDo';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODD: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

const ReducerToDo = props => {
    // all function that change todo are in this reducer
    function reducer(todos, action){
        switch(action.type) { 
            case ACTIONS.ADD_TODO:
                return [...todos, newTodo(action.payload.name)]
                // was newTodo(name) but we can't access to name submitted from form.
            case ACTIONS.TOGGLE_TODO:
                return todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, complete: !todo.complete}
                    }
                    return todo;
                })
            case ACTIONS.DELETE_TODO:
                return todos.filter(todo =>  todo.id !== action.payload.id)
            default:
                return todos
        }
    }

    function newTodo(name) {
        return { id: Date.now(), name: name, complete: false };
    }

    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        // payload is an object that has all variable we need to preform the action.
        setName('');
    }

    console.log(todos);

    // only need to pass in dispatch but can do all the action in reducer function
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </form>
            {todos.map(todo => {
                return <Reducer2ToDo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </>
    )
}

export default ReducerToDo;