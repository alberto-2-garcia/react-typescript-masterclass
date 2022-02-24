import React from 'react'
import { InputTextProps } from './interface'

export const InputText: React.FC<InputTextProps> = ({ value, labelText, name, onChange, type, min, max }) => {
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <input id={name} value={value} name={name} onChange={onChange} type={type} min={min} max={max} />
    </div>
  )
}
