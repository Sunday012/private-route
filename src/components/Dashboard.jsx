import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
export default function Dashboard(users) {
  const auth = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
     auth.logout()
     navigate("/")
  }
  return (
    <div>
        <h1>{auth.user} Dashboard</h1>
        <button onClick={handleLogout}>Log out</button>
    </div>
  )
}
