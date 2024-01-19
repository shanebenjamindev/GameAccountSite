import React from 'react'
import Navigator from './Navigator/Navigator'
import Carousel from './Carousel/Carousel'
import ListGame from './ListGame/ListGame'
import Banner from './Banner/Banner'
export default function Home() {
  return (
    <div>
      <Banner />
      <Navigator />
      <Carousel />
      <ListGame />
    </div>
  )
}
