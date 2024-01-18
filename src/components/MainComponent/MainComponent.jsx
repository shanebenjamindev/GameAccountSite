import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MainComponent() {
  return (
    <main>
      this is main component
      <Outlet />
    </main>
  )
}
