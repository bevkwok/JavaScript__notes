import React, { useState } from 'react';
import HookFormDisplay from './HookFormDisplay';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [hairColor, setHairColor] = useState("");




    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, age, hairColor };
        console.log("Welcome", newUser);
    }

    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name : </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={firstName}/>
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value)} value={lastName}/>
                </div>
                <div>
                    <label>Age : </label>
                    <input type="text" onChange={ (e) => setAge(e.target.value)} value={age}/>
                </div>
                <div>
                    <label>Hair Color : </label>
                    <input type="text" onChange={ (e) => setHairColor(e.target.value)} value={hairColor}/>
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <HookFormDisplay firstName={firstName} lastName={lastName} age={age} hairColor={hairColor} />
        </div>
    );
};

export default HookForm;