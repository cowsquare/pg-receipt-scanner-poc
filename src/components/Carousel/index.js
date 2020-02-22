import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
const images = [
  {
    original: '/static/images/slider1.png',
    height: 230
  },
  {
    original: '/static/images/slider3.png',
    height: 230
  },
  {
    original: '/static/images/slider4.png',
    height: 230
  },
];

export default class MyGallery extends React.Component {
  render() {
    return <ImageGallery
      items={images}
      showNav={false}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets={true}
    />;
  }
}