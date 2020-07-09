import React from 'react'
import UserItem from './UserItem'
import Spinner from '../Spinner'

const Users = ({loading, users}) => {
  if(loading){
    return <Spinner/>
  }else{
    return (
      <div style={userStyle}>
        {users.map(user => {
          return <UserItem key={user.id} user={user}> </UserItem>
        })}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
