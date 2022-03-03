import React from 'react'
import { TextAreaProps } from './interface'

export const TextArea: React.FC<TextAreaProps> = ({ value, labelText, name, onChange, hasError }) => {
  return (
    <div>
      <p>
        <label htmlFor={name}>{labelText}</label>
      </p>
      <textarea id={name} value={value} name={name} onChange={onChange}  />
      {hasError && <p className='errorMessage'>Missing field</p>}
    </div>
  )
}
