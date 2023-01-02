import * as React from "react";
// import React, {ReactNode} from "react";

type ButtonProps = {
  label: string;
}

export const Button = (props: ButtonProps)=>{
  return (
    <div>
    <button
      type="button"
      className="bg-transparent
       bg-indigo-500
       text-white 
       font-semibold 
       hover:text-white
       py-2 px-4
       font-medium
       hover:border-transparent rounded 
       "
    >
      {props.label}
    </button>
    </div>
  );
}

// export const Button = () => {
//   return (
//     <div>
//       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Click here</button>
//     </div>
//   ) 
// };

