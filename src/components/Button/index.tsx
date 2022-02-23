import React from 'react';
import { ButtonProps } from './interface';
import './style.scss';

export const Button: React.FC<ButtonProps> = ({ type, callback, children }) => {
  return (
    <button className={type} onClick={callback}>{children}</button>
  )
}
