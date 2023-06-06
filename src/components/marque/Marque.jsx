import React from 'react'
import Marquee from 'react-fast-marquee'
import Container from '../container/Container'

const Marque = ({ images }) => {
  return (
    <Container classOne="marque py-4">
        <div className="card-wrapper">
            <Marquee className='marque-container'>
                {images.map(item => (
                    <div key={item.id} className='brand'>
                        <img src={item.image} alt="brand" />
                    </div>
                ))}
            </Marquee>
        </div>
    </Container>
  )
}

export default Marque