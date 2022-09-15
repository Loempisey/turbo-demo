import React from "react";

export const Login = ()=>{
    return(
        <div className="border rounded-lg p-12 w-4/12 mx-auto my-48 mt-10">
            <h3 className="font-extrabold text-3xl">Let's Sign up !</h3>
            <p className="text-gray-500 text-sm mt-4">Please fill your information below </p>

            <form>
                <input type="email" placeholder="your email" className="border w-full p-3 rounded-lg mt-4 focus:border-indigo-500"></input>
                <input type="password" placeholder="your password" className="border w-full p-3 rounded-lg mt-4 focus:border-indigo-500"></input>
                <button type="submit" className="bg-indigo-500 text-white w-full p-3 rounded-lg mt-8 hover:bg-indigo-700">Login</button>
            </form>
        </div>
    )
}