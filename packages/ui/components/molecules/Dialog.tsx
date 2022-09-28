import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { SelectTime } from "../atoms/TimePicker";

export const PopupForm=()=> {
    const [open, setOpen] = React.useState<boolean>(false);
    const [startDate, setStartDate] = React.useState<Date>(new Date());
    const [topic, setTopic] = React.useState<string>('');

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
                                        <input type="text" className="border p-2 rounded-lg mt-4 focus:border-indigo-500" onChange={handleTopicChange} value={topic} ></input>
                                        <h3 className="mt-2 text-[15px] font-medium leading-relaxed text-gray-800">
                                            Date 
                                        </h3>
                                        <DatePicker selected={startDate} 
                                            onChange={(date) => setStartDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            dateFormat="MMMM d, yyyy "
                                            className="border p-2 rounded-lg mt-4 focus:border-indigo-500"/>
                                        <h3 className="mt-2 text-[15px] font-medium leading-relaxed text-gray-800">
                                            Select Room 
                                        </h3>
                                        <div className="relative w-full lg:max-w-sm">
                                            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                                <option >Technical Room</option>
                                                <option>Practical Room</option>
                                                <option>other</option>

                                            </select>
                                        </div>
                                        <h3 className="mt-2 text-[15px] font-medium leading-relaxed text-gray-800">
                                            Time 
                                        </h3>
                                        <SelectTime />
                                        {/* <div className="timepicker relative form-floating mb-3 xl:w-96">
                                            <input type="text"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Select a time" />
                                        </div> */}
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-500 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={() =>
                                                    setOpen(false)
                                                }
                                            >
                                                Create
                                            </button>
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() =>
                                                    setOpen(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </div>
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