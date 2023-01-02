import React from "react";
import DatePicker from 'react-multi-date-picker';

export const SelectDate =()=>{
    return(
        <div>
            <DatePicker 
                format="MMMM DD, YYYY"
                placeholder="Select a Date"
                onChange={(date)=>{
                    console.log(date)
                }}
            />
        </div>
    )
}