import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as Styled from './Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: (args: any) => void;
}

export const Button = ({ children, onClick, ...rest }: ButtonProps) => {
  return (
    <Styled.Button
      onClick={onClick}
      {...rest}
    >
      {children}
    </Styled.Button>
  );
};