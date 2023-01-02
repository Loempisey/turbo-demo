import React from "react";

interface TextProp {
    label: string;
  }
  
  export const Typepography =  (props: TextProp)=>{
    return(
      <div>
        <p  className="text-gray-500 text-sm mt-4">{props.label}</p>
      </div>
    )
  }
  
