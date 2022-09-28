import React, { useState } from "react";
import { Typepography } from "../atoms/Typography";
import {useRouter} from 'next/router'


export const Login = ()=>{
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent)=>{
        console.log('Form is sumitted !')
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
        console.log('email==>', email)
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
        console.log('pass==>', password)
    }
    return(
        <div className="border rounded-lg p-12 w-4/12 mx-auto my-48 mt-10">
            <h3 className="text-3xl">Let's Sign in !</h3>
            <Typepography label="Please fill your information below"/>
            {/* <p className="text-gray-500 text-sm mt-4">Please fill your information below </p> */}
            <form onClick={handleSubmit}>
                <input type="email" placeholder="your email"  className="border w-full p-3 rounded-lg mt-4 focus:border-indigo-500" onChange={handleEmailChange} value={email}></input>
                <input type="password" placeholder="your password" className="border w-full p-3 rounded-lg mt-4 focus:border-indigo-500" onChange={handlePasswordChange} value={password}></input>
                <button type="button" className="bg-indigo-500 text-white w-full p-3 rounded-lg mt-8 hover:bg-indigo-700" onClick={()=>{
                    router.push("/navigation")
                }}>Login</button>
            </form>
        </div>
    )
}