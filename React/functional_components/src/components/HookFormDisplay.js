import React from 'react';

const HookFormDisplay = (props) => {
    
    return(
        <div>
            <p>Name: {props.firstName} {props.lastName}</p>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}


export default HookFormDisplay;


