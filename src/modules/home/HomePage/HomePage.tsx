import React from 'react'
import { Carousel } from '../Carousel'
import { List } from '../List'
import { Video } from '../video'
import { VideoList } from '../videoList'
import { End } from '../end'

const HomePage: React.FC = () => {
  return (
    <div>
      <Carousel />
      <List/>
      <Video/>
      <VideoList/>
      <End/>
    </div>
  )
}

export default HomePage
