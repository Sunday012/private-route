import React from 'react'
import {Navigate} from 'react-router-dom'

export default function AuthWrapper({children, condition}) {

  return (
    !condition ? <Navigate to="/login" /> : children
  )
}

