import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [hairColor, setHairColor] = useState("");

    const createUser = (e) => {
        e.preventDefaul();
        const newUser = { firstName, lastName, age, hairColor };
    }


    return(
        <div>
            <form onSubmit={ createUser }>
                    <div>
                        <label>First Name : </label>
                        <input type="text" onChange={ (e) => setFirstName(e.target.value) } value = { firstName }/>
                    </div>
                    <div>
                        <label>Last Name : </label>
                        <input type="text" onChange={ (e) => setLastName(e.target.value) } value = { lastName }/>
                    </div>
                    <div>
                        <label>Age : </label>
                        <input type="text" onChange={ (e) => setAge(e.target.value) } value = { age }/>
                    </div>
                    <div>
                        <label>Hair Color : </label>
                        <input type="text" onChange={ (e) => setHairColor(e.target.value) } value = { hairColor }/>
                    </div>
                    <input type="submit" value="creat user"></input>
            </form>
            <div>
                <h1>
                    New User Name: { firstName } { lastName }
                </h1>
                <p>hair color: { hairColor }</p>
            </div>
        </div>
    )
}

export default UserForm;