import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirm };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1){
            setFirstNameError("First name is required!");
        } else if (e.target.value.length < 3){
            setFirstNameError("First name must be at least 3 characters");
        }else{
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1){
            setLastNameError("Last name is required!");
        } else if(e.target.value.length < 3){
            setLastNameError("Last name must be at least 3 characters");
        }else{
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Email is required!");
        } else if(e.target.value.length < 6){
            setEmailError("Please enter a valid email");
        } else{
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length<1){
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters");
        } else{
            setPasswordError("");
        }
    }

    const handleConfirm = (e) =>{
        setConfirm(e.target.value);
        if(e.target.value.length<1){
            setConfirmError("Confirm Password is required");
        }else if(e.target.value.length < 8){
            setConfirmError("Confirm Password must be at least 8 characters");
        }else if(e.target.value !== password){
            setConfirmError("Passwords must match");
        }else{
            setConfirmError("");
        }

    }

    return (
        <div>
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={handleFirstName} value={firstName} />
                <p>&nbsp;</p>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{firstNameError}</p> : ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={handleLastName} value={lastName} />
                <p>&nbsp;</p>
                {
                    lastNameError ?
                    <p style={{color: 'red'}}>{lastNameError}</p> : ''
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={handleEmail} value={email} />
                <p>&nbsp;</p>
                {
                    emailError ?
                    <p style={{color: 'red'}}>{emailError}</p> : ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={handlePassword} value={password} />
                <p>&nbsp;</p>
                {
                    passwordError ?
                    <p style={{color: 'red'}}>{passwordError}</p> : ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={handleConfirm} value={confirm} />
                <p>&nbsp;</p>
                {
                    confirmError ?
                    <p style={{color: 'red'}}>{confirmError}</p> : ''
                }
            </div>
            <input type="submit" value="Create User!" />
        </form>
        <p>Form Data:</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email Address: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirm}</p>

        </div>
        
    );
};

export default UserForm;
