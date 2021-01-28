import React, { useState } from 'react';

const ValidationForm = (props) => {
    //for creating new user
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [setConfirmPassword] = useState("");

    //for submition message
    const [submition, setSubmition] = useState(false);
    //Validation for username
    const [usermameError, setUsernameError] = useState("");
    //Validation for email
    const [emailError, setEmailError] = useState("");
    //Validation for password
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");



    // After form submition
    const addUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setSubmition( true );
    };

    // Message before and after form submition
    const submitionMessage = () => {
        if(submition){
            return "Thank you for your submition";
        } else {
            return "Please register first";
        }
    };

    //Validation for username
    const handleUsername = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length < 1) {
            setUsernameError("Username is required");
        } else if(e.target.value.length < 3) {
            setUsernameError("Username must be at least 3 charactor long");
        } else {
            setUsernameError("");
        }
    }

    //Validation for email
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be at least 3 charactor long");
        } else {
            setEmailError("");
        }
    }

    //Validation for password
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 charactor long");
        } else {
            setPasswordError("");
        }
    }

    //Validation for confirm password
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Confirm password must match password");
        } else {
            setConfirmPasswordError("");
        }
    }


    return(
        <div>
            <p>{ submitionMessage() }</p>
            <p>Can also use ternary operator as below</p>
            {
                submition ?
                <p>Thank you for your submition</p> :
                <p>Please register first</p>
            }
            <form onSubmit={addUser}>
                <div>
                    {
                        usermameError ?
                        <p style={{color: 'red'}}>{usermameError}</p> :
                        ''
                    }
                    <label>Username : </label>
                    <input type="text" onChange={handleUsername}/>
                </div>
                <div>
                    {
                        emailError ?
                        <p style={{color: 'red'}}>{emailError}</p> :
                        ''
                    }
                    <label>Email : </label>
                    <input type="text" onChange={handleEmail}/>
                </div>
                <div>
                    {
                        passwordError ?
                        <p style={{color: 'red'}}>{passwordError}</p> :
                        ''
                    }
                    <label>Password : </label>
                    <input type="password" onChange={handlePassword}/>
                </div>
                <div>
                    {
                        confirmPasswordError ?
                        <p style={{color: 'red'}}>{confirmPasswordError}</p> :
                        ''
                    }
                    <label>Confirm Password : </label>
                    <input type="password" onChange={handleConfirmPassword}/>
                </div>
                <input type="submit" value="Create User"/>
            </form>
        </div>
    )
}

export default ValidationForm;