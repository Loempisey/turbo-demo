import React, { useState, ChangeEvent, FormEvent } from "react";

export const FormInput = () =>{
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
   
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('form is submitted')
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value);
        console.log("email:", email)
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
        console.log('password:', password)
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleEmailChange} value={email}></input>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={handlePasswordChange} value={password}></input>
                </label>
                <button type="submit" className="bg-transparent
                hover:bg-blue-500 
                text-blue-700 
                font-semibold 
                hover:text-white
                py-2 px-4 border 
                border-blue-500 
                hover:border-transparent rounded">Submit</button>
            </form>
        </div>
    )
}