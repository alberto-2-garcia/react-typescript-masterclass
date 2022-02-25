import React, { useState } from 'react'
import './styles.scss';
import { ButtonProps } from '../Button/interface';
import { ButtonGroupProps } from './interface'

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ flexDirection, children, btnsClass }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className={`btn-group ${flexDirection}`}>
      {React.Children.map(children as React.ReactElement<ButtonProps>[], (child, index) => {
        const className = index === selectedIndex ? 'selected' : btnsClass;
        return React.isValidElement(child) 
          ? React.cloneElement(child, { className:`btn ${className}`, callback: () => setSelectedIndex(index) })
            : child;
      })}
    </div>
  )
}
