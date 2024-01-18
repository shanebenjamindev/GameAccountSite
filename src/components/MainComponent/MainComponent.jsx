import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MainComponent() {
  return (
    <main className='h-100'>
    this is main component
      <Outlet />
    </main>
  )
}
