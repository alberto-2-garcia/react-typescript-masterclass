import React from 'react'
import { UserInfoProps } from './interface'

export const UserInfo: React.FC<UserInfoProps>  = ({ user }) => {
  const { avatar, first_name, last_name } = user;

  return (
    <div>
      <img src={ avatar }/>
      { first_name + ' ' + last_name }
    </div>
  )
}
