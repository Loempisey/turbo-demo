import React from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Typepography } from "../atoms/Typography";
import {useRouter} from 'next/router';
import Link from 'next/link'

interface LoginUser {
    email: string;
    password: string;
};

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
}).required();

export const Login = ()=>{
    const {register, handleSubmit, formState: {errors} } = useForm<LoginUser>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: LoginUser): void =>{
        console.log(data)
    }

    const router = useRouter();

    return(
        <div className="border rounded-lg p-12 w-4/12 mx-auto my-48 mt-10">
            <h3 className="text-3xl">Sign in !</h3>
            <Typepography label="Please fill your information below"/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="your email" {...register("email")}  className="border w-full p-3 rounded-lg mt-4 focus:border-indigo-500" name="email" required/>
                {errors.email?.message}
                <input type="password" placeholder="your password" {...register("password")} className="border w-full p-3 rounded-lg mt-4 focus:border-indigo-500" name="password" required/>
                {errors.password?.message}
                <button 
                className="bg-indigo-500 text-white w-full p-3 rounded-lg mt-8 hover:bg-indigo-700" type="submit">Login</button>
            </form>
            <Link href="/Signup">
                <a>Sign Up</a>
            </Link>
        </div>
    )
}