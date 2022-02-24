import React from 'react'
import { StudentListProps } from './interface'

export const UserList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <ul>
      {students.map(({name, grade}) => (
        <li key={name + grade}>{name} - {grade}</li>
      ))}
    </ul>
  )
}
