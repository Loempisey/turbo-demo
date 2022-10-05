import React, {useState} from "react";
import DatePicker from 'react-multi-date-picker'
import TimePicker from "react-multi-date-picker/plugins/time_picker";

export const SelectTime = ()=>{
    return(
        <div >
            <DatePicker 
                disableDayPicker
                placeholder="Select a time"
                format="hh:mm A"
                plugins={[
                    <TimePicker hideSeconds/>
                ]}/>
        </div>
    )
}

