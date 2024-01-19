import React from 'react'
import banner from '../../../assets/images/banner.jpg'
import { WrapperBanner } from './style'
export default function Banner() {
  return (
    <WrapperBanner>
      <img src={banner} />
      <h1>Welcome To Shop Wibu Account</h1>
    </WrapperBanner>
  )
}
