import React from 'react'
import './style.scss';
import { InputTextProps } from './interface'

export const InputText: React.FC<InputTextProps> = ({ value, labelText, name, onChange, type, hasError, min, max }) => {
  return (
    <div>
      <p>
        <label htmlFor={name}>{labelText}</label>
      </p>
      <input id={name} value={value} name={name} onChange={onChange} type={type} min={min} max={max} />
      {hasError && <p className='errorMessage'>Missing field</p>}
    </div>
  )
}
