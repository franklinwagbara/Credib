import React from "react";
import ButtonStyled from "./styles/ButtonStyled";

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props): JSX.Element => {
  return <ButtonStyled>{children}</ButtonStyled>;
};
export default Button;
