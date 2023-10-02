
import React from 'react';
import './Button.css';

export interface ButtonProps extends
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const {children} = props;


  return (
    <button className={`btn btn-${variant}`} {...props}>{children}</button>
  )
}
