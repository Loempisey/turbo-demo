
import React from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useRouter} from 'next/router';
import {Typepography} from '../atoms/Typography'


interface User {
    username: string;
    email: string;
    password: string;
};

const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
}).required();

export const SignUp=()=> {
    const {register, handleSubmit, formState: {errors}} = useForm<User>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: User): void=>{
        console.log(data)
    }

    const router = useRouter()

    return(
        <div className="border rounded-lg p-12 w-4/12 mx-auto my-48 mt-10">
            <h3 className="text-3xl">Sign Up</h3>
            <Typepography label="Please fill your information below"/>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} className="border w-full p-3 rounded-lg mt-4 focus:border-indigo-500" placeholder="your username"/>
                    {errors.username?.message}
                    <input type="email"  {...register("email")} className="border w-full p-3 rounded-lg mt-4 focus:border-indigo-500" placeholder="your email"/>
                    {errors.email?.message}
                    <input type="password" {...register("password")} className="border w-full p-3 rounded-lg mt-4 focus:border-indigo-500" placeholder="your password"/>
                    {errors.password?.message}
                <button onClick={()=>{
                    router.push("/Signin")
                }} className="bg-indigo-500 text-white w-full p-3 rounded-lg mt-8 hover:bg-indigo-700">Sign Up</button>
            </form>
        </div>
    )
}