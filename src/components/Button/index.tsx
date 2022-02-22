import React from 'react'
import { ButtonProps } from './interface';
import './style.scss';

export const Button: React.FC<ButtonProps> = ({ type = 'default', children }) => {
  const className = type === 'primary' ? 'primary' : '';

  return (
    <button className={className}>{children || 'Button'}</button>
  )
}
