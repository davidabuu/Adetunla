import React from 'react'
import { GalleryStyle } from '../../StyledComponents/Styled'
import SwiperGallery from './Swiper'

const Gallery = () => {
  return (
    <GalleryStyle>
        <h1>Gallery</h1>
        <SwiperGallery/>
    </GalleryStyle>
  )
}

export default Gallery