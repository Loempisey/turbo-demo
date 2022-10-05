import React, { useState } from "react";
import {useForm, Controller} from 'react-hook-form';
import Select from 'react-select';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { TextField } from "../atoms/Input";

interface TextField {
    topic: string;
    date: string;
    time_from: string;
    time_to: string;
    room: string;
};

interface ISelected {
    value: string;
    label: string;
}

const schema = yup.object().shape({
    topic: yup.string().required(),
    date: yup.string().required(),
    time_from: yup.string().required(),
    time_to: yup.string().required(),
    
}).required();

export const PopupForm=()=> {
    const [open, setOpen] = React.useState<boolean>(false);
    const [topic, setTopic] = React.useState<string>('');
    
    const {register, handleSubmit, control} = useForm<TextField>({
        resolver: yupResolver(schema),
    });

    const selectOptions: ISelected[] = [
        {value:"Technical Room", label: "Technical Room"},
        {value:"Practical Room", label: "Practical Room"},
        {value:"Other", label: "Other"},

    ];
    const onSubmit = (data: TextField): void =>{
        setOpen(false);
        console.log(data)
    }
    
    const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setTopic(e.target.value)
        console.log(topic)
    }

    return (
        <>
            <div className="flex items-center justify-center h-60">
                <button 
                    className="px-6 py-3 text-purple-100 bg-purple-600 rounded-md"
                    type="button"
                    onClick={() => setOpen(true)}
                >
                    Create Meeting
                </button>
            </div>
            {open ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setOpen(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            Schedule Meeting
                                        </h4>
                                        <h3 className="mt-2 text-[15px] font-medium leading-relaxed text-gray-800">
                                            Topic
                                        </h3>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input type="text" {...register("topic")} 
                                            className="border p-2 rounded-lg mt-4 focus:border-indigo-500" 
                                            onChange={handleTopicChange} 
                                            value={topic} ></input>
                                            <h3 className="mt-2 text-[15px] font-medium leading-relaxed text-gray-800">Date</h3>
                                            <input type="date" {...register("date")} placeholder="Select a date" className="border p-2 rounded-lg mt-4 focus:border-indigo-500"></input>
                                            <h3 className="mt-2 text-[15px] font-medium leading-relaxed text-gray-800">Select Room</h3>
                                            <div className="relative w-full lg:max-w-sm">
                                                <Controller
                                                    control={control}
                                                    render={({ field: { onChange, value, name } }) => {
                                                        const currentSelection = selectOptions.find(
                                                          (c) => c.value === value
                                                        );
                                                        const handleSelectChange = (selectedOption: ISelected | null) => {
                                                            onChange(selectedOption?.value);
                                                          }; 
                                                          
                                                          return(
                                                            <Select
                                                                value={currentSelection}
                                                                name={name}
                                                                options={selectOptions}
                                                                onChange={handleSelectChange}/>
                                                          );
                                                        }}
                                                        name="room"
                                                    />
                                            </div>
                                            <h3 className="mt-2 text-[15px] font-medium leading-relaxed text-gray-800">From</h3>
                                            <input type="time" {...register("time_from")} placeholder="Select a time" className="border p-2 rounded-lg mt-4 focus:border-indigo-500"></input>
                                            <h3 className="mt-2 text-[15px] font-medium leading-relaxed text-gray-800">To</h3>
                                            <input type="time" {...register("time_to")} className="border p-2 rounded-lg mt-4 focus:border-indigo-500"></input>
                                            <div className="items-center gap-2 mt-3 sm:flex">
                                                <button  className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                >Create</button>
                                                <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={()=> setOpen(false)}
                                                >
                                                Cancel
                                            </button>
                                            </div>
                                        </form>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
           
        </>
    );
}