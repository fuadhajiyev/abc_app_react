import React from 'react'
import { useParams } from 'react-router-dom'

export default function User(props) {
  const { userId } = useParams();
  return (
    <div>
      User ! ! {userId}
    </div>
  )
}
