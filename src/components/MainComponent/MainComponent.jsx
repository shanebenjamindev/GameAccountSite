import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigator from '../NavigatorComponent/Navigator'
import Banner from '../BannerComponent/Banner'

export default function MainComponent() {
  return (
    <main className='h-100'>
      <Banner />
      <Navigator />
      <Outlet />
    </main>
  )
}