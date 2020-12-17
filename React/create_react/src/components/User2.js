import React, { useState }  from 'react';

//use functional component

const User2 = props => {
    const [aging, setAging] = useState(0);

    const handleClick = () => {
        setAging(aging + 1);
    };

    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age + aging }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick= { handleClick }>Add one year</button>
        </div>
    );
}
export default User2;