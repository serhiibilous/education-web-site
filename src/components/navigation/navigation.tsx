import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
      <p>Navigation</p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </div>
  )
}
