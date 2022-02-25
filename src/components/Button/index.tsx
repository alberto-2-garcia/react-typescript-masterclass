import React from 'react';
import { ButtonProps } from './interface';
import './style.scss';

export const Button: React.FC<ButtonProps> = ({ className, callback, children }) => {
  return (
    <button className={`btn ${className}`} onClick={callback}>{children}</button>
  )
}
