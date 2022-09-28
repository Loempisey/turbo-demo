import React, {useState} from "react";
import DatePicker from 'react-datepicker'

export const SelectTime = ()=>{
    const [dateTime, setDateTime] = React.useState<Date>(new Date())
    return(
        <div>
            <DatePicker selected={dateTime}
            onChange={(date)=> setDateTime(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Select a time"
            dateFormat="h:mm aa"
           />
        </div>
    )
}

