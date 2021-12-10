import React from 'react'
import {  Image } from 'semantic-ui-react'
import './Banner.css'


const Banner = () => {
    return (
            <div className='Contenido'>
            <h1 className='Iphone-text'>Nuevo iPhone 13 Pro Max!</h1>
            <Image src='https://www.apple.com/v/iphone-13-pro/c/images/meta/iphone-13-pro_specs__5omxro080oyy_og.png' />
            <img className='Macbook' src='https://www.apple.com/la/macbook-air/images/overview/camera_hero_hardware__dri77prvl64i_large_2x.jpg' alt='Imagen' />
            <h1 className='Macbook-text'>MacBook!</h1>
            <img className='iPad' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-og-202104?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1618674417000' alt='Imagen' />
            <h1 className='iPad-text'>iPad!</h1>
        </div>
    )
}

export default Banner
