import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function Private() {
    const auth = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
     auth.logout()
     navigate("/")
  }
  return (
    <>
    <div><h1>Welcome to {auth.user} Page</h1></div>
    <button onClick={handleLogout}>Log out</button>
    </>
  )
}
