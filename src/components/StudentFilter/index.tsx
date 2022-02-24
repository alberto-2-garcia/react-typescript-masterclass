import React from 'react'
import { UserList } from '../StudentList'
import { StudentFilterProps } from './interface'

export const StudentFilter: React.FC<StudentFilterProps> = ({ title, studentList }) => {
  return (
    <div>
      <h1>{title}</h1>
      <UserList students={studentList} />
    </div>
  )
}
