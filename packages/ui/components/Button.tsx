// import * as React from 'react';

// export type ButtonProps = {
//   text: string;
// };

// const Button: React.FC<ButtonProps> = ({ text }) => <button>{text}</button>;

// export default Button


import * as React from "react";

type Props = {
  text: string;
};

export default ({ text }: Props) => <button>{text}</button>;